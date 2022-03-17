import './navbar.modules.css' 
import { Link } from 'react-router-dom'


function NavBar() {
return (
    <div className="nav-container">
        {/* <Image src='./nav-logo.svg' h='40px'/> */}
        <img className="nav-logo" src="./nav-logo.svg" alt="" />
        <Link to='/'  >
        <div className="nav-heading">    
        Everyday News
        </div>
        </Link>
    </div>   

);
  }
  
  export default NavBar;
  