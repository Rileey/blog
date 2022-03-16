import './navbar.modules.css' 


function NavBar() {
return (
    <div className="nav-container">
        {/* <Image src='./nav-logo.svg' h='40px'/> */}
        <img className="nav-logo" src="./nav-logo.svg" alt="" />
        <div className="nav-heading">    
        Everyday News
        </div>
    </div>   

);
  }
  
  export default NavBar;
  