import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RedLogo from '../../assets/img/redLogo.png';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import React,{useState,useEffect} from 'react'
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import CustomizedDialogs from './layouts/AlertModal';
import { useTranslation } from 'react-i18next';

const RegisterVerify = () => {
    const history = useHistory();
    const params = useParams().id;
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const [code,setCode]=useState()
    const {t,i18n} = useTranslation();

    const submit=()=>{
      const axios = require("axios");
      console.log(code)

var ss=localStorage.getItem("ver")
  if(!code)
  {
  setTitle(" مقادیر را وارد نمائید")
  setOpen(true)
  }
  else{
if(ss==code)
 {  
      // axios.post(apiUrl + "VerifyRegister",{VerifyCode:code})
      // .then(function (response) {
      //   if (response.data.result == "true") {

          // setBlog(response.data.Data)
          localStorage.setItem("ver","")

          history.push("/RegisterStep2/"+params)

    //   }
    //   else{
    //     setTitle("کد نادرست می باشد")
    //     setOpen(true)

    //   }})
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    }
    else{
              setTitle("کد نادرست می باشد")
        setOpen(true)
    }
}

    }
  return (
   <div className="loginPage">
       <div className="loginBox">
       <CustomizedDialogs Title={title} open={open} setOpen={setOpen}/>

           <button className="closeBtn">
           <FaTimes className="closeIcon" size={25}/>
           </button>
            <img src={RedLogo}/>
            <p className="loginTitle">
            {t("کد تایید")}
            </p>
            <p className="loginText">
            {t("کد تایید ارسال شده را وارد کنید")}
            </p>
            <input className="inputLogin marTop35" placeholder={t("کد تایید را وارد کنید")} type="text" onChange={(e)=>setCode(e.target.value)}/>

            <div className="mar-top-40">
                <button onClick={()=>submit()} className="loginBtn" type="submit">
                {t("تایید شماره موبایل")}
                </button>
            </div>
            <div className="mar-top-20">
                <p className="rememberPassLable">
                {t("با ورود و ثبت نام در")} <a href="#" className="whiteColor"> {t("راگ استریکس")}</a>  {t("شما")} <a href="#" className="underLine">{t("شرایط و قوانین")}</a> {t("استفاده از سرویس های این سایت و")} <a href="#" className="underLine"> {t("قوانین حریم خصوصی")}</a>  {t("آن را می پذیرید.")}
                </p>
            </div>
       </div>
   </div>
  );
};
export default RegisterVerify;
