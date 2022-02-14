import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RedLogo from '../../assets/img/redLogo.png';
import Checkbox from '@mui/material/Checkbox';
const RegisterStep2 = () => {

  return (
   <div className="loginPage">
       <div className="loginBox">
           <button className="closeBtn">
           <FaTimes className="closeIcon" size={25}/>
           </button>
            <img src={RedLogo}/>
            <p className="loginTitle">
              ثبت نام
            </p>
            <p className="loginText">
            ایمیل خود را وارد کنید.
            </p>
            <input className="inputLogin mt-2" placeholder="ایمیل خود را وارد کنید" type="email"/>
            <input className="inputLogin marTop35" placeholder="رمز عبور خود را وارد کنید" type="password"/>
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
                <Col md={6} xs={6} sm={6} className="pad0 ta-left" >
                    <a className="rememberPassLable" style={{marginTop:7}}>رمز خود را فراموش کرده ام</a>
                </Col>
            </div>
            <div className="mar-top-30">
                <button className="loginBtn" type="submit">
                ثبت نام در راگ استریکس
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
export default RegisterStep2;
