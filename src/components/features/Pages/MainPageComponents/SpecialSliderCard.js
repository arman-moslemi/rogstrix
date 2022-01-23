import react from "react";
import "./Styles/specialOfferSlider.css"
import specialSliderImg from "../../../assets/img/specialSliderImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";

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
const SpecialSliderCard = () => {
  return (
   
      <div className="SpecialSliderCard">
  <div className="specialSliderCardBox">
  <img src={specialSliderImg}/>
      <ul className="colorList">
        <li>
          <div id="color1"></div>
        </li>
        <li>
          <div id="color2"></div>
        </li>
        <li>
          <div id="color3"></div>
        </li>
      </ul>
  </div>
  <p className="productName">
    {truncate("هندزفری شیائومی مدل m123",25)}
  </p>
  <hr className="redHr"/>
  <div className="row">
    <Col md={4} className="pd0">
      <div className="timeSpecialOffer">
        <p>۴:۱۰:۲۴</p>
      </div>
    </Col>
    <Col md={8} className="ta-left pd0">
      <p className="specialPrice">
      ۵۶،۰۰۰،۰۰۰
      </p>
      <p className="strokeOutPrice">
      ۵۰،۰۰۰،۰۰۰
      </p>
    </Col>
  </div>
      </div>
   
  );
}; 
export default SpecialSliderCard;
