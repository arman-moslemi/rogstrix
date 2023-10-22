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
import { useTranslation } from 'react-i18next';
import React,{useState,useEffect,useContext} from 'react'
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import { AuthContext } from "../../../../context/auth-context";

const FooterMain = () => {
  const {t,i18n} = useTranslation();
  const [data,setData]=useState([])
  const { isLoggedIn, token } = useContext(AuthContext);

  const scrollToTop = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
  const mainSlider=async()=>{
    const axios = require("axios");
    const lang=await localStorage.getItem("lang")
    i18n.changeLanguage(lang)

    
   axios.get(apiUrl + "Information",{ headers: {
      lang: i18n.language
    }})
    .then(function (response) {
      if (response.data.result == "true") {

        setData(response.data.Data)
        console.log(11)
        console.log(response.data.Data)

    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });

    




  }
  useEffect(() => {
    mainSlider();
// alert(val)
  }, []);
  return (
   <div>
      <div className="backgroundFooter">
      <Container className="footerBg" fluid>
        <div className="row">
          <Col md={3} xs={4}>
          <p className="footerLightTitle">
          {t("راگ استریکس")}
          </p>
          <ul className="footerLightUl">
            <li>
              <a href="/About/Liecence">
              {t("مجوز و گواهی نامه ها")}
              </a>
            </li>
            <li>
              <a href="/About/Rules">
              {t("قوانین و مقررات")}
              </a>
            </li>
            <li>
              <a href="/About/Privatee">
              {t("حریم خصوصی")}
              </a>
            </li>
            <li>
              <a href="/About/RuleWarranty">
              {t("قوانین گارانتی")}
              </a>
            </li>
            <li>
              <a href="/ContactUs">
              {t("تماس با ما")}
              </a>
            </li>
            <li>
              <a href="/About/Aboutus">
              {t("درباره ما")}
              </a>
            </li>
          </ul>
          </Col>
          <Col md={3} xs={4}>
          <p className="footerLightTitle">
          {t("راهنما")}
          </p>
          <ul className="footerLightUl">
            <li>
              <a href="/About/OriginalProduct">
              {t("تضمین اصالت کالا")}
              </a>
            </li>
            <li>
              <a href="/About/ReturnProduct">
              {t("شرایط عودت کالا")}
              </a>
            </li>
            <li>
              <a href="/About/SendProduct">
              {t("نحوه ارسال کالا")}
              </a>
            </li>
            <li>
              <a href="/About/Help">
              {t("راهنمای خرید")}
              </a>
            </li>
            {/* <li>
              <a href="/About/">
               تخفیف ها
              </a>
            </li>
            <li>
              <a href="/About/">
                استخدام
              </a>
            </li> */}
          </ul>
          </Col>
          <Col md={3} xs={4}>
          <p className="footerLightTitle">
          {t("مطالب مفید")}
          </p>
          <ul className="footerLightUl">
            <li>
              <a href="#">
              {t("قیمت گوشی سامسونگ")}
              </a>
            </li>
            <li>
              <a href="#">
              {t("قیمت گوشی شیائومی")}
              </a>
            </li>
            <li>
              <a href="#">
              {t("قیمت گوشی هواوی")}
              </a>
            </li>
            <li>
              <a href="#">
              {t("قیمت لپ تاپ")}
              </a>
            </li>
            <li>
              <a href="#">
              {t("قیمت دوربین عکاسی")}
              </a>
            </li>
            <li>
              <a href="#">
              {t("قیمت ساعت هوشمند")}
              </a>
            </li>
            <li>
              <a href="#">
              {t("لیست تکنولوژی های برتر")}
              </a>
            </li>
            <li>
              <a href="#">
              {t("برندها")}
              </a>
            </li>
          </ul>
          </Col>
          <Col md={3} xs={12} className="ta-right pd0">
            <RedFooterLogo className="d-none Logores-block"/>
        <div className="footerResNone">
        <p className="footerLightTitle">
        {t("راه های ارتباطی با راگ استریکس")}
          </p>
          <div className="socialRow mt-4">
            <div onClick={()=>window.open(data?.Aparat)} className="socialIcon">
              <img src={aparat}/>
            </div>
            <div onClick={()=>window.open(data?.Linkedin)} className="socialIcon">
              <img src={linkdin}/>
            </div>
            <div onClick={()=>window.open(data?.Facebook)} className="socialIcon">
              <img src={facebook} style={{height:27,width:13}}/>
            </div>
            <div onClick={()=>window.open(data?.Telegram)} className="socialIcon">
              <img src={telegram}/>
            </div>
            <div onClick={()=>window.open(data?.Twitter)} className="socialIcon">
              <img src={twitter}/>
            </div>
            <div onClick={()=>window.open(data?.Instagram)} className="socialIcon">
              <img src={insta}/>
            </div>
          </div>
         
          <br/>
          <p className="mailTitle mt-4">{t("عضویت در خبرنامه")}</p>
          <div className="d-flex-start-start">
            <div>
              <input placeholder={t("نشانی ایمیل خود را وارد کنید")}  className="emailInput w230"/>
            </div>
            <div>
              <button onClick={()=>isLoggedIn?alert("یا موفقیت عضو خبرنامه شدید"):alert("لطفا وارد شوید")}   className="submitBtn backRed">{t("عضویت")}</button>
            </div>
          </div>
          <div className="row mt-4">
            <Col md={4} className="pd22">
              <div className="enamadBox">
              <a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=323944&amp;Code=K4jIx7AwomBstoeXvUYO">
                <img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=323944&amp;Code=K4jIx7AwomBstoeXvUYO" alt=""  id="K4jIx7AwomBstoeXvUYO"/>

                </a>
                {/* <img src={Enamad}/> */}
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
        <p className="mailTitle mt-4 ta-center">{t("عضویت در خبرنامه")}</p>
          <div className="d-flex justify-content-center">
            <div>
              <input placeholder={t("نشانی ایمیل خود را وارد کنید")}  className="emailInput w230"/>
            </div>
            <div>
              <button onClick={()=>isLoggedIn?alert("یا موفقیت عضو خبرنامه شدید"):alert("لطفا وارد شوید")}  className="submitBtn backRed">{t("عضویت")}</button>
            </div>
          </div>
       
          <div className="socialRow mt-4">
            <div onClick={()=>window.open(data?.Aparat)} className="socialIcon">
              <img src={aparat}/>
            </div>
            <div onClick={()=>window.open(data?.Linkedin)}className="socialIcon">
              <img src={linkdin}/>
            </div>
            <div onClick={()=>window.open(data?.Facebook)} className="socialIcon">
              <img src={facebook} style={{height:27,width:13}}/>
            </div>
            <div onClick={()=>window.open(data?.Telegram)}className="socialIcon">
              <img src={telegram}/>
            </div>
            <div onClick={()=>window.open(data?.Twitter)}className="socialIcon">
              <img src={twitter}/>
            </div>
            <div onClick={()=>window.open(data?.Instagram)} className="socialIcon">
              <img src={insta}/>
            </div>
          </div>
         
          <br/>
       
        </div>
          </Col>
        </div>
        <div className="row">
          <Col md={12} className="ta-center">
            <button className="upBtn" onClick={()=>scrollToTop()}>
            <img src={up}/>
            </button>
          </Col>
        </div>
        
      </Container>
    </div>
    <div className="lastFooterRow">
      <p>{t("کلیه حقوق مادی و معنوی برای گروه جمهوری گیمرهای ایران محفوظ است.")}</p>
    </div>
   </div>
  );
};
export default FooterMain;
