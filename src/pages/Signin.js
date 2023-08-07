import {useState} from 'react';
import OAuth from '../components/OAuth';
import {Link,useNavigate} from 'react-router-dom';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { toast } from 'react-toastify';
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg' 

function Signin(){
    const [showpassword,setShowPassword]=useState(false)
    const [formdata,setFormData]=useState({
        email:'',
        password:''
})
    const{email,password}=formdata
    const navigate=useNavigate()
    const onChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]:e.target.value

        }))
    }
    const onSubmit=async(e)=>{
        e.preventDefault()
        try{
        const auth=getAuth()
        const userCredential=await signInWithEmailAndPassword(auth,email,password)
        if(userCredential.user){
            navigate('/')
        }
        }
        catch(e)
        {
            toast.error('wrong user credentials');
        }

    }

    return(
        <div className='pageContainer'>
            <header>
            <p className='pageHeader'>WelcomeBack!</p>
            </header>
            <form onSubmit={onSubmit}>
                <input type='text' className='emailInput'
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
                        Sign In  
                    </p>
                    <button className='signInButton'>
                        <ArrowRightIcon fill='#ffffff' width='34px'
                        height='34px'/>
                    </button>
                </div>
            </form>
            <OAuth/>
            <Link to='/signup' className='registerLink'>
                Sign Up Instead
            </Link>
        </div>
    )
}
export default Signin;