import react from "react";
import "./Styles/sliderCard.css"
import cardImg from "../../../assets/img/cardImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
const SliderCard = () => {
  return (
   
      <div className="SliderCard">
       <div className="sliderCardDiv">
       <img src={cardImg} className="sliderCardImg"/>
       </div>
       <div className="cardTitleW100">
          <p>مانیتور ۴۰ اینچ اولد ویژه گیمینگ</p>
       </div>
       <div className="row pad-right-1 pad-left-1 mar-top-2">
         <Col md={6} className="ta-right">
        <p className="cardDes">
          نوع اتصال : بی سیم
        </p>
        <p className="cardDes">
          نوع : آرگونومیک
        </p>
        <p className="cardDes">
          مناسب برای : بازی
        </p>
         </Col>
         <Col md={6} className="ta-left">
          <p className="strokeOutPrice">
            60.000.000
          </p>
          <p className="cardPrice">
            56.000.000
          </p>
         </Col>
       </div>
      </div>
   
  );
}; 
export default SliderCard;
