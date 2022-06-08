import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RedLogo from '../../assets/img/redLogo.png';
import { useTranslation } from 'react-i18next';

const Verify = () => {
    const {t,i18n} = useTranslation();

  return (
   <div className="loginPage">
       <div className="loginBox">
           <button className="closeBtn">
           <FaTimes className="closeIcon" size={25}/>
           </button>
            <img src={RedLogo}/>
            <p className="loginTitle">
                کد تایید
            </p>
            <p className="loginText">
            کد تایید ارسال شده را وارد کنید.
            </p>
            <input className="inputLogin marTop35" placeholder="4456" type="email"/>
            <div className="row ma-top-1 d-flex-start-start">
                <Col md={12} xs={12} sm={12} className="pad0">
                <input type="checkbox" id="rememberPass" name="rememberPass" value="rememberPass"/>
                <label for="rememberPass" className="rememberPassLable">مرا به خاطر بسپار</label>
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
export default Verify;
