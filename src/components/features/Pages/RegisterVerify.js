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

const RegisterVerify = () => {
    const history = useHistory();
    const params = useParams().id;
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const [code,setCode]=useState()
    const submit=()=>{
      const axios = require("axios");
      console.log(code)


  if(!code)
  {
  setTitle(" مقادیر را وارد نمائید")
  setOpen(true)
  }
  else{

      axios.post(apiUrl + "VerifyRegister",{VerifyCode:code})
      .then(function (response) {
        if (response.data.result == "true") {

          // setBlog(response.data.Data)
          history.push("/RegisterStep2/"+params)

      }
      else{
        setTitle("کد نادرست می باشد")
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

           <button className="closeBtn">
           <FaTimes className="closeIcon" size={25}/>
           </button>
            <img src={RedLogo}/>
            <p className="loginTitle">
                کد تایید
            </p>
            <p className="loginText">
            کد تایید ارسال شده را وارد کنید
            </p>
            <input className="inputLogin marTop35" placeholder="کد تایید را وارد کنید" type="text" onChange={(e)=>setCode(e.target.value)}/>

            <div className="mar-top-40">
                <button onClick={()=>submit()} className="loginBtn" type="submit">
                تایید شماره موبایل
                </button>
            </div>
            <div className="mar-top-20">
                <p className="rememberPassLable">
                    با ورود و ثبت نام در <a href="#" className="whiteColor">راگ استریکس</a> شما <a href="#" className="underLine">شرایط و قوانین</a> استفاده از سرویس های این سایت و <a href="#" className="underLine">قوانین حریم خصوصی</a> آن را می پذیرید.
                </p>
            </div>
       </div>
   </div>
  );
};
export default RegisterVerify;
