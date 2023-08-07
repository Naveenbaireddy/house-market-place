import {useNavigate,useLocation} from 'react-router-dom'; 
import {ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import {ReactComponent as  PersonalOutLineIcon} from '../assets/svg/personOutlineIcon.svg'

function Navbar(){
    const navigate=useNavigate()
    const location=useLocation();
    const pathMatchRoute=(route)=>{
        if(route===location.pathname){
            return true;
        }
    }
    return(
        <footer className='navbar'>
            <nav className="navbarNav">
                <ul className='navbarListItems'>
                    <li className='navbarListItem' onClick={()=>
                        navigate('/')}>
                        <ExploreIcon fill={pathMatchRoute('/')? '#2c2c2c': '#8c8c8c'} width='36px' height='36px' />
                        <p>Explore</p>
                    </li>
                    <li className='navbarListItem' onClick={()=>{ navigate('/offers')} }>  
                        <OfferIcon fill={pathMatchRoute('/offers')? '#2c2c2c': '#8c8c8c'} width='36px' height='36px' />
                        <p>Offers</p>
                    </li>
                    <li className='navbarListItem' onClick={()=>navigate('/profile')}>
                        <PersonalOutLineIcon fill={pathMatchRoute('/profile')? '#2c2c2c': '#8c8c8c'} width='36px' height='36px' />
                        <p>Profile</p>
                    </li>
                </ul>
            </nav>
        </footer>

        )
}
export default Navbar;