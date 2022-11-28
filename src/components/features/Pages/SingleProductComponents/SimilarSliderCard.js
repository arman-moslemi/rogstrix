import react from "react";
import "./Styles/singleProduct.css"
import specialSliderImg from "../../../assets/img/specialSliderImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import { apiAsset } from "../../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

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
  console.log(555)
  console.log(data)
  const history = useHistory();
  const {t,i18n} = useTranslation();

  return (
    <div className="SpecialSliderCard">
    {/* <Link onClick={()=>history.push("/singleProduct/"+data.ProductID)} > */}
    <Link onClick={()=>{history.push("/singleProduct/"+data.EngProductName.replace(/%20/g, " "));window.location.reload()}} >

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
{truncate(data.ProductName+" "+data.BrandName,45)}
</p>
<hr className="redHr"/>
<div className="row">

<Col md={8} className="ta-left pd0">
<p className="specialPrice">
{(parseInt(data.Cost)-parseInt(data.SpecialCost)).toLocaleString("en-de")}{t("تومان")}
</p>
<p className="strokeOutPrice">
{data.Cost.toLocaleString("en-de")}{t("تومان")}
</p>
</Col>
</div>
</Link>

</div>
//                                 <Link  className="BestSellingCard" onClick={()=>{history.push("/singleProduct/"+data.EngProductName);window.location.reload()}} >


//   <p className="productName">
//   <img src={apiAsset+data?.Pic1}/>
//   </p>
//   <div className="cardTitleW100">
//           <p>{truncate(data.ProductName,60)}</p>
//        </div>
// <div className="row marginTop30">
//   <Col md={4} className="pad0 ta-right">
//     <p className="grayStrokeOut">
//     {data?.Cost}
//     </p>
//   </Col>
//   <Col md={8} className="pad0 ta-left">
//     <p className="grayPrice">
//     {parseInt(data?.Cost)-parseInt(data?.SpecialCost)}
//  تومان
//     </p>
//   </Col>
// </div>
// {/* {
//   props.viewList==true?
// <div className="row marginTop20">
//   <Col md={12} className="pad0 ta-right">
//     <a href="#" className="seeAllCards" >
//       مشاهده لیست هندزفری
//     </a>
//   </Col>
//   </div>
//   :
// null
// } */}


//       </Link>

  );
};
export default SimilarSliderCard;
