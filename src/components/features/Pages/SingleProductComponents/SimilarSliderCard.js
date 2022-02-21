import react from "react";
import "./Styles/singleProduct.css"
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
const SimilarSliderCard = ({data}) => {
  return (

      <div className="BestSellingCard">

  <p className="productName">
  <img src={apiAsset+data?.Pic1}/>
  </p>
<div className="row marginTop30">
  <Col md={4} className="pad0 ta-right">
    <p className="grayStrokeOut">
    {data?.Cost}
    </p>
  </Col>
  <Col md={8} className="pad0 ta-left">
    <p className="grayPrice">
    {parseInt(data?.Cost)-parseInt(data?.SpecialCost)}
 تومان
    </p>
  </Col>
</div>
{/* {
  props.viewList==true?
<div className="row marginTop20">
  <Col md={12} className="pad0 ta-right">
    <a href="#" className="seeAllCards" >
      مشاهده لیست هندزفری
    </a>
  </Col>
  </div>
  :
null
} */}


      </div>

  );
};
export default SimilarSliderCard;
