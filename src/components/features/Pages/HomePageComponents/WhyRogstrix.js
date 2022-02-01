import react from "react";
import "./Styles/whyrogstrix.css"
import MouseImg from "../../assets/images/MouseImg.png";
import Calender from "../../../assets/icons/calender";
import Garantee from "../../../assets/icons/garantee";
import Location from "../../../assets/icons/location";
import { Container ,Col, Button,Row} from "react-bootstrap";
const Header = () => {
  return (
   
      <div className="whyRogstrix">
       <Container className="row pad-right-6 pad-left-6" fluid>
        
            <Col md={7} id="secondCol">
            <h3 className="boxTitle mar-bottom-45 mar-top-45">چرا راگ استریکس ؟</h3>
            <div className="d-flex-start-start mar-bottom-30">
              <div className="iconBox">
               <Location/>
              </div>
              <div>
                <p className="firstLine3">ارسال به سراسر کشور</p>
                <p className="secondLine3">امکان سفارش کالا از سراسر کشور،ارسال سریع و آسان کالا به سراسر کشور</p>
                </div>
            </div>
            <div className="d-flex-start-start mar-bottom-30">
              <div className="iconBox">
               <Garantee/>
              </div>
              <div>
                <p className="firstLine3">ضمانت اصالت کالا</p>
                <p className="secondLine3">خرید کالای اصل ایسوس راگ با بیمه نامه معتبر.</p>
                </div>
            </div>
            <div className="d-flex-start-start mar-bottom-30">
              <div className="iconBox">
               <Calender/>
              </div>
              <div>
                <p className="firstLine3">ضمانت بازگشت ۷ روزه</p>
                <p className="secondLine3">امکان بازگشت محصول در صورت مشکل فنی یا مغایرت کالا</p>
                </div>
            </div>
            </Col>
            <Col md={5} id="firstCol">
               <img src={MouseImg} className="mouseImg"/>
            </Col>
        
       </Container>
      </div>
   
  );
}; 
export default Header;
