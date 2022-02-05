import react from "react";
import "./Styles/userPanel.css";
import specialSliderImg from "../../../assets/img/specialSliderImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaCommentDots , FaLongArrowAltUp} from "react-icons/fa";
import MadeSystem from "../../../assets/img/madeSystem.png";
import userProfile from "../../../assets/img/userProfile.png";
export const truncate = (str, len) => {
  console.log("truncate", str, str.length, len);
  if (str.length > len && str.length > 0) {
    let new_str = str + " ";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
};
const SevedProductsCard = (props) => {
  return (
   
     <div className="completedCard">
       <div className="imgBox marginBottom15">
       {
  props.viewOverlay==true?
         <div className="grayOverlay">
           <div className="userProfile">
             <img src={userProfile}/>
           </div>
           <div className="userName">
             <p>{truncate("محسن رحمتی",20)}</p>
           </div>
         </div>
 :
 null
 }

       <img src={MadeSystem} className="madeSystemImg"/>
       </div>
       <p className="completeProductTitle">
       {truncate("سیستم گیمینگ خوب و سریع اینتل",100)}
       </p>
      <p className="completeProductDetail">
      Intel Core i5-11400
      <br/>
Parametric Video Card (Chipset: GeForce RTX 3060; Cooling: 2 Fans, 3 Fans, 120 mm Radiator, ...)
<br/>
Phanteks Eclipse P300A Mesh ATX Mid Tower
      </p>
      <hr className="bottomDashed"/>
      <div className="row">
        <Col md={5} className="pd0">
        <div className="d-flex align-items-center">
          <div>
            <p className="bottomIcon">
              <FaCommentDots size={18} className="marginLeft10"/>
              5
            </p>
          </div>
          <div style={{marginRight:15}}>
            <p className="bottomIcon">
              <FaLongArrowAltUp size={18} className="marginLeft10"/>
             12
            </p>
          </div>
          <div>

          </div>
        </div>
        </Col>
        <Col md={7} className="pd0 ta-left">
          <p className="completedPrice">
          ۲۴،۵۶۵،۰۰۰ تومان
          </p>
        </Col>
      </div>
     </div>
   
  );
}; 
export default SevedProductsCard;
