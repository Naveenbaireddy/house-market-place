import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Explore from './pages/Explore';
import PrivateRoute from './components/PrivateRoute'
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import Contact from './pages/Contact'
import CreateListing from './pages/CreateListing'
import Listing from './pages/Listing'
import Category from './pages/Category';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/contact/:landLordId' element={<Contact />} />
          <Route path='/category/:categoryName/:listingId' element={<Listing/>}/>
          <Route path='/createlisting' element ={<CreateListing/>} />
          <Route path='/category/:categoryName' element={<Category/>}/>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />}/>
          </Route> 
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgotpassword' element={<ForgotPassword/> } />          
         </Routes>
        <Navbar />
      </Router>
      <ToastContainer /> 
    </div>
  );
}

export default App;