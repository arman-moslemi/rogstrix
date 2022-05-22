import react from "react";
import "./Styles/userPanel.css"
import specialSliderImg from "../../../assets/img/specialSliderImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import { apiAsset } from "../../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";

export const truncate = (str, len) => {
  // console.log("truncate", str, str.length, len);
  if (str.length > len && str.length > 0) {
    let new_str = str + " ";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
};
const ProductsViewdCard = (props) => {
  const history=useHistory()

  return (

      // <Link onClick={()=>history.push("/singleProduct/"+props.data.ProductID)} className="BestSellingCard">
      <Link onClick={()=>history.push("/singleProduct/"+props.data.EngProductName.replace(" ","_"))} className="BestSellingCard">
  <div className="specialSliderCardBox">
  <img src={apiAsset+props.data.Pic1}/>
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
    {truncate(props.data.ProductName,25)}
  </p>
<div className="row marginTop30">
  <Col md={4} className="pad0 ta-right">
    <p className="grayStrokeOut">
    {props.data.Cost.toLocaleString("en-de") }   </p>
  </Col>
  <Col md={8} className="pad0 ta-left">
    <p className="grayPrice">
    {parseInt(props.data.Cost)-parseInt(props.data?.SpecialCost)}
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


      </Link>

  );
};
export default ProductsViewdCard;
