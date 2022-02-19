import react from "react";
import "./Styles/sliderCard.css"
import cardImg from "../../../assets/img/cardImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
const SliderCard = ({data}) => {
  return (

      <div className="SliderCard">
       <div className="sliderCardDiv">
       <img src={cardImg} className="sliderCardImg"/>
       </div>
       <div className="cardTitleW100">
          <p>{data.Title}</p>
       </div>
       <div className="row pad-right-1 pad-left-1 mar-top-2">
         <Col md={6} className="ta-right">
        {/* <p className="cardDes">
          نوع اتصال : بی سیم
        </p>
        <p className="cardDes">
          نوع : آرگونومیک
        </p>
        <p className="cardDes">
          مناسب برای : بازی
        </p> */}
         </Col>
         <Col md={6} className="ta-left">
          <p className="strokeOutPrice">
{data.Cost}          </p>
          <p className="cardPrice">
          {parseInt(data.Cost)-parseInt(data.SpecialCost)}
       </p>
         </Col>
       </div>
      </div>

  );
};
export default SliderCard;
