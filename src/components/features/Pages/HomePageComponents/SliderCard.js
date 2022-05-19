import react from "react";
import "./Styles/sliderCard.css"
import cardImg from "../../../assets/img/cardImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import { apiAsset } from "../../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
const SliderCard = ({data}) => {
  const history = useHistory();

  return (

      <div className="SliderCard">
                        {/* <Link onClick={()=>history.push("/singleProduct/"+data.ProductID)} > */}
                        <Link onClick={()=>history.push("/singleProduct/"+data.EngProductName.replace(" ","_"))} >

       <div className="sliderCardDiv">
       <img src={apiAsset+data.Pic1} className="sliderCardImg"/>
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
{data.Cost}     تومان     </p>
          <p className="cardPrice">
          {(parseInt(data.Cost)-parseInt(data.SpecialCost)).toLocaleString("en-de")}تومان
       </p>
         </Col>
       </div>
       </Link>
      </div>

  );
};
export default SliderCard;
