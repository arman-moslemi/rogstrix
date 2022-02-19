import react from "react";
import "./Styles/specialOfferSlider.css"
import specialSliderImg from "../../../assets/img/specialSliderImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import { apiAsset } from "../../../../commons/inFormTypes";

export const truncate = (str, len) => {
  if (str.length > len && str.length > 0) {
    let new_str = str + " ";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
};
const SpecialSliderCard = ({data}) => {
  return (

      <div className="SpecialSliderCard">
  <div className="specialSliderCardBox">
  <img src={apiAsset+data.Pic1}/>
      {/* <ul className="colorList">
        <li>
          <div id="color1"></div>
        </li>
        <li>
          <div id="color2"></div>
        </li>
        <li>
          <div id="color3"></div>
        </li>
      </ul> */}
  </div>
  <p className="productName">
    {truncate(data.ProductName+" "+data.BrandName,30)}
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
      {parseInt(data.Cost)-parseInt(data.SpecialCost)}
  </p>
      <p className="strokeOutPrice">
      {data.Cost}
      </p>
    </Col>
  </div>
      </div>

  );
};
export default SpecialSliderCard;
