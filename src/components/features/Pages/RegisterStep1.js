import { Container ,Col, Button,Row} from "react-bootstrap";

import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RedLogo from '../../assets/img/redLogo.png';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import React,{useState,useEffect} from 'react'
import { Link, useHistory } from "react-router-dom";
import CustomizedDialogs from './layouts/AlertModal';

const RegisterStep1 = () => {
    const history = useHistory();

    const [mobile,setMobile]=useState()
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const login=()=>{
      const axios = require("axios");
      console.log(mobile)

  if(!mobile)
  {
    setTitle("همه مقادیر را وارد نمائید")
    setOpen(true)  }
  else{


      axios.post(apiUrl + "RegisterSMS",{Mobile:mobile})
      .then(function (response) {
        if (response.data.result == "true") {
          console.log(response.data.Data)
localStorage.setItem("ver",response.data.Data)
          // setBlog(response.data.Data)
          history.push("/RegisterVerify/"+mobile)

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

           <button className="closeBtn">
           <FaTimes className="closeIcon" size={25}/>
           </button>
            <img src={RedLogo}/>
            <p className="loginTitle">
                ثبت نام
            </p>
            <p className="loginText">
            شماره موبایل خود را وارد کنید.
            </p>
            <input className="inputLogin  marTop35" placeholder="شماره موبایل خود را وارد کنید" type="text"  onChange={(e)=>setMobile(e.target.value)}/>
            <div className="d-flex justify-content-between mar-top-35 align-items-center">
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
            </div>
            <div className="mar-top-40">
                <button onClick={()=>login()} className="loginBtn" type="submit">
ثبت                </button>
            </div>

       </div>
   </div>
  );
};
export default RegisterStep1;
