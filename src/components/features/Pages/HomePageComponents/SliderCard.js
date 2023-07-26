import react from "react";
import "./Styles/sliderCard.css"
import cardImg from "../../../assets/img/cardImg.png"
import { Container ,Col, Button,Row, NavItem} from "react-bootstrap";
import { apiAsset } from "../../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const SliderCard = ({data}) => {
  const history = useHistory();
   const truncate = (str, len) => {
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  };
  const { t, i18n } = useTranslation();

  return (

      <div className="SliderCard sd1s">
                        {/* <Link onClick={()=>history.push("/singleProduct/"+data.ProductID)} > */}
                        <Link onClick={()=>history.push("/singleProduct/"+data.EngProductName.replace(/%20/g, " "))} >

       <div className="sliderCardDiv">
       <img src={apiAsset+data.Pic1} className="sliderCardImg"/>
       </div>
       <div className="cardTitleW100">
          <p>{truncate(data.ProductName,70)}</p>
       </div>
       <div className="row pad-right-1 pad-left-1 mar-top-2">
         <Col md={4} className="ta-right">
        {/* <p className="cardDes">
          نوع اتصال : بی سیم
        </p>
        <p className="cardDes">
          نوع : آرگونومیک
        </p> */}
                 {data.Available?
                  <p className="cardDes">
                    {t("موجود")}
                  </p>
                 : <p className="cardDes">
                  {t("ناموجود")}
                 </p>
                 
                 
                 }

       
         </Col>
         <Col md={8} className="ta-left">
          <p className={i18n.language=="en"?"strokeOutPriceEn":"strokeOutPrice"}>
{data.Cost}     {t("تومان")}     </p>
          <p className={i18n.language=="en"?"cardPriceEn":"cardPriceEn"}>
          {(parseInt(data.Cost)-parseInt(data.SpecialCost)).toLocaleString("en-de")} {t("تومان")} 
       </p>
         </Col>
       </div>
       </Link>
      </div>

  );
};
export default SliderCard;
