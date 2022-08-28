import react from "react";
import "./Styles/newProductSlider.css"
import specialSliderImg from "../../../assets/img/specialSliderImg.png"
import { Container ,Col, Button,Row, NavItem} from "react-bootstrap";
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
const NewProductSliderCard = ({data}) => {
  const history = useHistory();

  return (

      // <div onClick={()=>history.push("/singleProduct/"+data.ProductID)} className="NewProductCard">
      <div onClick={()=>history.push("/singleProduct/"+data.EngProductName.replace(/%20/g, " "))} className="NewProductCard">
  <div className="row NewProductCardBox">
  <Col md={7} className="ta-right">
    <p className="newProductName">
    {truncate(data.ProductName+" "+data.BrandName,45)}
    </p>
    <p className="newProductPrice">
    {(parseInt(data.Cost)-parseInt(data.SpecialCost)).toLocaleString("en-de")} تومان
    </p>
  </Col>
  <Col md={5} className="ta-left">
  <img src={apiAsset+data.Pic1}/>
  {data.Available?
                  <p className="cardDes">
                    موجود
                  </p>
                 : <p className="cardDes">
                  ناموجود
                 </p>
                 
                 
                 }
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
  </Col>
  </div>
  </div>

  );
};
export default NewProductSliderCard;
