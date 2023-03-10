import { Outlet, Link } from "react-router-dom";


const logo = "https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blta3aaa5df371a794f/6204d56a214fe9266428cec5/Logo.svg";

const Layout = () => {
  return (
    <>

      <div className="topnav">
      <div className="container flex jst-spac-btw">
        <div className="flex" title="CS.io">
        <a href="https://www.Dome.io"><img  alt="LOGO" src={logo} /></a>
        </div>
        <ul className="flex">
          <li><Link to="/#" className="link" title="Home">HOME</Link></li>
          <li><Link to="/service" className="link" title="Services">SERVICES</Link></li>
          <li><Link to="/" className="link" title="Resources">RESOURCES</Link></li>
          <li><Link to="/contact" className="link" title="Partners">PARTNERS</Link></li>
          <li><Link to="/blog" className="link" title="Blog">BLOG</Link></li>
          <li><Link to="/aboutus" className="link" title="About">ABOUT</Link></li>
        </ul>
        <div className="btn-links">
          <Link to="/login" href="javascript:void(0)" className="login-btn">LOGIN</Link>
          <Link to="/signup" href="javascript:void(0)" className="signup-btn">SIGN UP</Link>
        </div>
      </div>
      </div>
  
      <Outlet />
    </>
  
  )
};

export default Layout;