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
import PanelInformation from "../../assets/icons/panelInformation";
import Checkbox from '@mui/material/Checkbox';

const EditInformation = () => {
    const [showText, setShowText] = useState(false);
    const onClick = () => setShowText(true);
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
      <PanelInformation className="rightMenuImg"/>
      <p className="fontWeightBold ml-4" href="#">
                    مشخصات کاربری
                </p>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                     <div className="row">
                         <Col md={6}>
                            <p className="colTitle">
                                حساب حقیقی
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    ایمیل
                                </p>
                                <input className="EditInformationInput"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    * نام
                                </p>
                                <input className="EditInformationInput"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    * نام خانوادگی
                                </p>
                                <input className="EditInformationInput"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                   جنسیت
                                </p>
                                <select name="gender" id="gender" className="informationSelect">
                                   <option value="man">آقا</option>
                                    <option value="woman">خانم</option>

                                  </select>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                   * کدملی
                                </p>
                                <input className="EditInformationInput"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                   
                                </p>
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
              <label className="fontWeightMedium">
              تبعه خارجی فاقد کدملی هستم.
              </label>
          </div>
                            </div>
                            
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                  * موبایل
                                </p>
                                <input className="EditInformationInput"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    تلفن ثابت
                                </p>
                               <div className="d-flex justify-content-start">
                               <input className="EditInformationInput" style={{width:150,marginLeft:10}}/>
                               <input className="EditInformationInput" style={{width:60}}/>
                                
                               </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    محل سکونت
                                </p>
                                <select name="location" id="location" className="informationSelect">
                                   <option value="man">تهران</option>
                                    <option value="woman">اصفهان</option>
                                    <option value="man">ساری</option>
                                    <option value="woman">شیراز</option>
                                  </select>
                             
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    شهر
                                </p>
                                <select name="city" id="city" className="informationSelect">
                                   <option value="man">تهران</option>
                                    <option value="woman">اصفهان</option>
                                    <option value="man">ساری</option>
                                    <option value="woman">شیراز</option>
                                  </select>
                              
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                   تاریخ تولد
                                </p>
                                <input className="EditInformationInput"/>
                              
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                   شماره کارت
                                </p>
                                <input className="EditInformationInput"/>
                              
                            </div>

                         </Col>
                         <Col md={6}>
                         <p className="colTitle">
                                حساب حقوقی
                            </p>
                            <div className="mt-4">
                            {showText ?null:<Button className="saveBtn w100" style={{marginTop:20}} onClick={onClick}>
                                فعال کردن حساب حقوقی
                            </Button>}
                            </div>

                            {showText ? <div>
                        <div className="d-flex checkBoxDiv mt-4 mb-4">
          <Checkbox
        
        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label className="fontWeightMedium">
              مایل به تکمیل اطلاعات حقوقی برای خرید سازمانی هستم. 
              </label>
          </div>
          <p className="fontWeightMedium">
          با تکمیل اطلاعات حقوقی سازمان مورد نظر خود می‌توانید اقدام 
به خرید سازمانی با دریافت فاکتور رسمی و گواهی ارزش افزوده 
نمایید. 
                                </p>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    نام شرکت یا اداره
                                </p>
                                <input className="EditInformationInput"/>
                             
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    کد اقتصادی
                                </p>
                                <input className="EditInformationInput"/>
                             
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                   شناسه ملی
                                </p>
                                <input className="EditInformationInput"/>
                             
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                   شماره ثبت
                                </p>
                                <input className="EditInformationInput"/>
                             
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    تلفن ثابت
                                </p>
                               <div className="d-flex justify-content-start">
                               <input className="EditInformationInput" style={{width:150,marginLeft:10}}/>
                               <input className="EditInformationInput" style={{width:60}}/>
                                
                               </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                محل دفتر مرکزی
                                </p>
                                <select name="city" id="city" className="informationSelect">
                                   <option value="man">تهران</option>
                                    <option value="woman">اصفهان</option>
                                    <option value="man">ساری</option>
                                    <option value="woman">شیراز</option>
                                  </select>
                              
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    شهر
                                </p>
                                <select name="city" id="city" className="informationSelect">
                                   <option value="man">تهران</option>
                                    <option value="woman">اصفهان</option>
                                    <option value="man">ساری</option>
                                    <option value="woman">شیراز</option>
                                  </select>
                              
                            </div>
                        </div> : null}
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
export default EditInformation;
