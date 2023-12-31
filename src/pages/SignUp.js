import {useState} from 'react';
import OAuth from '../components/OAuth';
import {getAuth,createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {db} from '../firebase.config'
import {setDoc,doc,serverTimestamp} from 'firebase/firestore' 
import {Link,useNavigate} from 'react-router-dom';
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg' 
function SignUp(){
    const [showpassword,setShowPassword]=useState(false)
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:''
    })
    const{name,email,password}=formData
    const navigate=useNavigate()
    const onChange=(e)=>{
        setFormData((prevState)=>({
            prevState,
            [e.target.id]:e.target.value

        }))
    }
    const onSubmit=async(e)=>{
        e.preventDefault()
        try{
            const auth=getAuth()
            const userCredential=await createUserWithEmailAndPassword
            (auth,email,password)
            const user=userCredential.user
            updateProfile(auth.currentUser,{
                diaplayName:name,
            })
            const formDataCopy={...formData}
            delete formDataCopy.password
            formDataCopy.timestamp=serverTimestamp()
            await setDoc(doc(db,'users',user.uid),formDataCopy)
            navigate('/')
        }
        catch(e)
        {
            console.log(e)
        }
    }

    return(
        <div className='pageContainer'>
            <header>
            <p className='pageHeader'>WelcomeBack!</p>
            </header>
            <form onSubmit={onSubmit}>
                <input type='text' className='nameInput'
                       placeholder='Name' id='name' value={name}
                       onChange={onChange} />
                <input type='email' className='emailInput'
                       placeholder='Email' id='email' value={email}
                       onChange={onChange} />
                <div>
                    <input type={showpassword ?'text' :'password'}
                           className='passwordInput' 
                           placeholder='Password'
                           id="password" value={password}
                           onChange={onChange} 
                    />
                    <img src={visibilityIcon} 
                         alt='show password'
                         className='showPassword' 
                         onClick={()=>{setShowPassword((prevState)=>!prevState)
                    }}/>     
                </div>
                <Link to='/forgotpassword'
                      className='forgotPasswordLink'>
                        Forgot password
                </Link>
                <div className='signInBar'>
                    <p className='signInText'>
                        Sign Up
                    </p>
                    <button className='signUpButton'>
                        <ArrowRightIcon fill='#ffffff' width='34px'
                        height='34px'/>
                    </button>
                </div>
            </form>
            <OAuth/>
            <Link to='/signIn' className='registerLink'>
                Sign In Instead
            </Link>
        </div>
    )
}
export default SignUp;