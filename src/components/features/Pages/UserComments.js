import {React,useState} from "react";
import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRegEye } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RightMenu from "./UserPanelComponents/RightMenu";
import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import PanelComment from "../../assets/icons/panelComment";
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'react-i18next';

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
const UserComments = () => {
  const {t,i18n} = useTranslation();

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
      <PanelComment className="rightMenuImg"/>
      <p className="fontWeightBold ml-4" href="#">
      {t("نظرات من")}
                </p>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="grayBoxTop">
                     <div id="w35">
                         <p>
                         {t("محصول")}
                         </p>
                     </div>
                     <div id="w50">
                        <p>
                        {t("متن")}
                        </p>
                     </div>
               
                     <div id="w15">
                     <p>
                     {t("تاریخ")}
                        </p>
                         </div>
                        
                       
                 </div>
                 <div className="tableOrder">
                 <div id="w35">
                         <p>
                         {truncate("هندزفری شیائومی مدل akl9068768760",45)}
                         </p>
                     </div>
                     <div id="w50">
                        <p>
                        {truncate("لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد ",80)}
                        </p>
                     </div>
               
                     <div id="w15">
                     <p>
                     1400/12/01
                        </p>
                         </div>
                 </div>
                 <div className="tableOrder">
                 <div id="w35">
                         <p>
                         {truncate("هندزفری شیائومی مدل akl9068768760",45)}
                         </p>
                     </div>
                     <div id="w50">
                        <p>
                        {truncate(" این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است",80)}
                        </p>
                     </div>
               
                     <div id="w15">
                     <p>
                     1400/02/01
                        </p>
                         </div>
                 </div>
              
             </div>
         </Col>
     </div>
    
    </Container>
    <RedBox/>
    <FooterMain />
  </div>
  );
};
export default UserComments;
