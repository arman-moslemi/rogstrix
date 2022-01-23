import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RedLogo from '../../assets/img/redLogo.png';
const Login = () => {

  return (
   <div className="loginPage">
       <div className="loginBox">
           <button className="closeBtn">
           <FaTimes className="closeIcon" size={25}/>
           </button>
            <img src={RedLogo}/>
            <p className="loginTitle">
                ورود / ثبت نام
            </p>
            <p className="loginText">
            شماره موبایل یا ایمیل خود را وارد کنید.
            </p>
            <input className="inputLogin marTop35" placeholder="ایمیل خود را وارد کنید" type="email"/>
            <div className="row ma-top-1 d-flex-start-start">
                <Col md={6} xs={6} sm={6} className="pad0">
                <input type="checkbox" id="rememberPass" name="rememberPass" value="rememberPass"/>
                <label for="rememberPass" className="rememberPassLable">مرا به خاطر بسپار</label>
                </Col>
                <Col md={6} xs={6} sm={6} className="pad0 ta-left" >
                    <p className="rememberPassLable" style={{marginTop:7}}>رمز خود را فراموش کرده ام</p>
                </Col>
            </div>
            <div className="mar-top-40">
                <button className="loginBtn" type="submit">
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
