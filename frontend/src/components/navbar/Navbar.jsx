import "./navbar.css";
import logo1 from "../navbar/assert/Group.png";
import logo2 from "../navbar/assert/Rectangle.png";
import close from "../navbar/assert/icon-close.svg";
import open from "../navbar/assert/icon-hamburger.svg";
import curveLine from "../navbar/assert/curveLine.png";
import Oval from "../navbar/assert/Oval.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <img src={curveLine} alt="" />
      <img src={Oval} alt="" />
      <div className="nav-left">
        <img className="big-img" src={logo1} alt="" />
        <img className="small-img" src={logo2} alt="" />
        <span className="logo-text">Record</span>
      </div>
      <div className="nav-right">
        <ul>
          <li>About</li>
          <li>Home</li>
          <li>Services</li>
        </ul>

        <div>
          <button className="btn ">sign up</button>
          <button className="btn n-btn2">login</button>
        </div>
        <div style={{ display: "none" }} className="toggle">
          <img src={open} alt="" />
          <img src={close} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
