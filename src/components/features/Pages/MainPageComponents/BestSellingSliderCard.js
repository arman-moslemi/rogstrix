import {react,useState,useEffect} from "react";
import "./Styles/bestSellingSlider.css"
import specialSliderImg from "../../../assets/img/specialSliderImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import { apiAsset } from "../../../../commons/inFormTypes";
import {FaRandom} from 'react-icons/fa';
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();
  const getCompare=()=>{
setCompare(localStorage.getItem("compare"))
console.log(localStorage.getItem("compare"))
console.log(159873)
if(localStorage.getItem("compare")?.split('T')?.length>4)
{localStorage.setItem("compare","")
}
  }
  const goCompare=()=>{
    // !localStorage.getItem("compare")?localStorage.setItem("compare",localStorage.getItem("compare")):localStorage.setItem("compare",localStorage.getItem("compare")+"T"+data.ProductID) ;
    console.log(222)
   localStorage.setItem("compare",localStorage.getItem("compare")+data.ProductID+"T")
    history.push("/CompareSupplyProduct/"+localStorage.getItem("compare"))
  }
  useEffect(() => {
    getCompare()
  }, []);
    return (
      
      <div className="BestSellingCard sd2s">
        {/* <Link onClick={()=>history.push("/singleProduct/"+data.ProductID)} > */}
        <Link onClick={()=>history.push("/singleProduct/"+data.EngProductName.replace(/%20/g, " "))} >
  <div className="specialSliderCardBox">
  <img src={data?.Pic1?apiAsset+data?.Pic1:data.Pic?apiAsset+data?.Pic:null} className="lastEditImg"/>
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
  {truncate(data?.ProductName+" "+data?.BrandName,140)}
  </p>
<div className=" marginTop30 bot2 ta-left">
{  data?.SpecialCost?


    <p className="grayStrokeOut mb-1">
    {data?.Cost}
    </p>
 
    :
    null}
  
{  data?.SpecialCost?
    <p className={i18n.language=="en"?"grayPriceEn":"grayPrice"}>
    {(parseInt(data?.Cost)-parseInt(data?.SpecialCost)).toLocaleString("en-de")}
    {t("تومان")} 
    </p>
    :
    <p className={i18n.language=="en"?"grayPriceEn":"grayPrice"}>
    {parseInt(data?.Cost).toLocaleString("en-de")}
    {t("تومان")} 
    </p>}
  
</div>
</Link>
<div className="row btnB2">
  <Col md={12} className="ta-right pd0">
    <Button onClick={()=>goCompare()} className="glassBtn2">
      <FaRandom/>
      {t("مقایسه محصول")}

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
