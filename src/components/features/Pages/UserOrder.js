import {React,useState} from "react";
import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRegEye } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RightMenu from "./UserPanelComponents/RightMenu";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import PanelOrder from "../../assets/icons/panelOrder";
import Checkbox from '@mui/material/Checkbox';
export const truncate = (str, len) => {
    console.log("truncate", str, str.length, len);
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  };
const UserOrder = () => {
  
  return (
    <div className="">
    <Header />
  <Menu/>

 
    <Container className="UserPanelContainer" fluid>
     <div className="row">
         <Col md={3}>
             <RightMenu/>
         </Col>
         <Col md={9}>
             <div className="panelWhiteBox pdbottom150">
             <div className="rightMenuBox1">
             <div className="d-flex align-items-center">
      <PanelOrder className="rightMenuImg"/>
      <p className="fontWeightBold ml-4" href="#">
                   سفارش های من
                </p>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="grayBoxTop">
                     <div id="w7">
                         <p>
                             شماره
                         </p>
                     </div>
                     <div id="w28">
                        <p>
                            محصولات
                        </p>
                     </div>
                     <div id="w15">
                     <p>
                           تاریخ
                        </p>
                     </div>
                     <div id="w12">
                     <p>
                            مبلغ
                        </p>
                     </div>
                     <div id="w12">
                     <p>
                            پرداخت
                        </p>
                         </div>
                         <div id="w12">
                         <p>
                            وضعیت
                        </p>
                         </div>
                         <div id="w12">
                         <p>
                            مشاهده فاکتور
                        </p>
                         </div>
                 </div>
                 <div className="tableOrder">
                     <div id="w7">
                         <p>
                             1
                         </p>
                     </div>
                     <div id="w28">
                        <p>
                        {truncate("هندزفری شیائومی مدل akl9068768760",25)}
                        </p>
                     </div>
                     <div id="w15">
                     <p>
                     1400/12/01
                        </p>
                     </div>
                     <div id="w12">
                     <p>
                     23.000.000
                        </p>
                     </div>
                     <div id="w12">
                     <p>
                            پرداخت شده
                        </p>
                         </div>
                         <div id="w12">
                         <p>
                          درحال ارسال
                        </p>
                         </div>
                         <div id="w12">
                         <a href="#">
                             <FaRegEye color={'#ff004e'}/>
                         </a>
                         </div>
                 </div>
                 <div className="tableOrder">
                     <div id="w7">
                         <p>
                             1
                         </p>
                     </div>
                     <div id="w28">
                        <p>
                        {truncate("هندزفری شیائومی مدل akl9068768760",25)}
                        </p>
                     </div>
                     <div id="w15">
                     <p>
                     1400/12/01
                        </p>
                     </div>
                     <div id="w12">
                     <p>
                     23.000.000
                        </p>
                     </div>
                     <div id="w12">
                     <p>
                            پرداخت شده
                        </p>
                         </div>
                         <div id="w12">
                         <p>
                          درحال ارسال
                        </p>
                         </div>
                         <div id="w12">
                         <a href="#">
                             <FaRegEye color={'#ff004e'}/>
                         </a>
                         </div>
                 </div>
              
             </div>
         </Col>
     </div>
    
    </Container>
    <RedBox/>
    <Footer />
  </div>
  );
};
export default UserOrder;
