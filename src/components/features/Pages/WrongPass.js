import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RedLogo from '../../assets/img/redLogo.png';
const WrongPass = () => {

  return (
   <div className="loginPage">
       <div className="loginBox">
           <button className="closeBtn">
           <FaTimes className="closeIcon" size={25}/>
           </button>
            <img src={RedLogo}/>
            <p className="loginTitle">
            رمز ورود/نام کاربری اشتباه است
            </p>
            <p className="loginText">
            برای بازیابی رمز شماره موبایل خود را وارد کنید
            </p>
            <input className="inputLogin marTop35" placeholder="4456" type="text"/>
          
            <div className="mar-top-80">
                <button className="loginBtn" type="submit">
                ارسال درخواست بازیابی رمز عبور
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
export default WrongPass;
