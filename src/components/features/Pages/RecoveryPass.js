import { Container ,Col, Button,Row} from "react-bootstrap";

import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RedLogo from '../../assets/img/redLogo.png';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import React,{useState,useEffect} from 'react'
import { Link, useHistory } from "react-router-dom";
import CustomizedDialogs from './layouts/AlertModal';
import { useTranslation } from 'react-i18next';

const RecoveryPass = () => {
    const history = useHistory();
    const {t,i18n} = useTranslation();
    const [mobile,setMobile]=useState()
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")

    const login=()=>{
      const axios = require("axios");
      console.log(mobile)

  if(!mobile)
  {
  setTitle("همه مقادیر را وارد نمائید")
  setOpen(true)
  }
  else{

      axios.post(apiUrl + "ForgettingSMS",{Mobile:mobile})
      .then(function (response) {
        if (response.data.result == "true") {

          // setBlog(response.data.Data)
          setTitle("رمز برای شما ارسال گردید")
          setOpen(true)
          history.push("/Login")

      }

      else{
        setTitle("شماره ورودی نادرست می باشد")
setOpen(true)
      }})
      .catch(function (error) {
        console.log(error);
      });
    }



    }
  return (
   <div className="loginPage">
       <div className="loginBox">
           <CustomizedDialogs Title={title} open={open} setOpen={setOpen}/>

           {/* <button className="closeBtn">
           <FaTimes className="closeIcon" size={25}/>
           </button> */}
            <img src={RedLogo}/>
            <p className="loginTitle">
            {t("بازیابی رمز عبور")}
            </p>
            <p className="loginText">
            {t("شماره موبایل خود را وارد کنید")}
            </p>
            <input className="inputLogin  marTop35" placeholder={t("شماره موبایل خود را وارد کنید")} onChange={(e)=>setMobile(e.target.value)}type="text"/>
            {/* <div className="d-flex justify-content-between mar-top-35 align-items-center">
                <div>
                <p className="rememberPassLable marBottom0">کد تصویر را وارد کنید</p>
                </div>
                <div className="w73">
                <input className="inputLogin" placeholder="4423" />
                </div>
                <div>
                <div className="redBox33">
                    <p>
                        4423
                    </p>
                </div>
                </div>
            </div> */}
            <div className="mar-top-40">
                <button onClick={()=>login()} className="loginBtn" type="submit">
                {t("ارسال درخواست بازیابی رمز عبور")}
                </button>
            </div>

       </div>
   </div>
  );
};
export default RecoveryPass;
