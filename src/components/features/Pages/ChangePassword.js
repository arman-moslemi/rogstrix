import {React,useState} from "react";
import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RightMenu from "./UserPanelComponents/RightMenu";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import PanelPassword from "../../assets/icons/panelPassword";
import Checkbox from '@mui/material/Checkbox';

const ChangePassword = () => {
  
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
             <div className="panelWhiteBox">
             <div className="rightMenuBox1">
             <div className="d-flex align-items-center">
      <PanelPassword className="rightMenuImg"/>
      <p className="fontWeightBold ml-4" href="#">
                   تغییر کلمه عبور
                </p>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                     <div className="row">
                       <Col md={12}>
                       <div className="d-flex align-items-center justify-content-between mt-4 mb-4 w80block">
                                <p className="fontWeightMedium">
                                   * کلمه عبور فعلی
                                </p>
                                <input className="EditInformationInput w70"/>
                             
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4 w80block">
                                <p className="fontWeightMedium">
                                  * کلمه عبور جدید
                                </p>
                                <input className="EditInformationInput w70"/>
                             
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4 w80block">
                                <p className="fontWeightMedium">
                                   * تکرار کلمه عبور جدید
                                </p>
                                <input className="EditInformationInput w70"/>
                             
                            </div>
                       </Col>
                     </div>
                     <div className="row">
         <Col md={12} className="ta-left">
             <Button className="saveBtn">
                 ذخیره تغییرات
             </Button>
         </Col>
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
export default ChangePassword;
