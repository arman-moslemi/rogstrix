import react from "react";
import "../../../assets/css/styles.css";
import RedFooterLogo from "../../../assets/icons/redFooterLogo";
import instafooter from "../../../assets/img/insta-footer.png";
import locationFooter from "../../../assets/img/location-footer.png";
import mailFooter from "../../../assets/img/mail-footer.png";
import phoneFooter from "../../../assets/img/phone-footer.png";
import telegram from "../../../assets/img/telegram.png";
import twitter from "../../../assets/img/twitter.png";
import linkdin from "../../../assets/img/linkdin.png";
import insta from "../../../assets/img/insta.png";
import facebook from "../../../assets/img/facebook.png";
import aparat from "../../../assets/img/aparat.png";
import up from "../../../assets/img/up.png";
import { Container ,Col, Button,Row} from "react-bootstrap";


const Footer = () => {
  return (
   <div>
      <div className="backgroundFooter">
      <Container className="footerBg" fluid>
        <div className="row">
          <Col md={4}>
            <p className="footerTitle">
            راگ استریکس
            </p>
            <div className="d-flex-start-start alignItem-center mar-bottom-2">
              <div className="iconBoxFooter">
              <img src={phoneFooter}/>
              </div>
              <div>
                <a href="#" className="footerItem">021-7523698</a>
              </div>
            </div>
            <div className="d-flex-start-start alignItem-center mar-bottom-2">
              <div className="iconBoxFooter">
              <img src={mailFooter}/>
              </div>
              <div>
                <a href="#" className="footerItem">giftcard@gmail.com</a>
              </div>
            </div>
            <div className="d-flex-start-start alignItem-center mar-bottom-2">
              <div className="iconBoxFooter">
              <img src={instafooter}/>
              </div>
              <div>
                <a href="#" className="footerItem">@giftcardsocialmedia</a>
              </div>
            </div>
            <div className="d-flex-start-start alignItem-center mar-bottom-2">
              <div className="iconBoxFooter">
              <img src={locationFooter}/>
              </div>
              <div style={{width:250}}>
                <a href="#" className="footerItem">تهران، خیابان آزادی، کوچه فلان، ساختمان فلان، پلاک فلان
</a>
              </div>
            </div>
          </Col>
          <Col md={4}>
          <p className="footerTitle">
            لینک های مهم
            </p>
            <ul className="footerUL">
              <li>
                <a href="">
                  راهنمای خرید
                </a>
              </li>
              <li>
                <a href="">
                  قوانین و مقررات
                </a>
              </li>
              <li>
                <a href="">
                  وبلاگ
                </a>
              </li>
              <li>
                <a href="">
                  درباره ما
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="ta-center">
          <RedFooterLogo/>
          <br/>
          <p className="mailTitle">عضویت در خبرنامه</p>
          <div className="d-flex-start-start">
            <div>
              <input placeholder="نشانی ایمیل خود را وارد کنید"  className="emailInput"/>
            </div>
            <div>
              <button type="submit" className="submitBtn">عضویت</button>
            </div>
          </div>
          <div className="socialRow">
            <div className="socialIcon">
              <img src={aparat}/>
            </div>
            <div className="socialIcon">
              <img src={linkdin}/>
            </div>
            <div className="socialIcon">
              <img src={facebook} style={{height:27,width:13}}/>
            </div>
            <div className="socialIcon">
              <img src={telegram}/>
            </div>
            <div className="socialIcon">
              <img src={twitter}/>
            </div>
            <div className="socialIcon">
              <img src={insta}/>
            </div>
          </div>
          </Col>
        </div>
        <div className="row">
          <Col md={12} className="ta-center">
            <button className="upBtn">
            <img src={up}/>
            </button>
          </Col>
        </div>
        
      </Container>
    </div>
    <div className="lastFooterRow">
      <p>کلیه حقوق مادی و معنوی برای «گروه فلان»، سایت فلان، محفوظ است.</p>
    </div>
   </div>
  );
};
export default Footer;
