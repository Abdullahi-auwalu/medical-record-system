import "./intro.css";
import Banner from "../intro/assert/Banner.png";
import curveLine from "../intro/assert/curveLine.png";
import Oval from "../intro/assert/Oval.png";

const Intro = () => {
  return (
    <div className="intro">
      {/* <img src={curveLine} alt="" />
      <img src={Oval} alt="" /> */}
      <div className="intro-left">
        <span className="intro-heading">Your medical record is safe hands</span>
        <span className="intro-text">
          get connected to hospitals with just one medical record.
        </span>
        <button className="intro-btn btn">Get started</button>
      </div>
      <div className="intro-right">
        <img src={Banner} alt="" />
      </div>
    </div>
  );
};

export default Intro;
