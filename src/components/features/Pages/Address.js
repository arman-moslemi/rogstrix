import {React,useState} from "react";
import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaPlus } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RightMenu from "./UserPanelComponents/RightMenu";
import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import PanelAddress from "../../assets/icons/panelAddress";
import Checkbox from '@mui/material/Checkbox';

const Address = () => {
  
  return (
    <div className="">
    <Header />
  <Menu/>

 
    <Container className="UserPanelContainer" fluid>
     <div className="row">
         <Col md={3} xs={12}>
             <RightMenu/>
         </Col>
         <Col md={9} xs={12}>
             <div className="panelWhiteBox">
             <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
      <PanelAddress className="rightMenuImg"/>
      <p className="fontWeightBold ml-4" href="#">
                   آدرس های من
                </p>
      </div>
      <Button className="addressAdd">
          <FaPlus className="mr-2"/>
          افزودن آدرس جدید
      </Button>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                 <div className="shadowBox mb-4">
                     <p className="fontWeightNormal">
                     استان تهران، شهر تهران، محله چهار راه استقلال، پاسداران میدان هروی بلوار گلها — کد پستی 1669148656
                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue">
                             ویرایش
                         </Button>
                         <Button className="glassBtn" id="colorRed">
                             حذف
                         </Button>
                     </div>
                 </div>
                 <div className="shadowBox mb-4">
                     <p className="fontWeightNormal">
                     استان تهران، شهر تهران، محله چهار راه استقلال، پاسداران میدان هروی بلوار گلها — کد پستی 1669148656
                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue">
                             ثبت
                         </Button>
                         <Button className="glassBtn" id="colorRed">
                             حذف
                         </Button>
                     </div>
                 </div>
                 </div>
             </div>
         </Col>
     </div>
    
    </Container>
    <RedBox/>
    <FooterMain/>
  </div>
  );
};
export default Address;
