import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RedLogo from '../../assets/img/redLogo.png';
import Checkbox from '@mui/material/Checkbox';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import React,{useState,useContext} from 'react'
import { Link, useHistory } from "react-router-dom";
import CustomizedDialogs from './layouts/AlertModal';
import { AuthContext } from "../../../context/auth-context";

const Login = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const [open,setOpen]=useState(false)
  const [title,setTitle]=useState("")
  const [email,setEmail]=useState()
  const [pass,setPass]=useState()
  const login=()=>{
    const axios = require("axios");
    console.log(email)
    console.log(pass)

if(!email || !pass)
{

  setTitle("همه مقادیر را وارد نمائید")
  setOpen(true)
}
else{

    axios.post(apiUrl + "Login",{Email:email,Password:pass,GuestID:localStorage.getItem("guest")})
    .then(function (response) {
      if (response.data.result == "true") {
        console.log(777)
        console.log(response.data.Data)
        auth.login(response.data.Data.CustomerID);
        console.log(88)

        console.log("auth", auth.isLoggedIn);
        localStorage.setItem("guest","");
        history.push("/EditInformation/"+response.data.Data.CustomerID)

    }
    else{
      setTitle("نام کاربری یا رمز عبور نادرست می باشد")
      setOpen(true)

    }})
    .catch(function (error) {
      console.log(777)

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
               ورود
            </p>
            <p className="loginText">
            ایمیل خود را وارد کنید.
            </p>
            <input className="inputLogin mt-2" placeholder="ایمیل خود را وارد کنید" type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <input className="inputLogin marTop35" placeholder="رمز عبور خود را وارد کنید" type="password"onChange={(e)=>setPass(e.target.value)}/>
            <div className="row ma-top-1 d-flex-start-start">
                <Col md={6} xs={6} sm={6} className="pad0">
                <div className="d-flex checkBoxDiv">
          <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label className="rememberPassLable" style={{color:'#fff',fontSize:12}}>
              مرا به خاطر بسپار
              </label>
          </div>
                </Col>
                <Col md={3} xs={3} sm={3} className="pad0 ta-left" >
                    <Link onClick={()=>history.push("/RegisterStep1")} className="rememberPassLable" style={{marginTop:20}}>ثبت نام</Link>
                </Col>
                <Col md={3} xs={3} sm={3} className="pad0 ta-left" >
                    <Link className="rememberPassLable" style={{marginTop:7}} onClick={()=>history.push("/RecoveryPass")}>فراموشی رمز</Link>
                </Col>
            </div>
            <div className="mar-top-30">
                <button onClick={()=>login()} className="loginBtn" type="submit">
                ورود به راگ استریک
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
export default Login;
