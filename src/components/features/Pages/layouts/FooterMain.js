import react from "react";
import "../../../assets/css/styles.css";
import Samandehi from "../../../assets/img/samandehi.png";
import Enamad from "../../../assets/img/enamad.png";
import Majazi from "../../../assets/img/majazi.png";
import telegram from "../../../assets/img/telegram.png";
import twitter from "../../../assets/img/twitter.png";
import linkdin from "../../../assets/img/linkdin.png";
import insta from "../../../assets/img/insta.png";
import facebook from "../../../assets/img/facebook.png";
import aparat from "../../../assets/img/aparat.png";
import up from "../../../assets/img/up.png";
import { Container ,Col, Button,Row} from "react-bootstrap";
import RedFooterLogo from "../../../assets/icons/redFooterLogo";

const FooterMain = () => {
  return (
   <div>
      <div className="backgroundFooter">
      <Container className="footerBg" fluid>
        <div className="row">
          <Col md={3} xs={4}>
          <p className="footerLightTitle">
            راگ استریکس
          </p>
          <ul className="footerLightUl">
            <li>
              <a href="#">
                مجوز و گواهی نامه ها
              </a>
            </li>
            <li>
              <a href="#">
               قوانین و مقررات
              </a>
            </li>
            <li>
              <a href="#">
               حریم خصوصی
              </a>
            </li>
            <li>
              <a href="#">
               قوانین گارانتی
              </a>
            </li>
            <li>
              <a href="#">
                تماس با ما
              </a>
            </li>
            <li>
              <a href="#">
                درباره ما
              </a>
            </li>
          </ul>
          </Col>
          <Col md={3} xs={4}>
          <p className="footerLightTitle">
            راهنما
          </p>
          <ul className="footerLightUl">
            <li>
              <a href="#">
                تضمین اصالت کالا
              </a>
            </li>
            <li>
              <a href="#">
               شرایط عودت کالا
              </a>
            </li>
            <li>
              <a href="#">
               نحوه ارسال کالا
              </a>
            </li>
            <li>
              <a href="#">
               راهنمای خرید
              </a>
            </li>
            <li>
              <a href="#">
               تخفیف ها
              </a>
            </li>
            <li>
              <a href="#">
                استخدام
              </a>
            </li>
          </ul>
          </Col>
          <Col md={3} xs={4}>
          <p className="footerLightTitle">
            مطالب مفید
          </p>
          <ul className="footerLightUl">
            <li>
              <a href="#">
                قیمت گوشی سامسونگ
              </a>
            </li>
            <li>
              <a href="#">
              قیمت گوشی شیائومی
              </a>
            </li>
            <li>
              <a href="#">
               قیمت گوشی هواوی
              </a>
            </li>
            <li>
              <a href="#">
               قیمت لپ تاپ
              </a>
            </li>
            <li>
              <a href="#">
              قیمت دوربین عکاسی
              </a>
            </li>
            <li>
              <a href="#">
                قیمت ساعت هوشمند
              </a>
            </li>
            <li>
              <a href="#">
                لیست تکنولوژی های برتر
              </a>
            </li>
            <li>
              <a href="#">
                برندها
              </a>
            </li>
          </ul>
          </Col>
          <Col md={3} xs={12} className="ta-right pd0">
            <RedFooterLogo className="d-none Logores-block"/>
        <div className="footerResNone">
        <p className="footerLightTitle">
            راه های ارتباطی با راگ استریکس
          </p>
          <div className="socialRow mt-4">
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
         
          <br/>
          <p className="mailTitle mt-4">عضویت در خبرنامه</p>
          <div className="d-flex-start-start">
            <div>
              <input placeholder="نشانی ایمیل خود را وارد کنید"  className="emailInput w230"/>
            </div>
            <div>
              <button type="submit" className="submitBtn backRed">عضویت</button>
            </div>
          </div>
          <div className="row mt-4">
            <Col md={4} className="pd22">
              <div className="enamadBox">
                <img src={Enamad}/>
              </div>
             
            </Col>
            <Col md={4} className="pd22">
            <div className="enamadBox">
                <img src={Samandehi}/>
              </div>
             
            </Col>
            <Col md={4} className="pd22">
            <div className="enamadBox">
                <img src={Majazi}/>
              </div>
            </Col>
          </div>
        </div>
        <div className="footerDesNone">
        <p className="mailTitle mt-4 ta-center">عضویت در خبرنامه</p>
          <div className="d-flex justify-content-center">
            <div>
              <input placeholder="نشانی ایمیل خود را وارد کنید"  className="emailInput w230"/>
            </div>
            <div>
              <button type="submit" className="submitBtn backRed">عضویت</button>
            </div>
          </div>
       
          <div className="socialRow mt-4">
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
         
          <br/>
       
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
export default FooterMain;
