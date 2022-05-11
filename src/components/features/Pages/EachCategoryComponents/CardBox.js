import react from "react";
import "./Styles/cardBox.css"
import cardImg from "../../../assets/img/cardImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { apiAsset } from "../../../../commons/inFormTypes";

const CardBox = ({data}) => {
  const history = useHistory();

  return (

      <Link onClick={()=>history.push("/singleProduct/"+data.ProductID)} className="SliderCard">
       <div className="sliderCardDiv">
         {
           data?.Pic1?
           <img src={apiAsset+data.Pic1} className="sliderCardImg"/>
           :

       <img src={cardImg} className="sliderCardImg"/>
         }

       </div>
       <div className="cardTitleW100">
          <p>{data.ProductName}</p>
       </div>
       <div className="row pad-right-1 pad-left-1 mar-top-2">
         {/* <Col md={6} className="ta-right">
        <p className="cardDes">
          نوع اتصال : بی سیم
        </p>
        <p className="cardDes">
          نوع : آرگونومیک
        </p>
        <p className="cardDes">
          مناسب برای : بازی
        </p>
         </Col> */}
         <Col md={6} className="ta-left">
          <p className="strokeOutPrice">
{data.Cost.toLocaleString("en-de")}          </p>
          <p className="cardPrice">
{(parseInt(data.Cost)-parseInt(data.SpecialCost)).toLocaleString("en-de")}
        </p>
         </Col>
       </div>
      </Link>

  );
};
export default CardBox;
