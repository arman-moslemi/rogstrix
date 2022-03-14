import {react,useState,useEffect} from "react";
import "./Styles/bestSellingSlider.css"
import specialSliderImg from "../../../assets/img/specialSliderImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import { apiAsset } from "../../../../commons/inFormTypes";
import {FaRandom} from 'react-icons/fa';
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
const BestSellingSliderCard = ({data}) => {
  const [compare,setCompare]=useState()
  const history = useHistory();

  const getCompare=()=>{
setCompare(localStorage.getItem("compare"))

if(localStorage.getItem("compare")?.split('T')?.length>4)
{localStorage.setItem("compare","")
}
  }
  const goCompare=()=>{
    !localStorage.getItem("compare")?localStorage.setItem("compare",localStorage.getItem("compare")):localStorage.setItem("compare",localStorage.getItem("compare")+"T"+data.ProductID) ;
    history.push("/CompareSupplyProduct/"+localStorage.getItem("compare"))
  }
  useEffect(() => {
    getCompare()
  }, []);
    return (
      
      <div className="BestSellingCard">
        <Link onClick={()=>history.push("/singleProduct/"+data.ProductID)} >
  <div className="specialSliderCardBox">
  <img src={apiAsset+data?.Pic1}/>
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
  {truncate(data?.ProductName+" "+data?.BrandName,50)}
  </p>
<div className="row marginTop30">
{  data?.SpecialCost?

  <Col md={4} className="pad0 ta-right">
    <p className="grayStrokeOut">
    {data?.Cost}
    </p>
  </Col>
    :
    null}
  <Col md={8} className="pad0 ta-left">
{  data?.SpecialCost?
    <p className="grayPrice">
    {parseInt(data?.Cost)-parseInt(data?.SpecialCost)}
 تومان
    </p>
    :
    <p className="grayPrice">
    {parseInt(data?.Cost)}
 تومان
    </p>}
  </Col>
</div>
</Link>
<div className="row">
  <Col md={12} className="ta-right pd0">
    <Button onClick={()=>goCompare()} className="glassBtn2">
      <FaRandom/>
      مقایسه محصول

    </Button>
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
export default BestSellingSliderCard;
