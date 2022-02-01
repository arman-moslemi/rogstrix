import { Container ,Col, Button,Row} from "react-bootstrap";

import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RedLogo from '../../assets/img/redLogo.png';
const Register = () => {

  return (
   <div className="loginPage">
       <div className="loginBox">
           <button className="closeBtn">
           <FaTimes className="closeIcon" size={25}/>
           </button>
            <img src={RedLogo}/>
            <p className="loginTitle">
                بازیابی رمز عبور
            </p>
            <p className="loginText">
            شماره موبایل یا ایمیل خود را وارد کنید.
            </p>
            <input className="inputLogin  marTop35" placeholder="ایمیل خود را وارد کنید" type="email"/>
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
                <button className="loginBtn" type="submit">
                ارسال درخواست بازیابی رمز عبور
                </button>
            </div>
          
       </div>
   </div>
  );
};
export default Register;
