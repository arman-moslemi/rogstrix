import React,{useState,useEffect} from 'react'
import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RightMenu from "./UserPanelComponents/RightMenu";
import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import PanelInformation from "../../assets/icons/panelInformation";
import Checkbox from '@mui/material/Checkbox';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import CustomizedDialogs from './layouts/AlertModal';
import { useTranslation } from 'react-i18next';

const EditInformation = () => {
    const [showText, setShowText] = useState(false);
    const {t,i18n} = useTranslation();

    const onClick = () => setShowText(!showText);
    const [data,setData]=useState([])
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
    const [family,setFamily]=useState("")
    const [gender,setGender]=useState("")
    const [nationalCode,setNationalCode]=useState("")
    const [mobile,setMobile]=useState("")
    const [phone,setPhone]=useState("")
    const [prePhone,setPrePhone]=useState("")
    const [birthday,setBirthday]=useState("")
    const [cardNumber,setCardNumber]=useState("")
    const [companyName,setCompanyName]=useState("")
    const [economicCode,setEconomicCode]=useState("")
    const [nationalCodeCompany,setNationalCodeCompany]=useState("")
    const [phoneCompany,setPhoneCompany]=useState("")
    const [prePhoneCompany,setPrePhoneCompany]=useState("")
    const [registrationCode,setRegistrationCode]=useState("")
    const history = useHistory();
    const params = useParams().id;

    const editInfo=()=>{
      const axios = require("axios");
if(prePhone.length+phone.length>11)
{
  setTitle("تلفن درست نیست")
  setOpen(true)
}
if((prePhoneCompany+phoneCompany).length>11)
{
  setTitle("تلفن شرکت درست نیست")
  setOpen(true)
}
if(showText){
  if(companyName==""|| nationalCodeCompany==""){
    setTitle("مقادیر حقوقی را وارد نمایید")
    setOpen(true)
  }
}
        axios.post(apiUrl + "EditCustomerFull",{CustomerID:params,Mobile:mobile,Email:email,Password:null,NameFamily:name+","+family,NationalCode:nationalCode,
        Phone:prePhone+phone,CardNumber:cardNumber,Birthday:birthday,CompanyName:companyName,EconomicCode:economicCode,NationalCodeCompany:nationalCodeCompany,PhoneCompany:prePhoneCompany+phoneCompany,RegistrationCode:registrationCode,Gender:gender=="man"?true:gender=="woman"?false:null,
        IsLegal:showText
    })
        .then(function (response) {
          if (response.data.result == "true") {

            setTitle("اطلاعات با موفقیت ذخیره شد")
            setOpen(true)
            console.log(11)
            console.log(response.data.Data)

        }
       else if (response.data.result == "duplicate") {

          setTitle("کدملی بافت نشد")
          setOpen(true)
          console.log(11)
          console.log(response.data.Data)

      }
        else{
            setTitle("عملیات با خطا روبرو شد")
            setOpen(true)
          console.log(response.data.result)

        }})
        .catch(function (error) {
          console.log(error);
        });
    }
    const getData=()=>{
        const axios = require("axios");


        axios.post(apiUrl + "OneCustomer",{CustomerID:params})
        .then(function (response) {
          if (response.data.result == "true") {

             setData(response.data.Data)
             console.log(response.data.Data)
             console.log(response.data.Data.Mobile)
             setName(response.data.Data.NameFamily?.split(',')[0])
             setFamily(response.data.Data.NameFamily?.split(',')[1])
             setEmail(response.data.Data.Email)
             setMobile(response.data.Data.Mobile)
             setPhone(response.data.Data.Phone?.substring(0, 8))
             setPrePhone(response.data.Data.Phone?.substring(8, response.data.Data.Phone?.Length))
             setCardNumber(response.data.Data.CardNumber)
             setBirthday(response.data.Data.Birthday)
             setCompanyName(response.data.Data.CompanyName)
             setEconomicCode(response.data.Data.EconomicCode)
             setNationalCodeCompany(response.data.Data.NationalCodeCompany)
             setNationalCode(response.data.Data.NationalCode)
             setPhoneCompany(response.data.Data.PhoneCompany?.substring(0, 8))
             setPrePhoneCompany(response.data.Data.PhoneCompany?.substring(8, response.data.Data.PhoneCompany))
             setGender(response.data.Data.Gender)
             setRegistrationCode(response.data.Data.RegistrationCode)
             setShowText(response.data.Data.IsLegal)
            // history.push("/RegisterVerify/"+mobile)

        }
        else{
          setTitle("شماره ورودی نادرست می باشد")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(error);
        });




      }
    useEffect(() => {
  getData()
    }, []);
  return (
    <div className="">
    <Header />
  <Menu/>


    <Container className="UserPanelContainer" fluid>
    <CustomizedDialogs Title={title} open={open} setOpen={setOpen}/>

     <div className="row">
         <Col md={3}>
             <RightMenu data={data} id={params}/>
         </Col>
         <Col md={9}>
             <div className="panelWhiteBox">
             <div className="rightMenuBox1">
             <div className="d-flex align-items-center">
      <PanelInformation className="rightMenuImg"/>
      <p className="fontWeightBold ml-4" href="#">
      {t("مشخصات کاربری")}
                </p>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                     <div className="row">
                         <Col md={6} className="customCol">
                            <p className="colTitle">
                            {t("حساب حقیقی")}
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                {t("ایمیل")}
                                </p>
                                <input onChange={(e)=>setEmail(e.target.value)} value={email} disabled={true} className="EditInformationInput"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    * {t("نام")}
                                </p>
                                <input onChange={(e)=>setName(e.target.value)} value={name} className="EditInformationInput"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                    * {t("نام خانوادگی")}
                                </p>
                                <input onChange={(e)=>setFamily(e.target.value)} value={family} className="EditInformationInput"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                {t("جنسیت")}
                                </p>
                                <select name="gender" id="gender" onChange={(ss)=>{setGender(ss.target.value)}} value={gender==true||gender=="man"?"man":"woman"} className="informationSelect">
                                   <option value="man">{t("آقا")}</option>
                                    <option value="woman">{t("خانم")}</option>

                                  </select>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                   * {t("کدملی")}
                                </p>
                                <input onChange={(e)=>setNationalCode(e.target.value)} value={nationalCode} className="EditInformationInput"/>
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
              {t("تبعه خارجی فاقد کدملی هستم.")}
              </label>
          </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                  * {t("موبایل")}
                                </p>
                                <input disabled={true} value={mobile} className="EditInformationInput"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                {t("تلفن ثابت")}
                                </p>
                               <div className="d-flex justify-content-start">
                               <input onChange={(e)=>setPhone(e.target.value)} value={phone} className="EditInformationInput" style={{width:150,marginLeft:10}}/>
                               <input onChange={(e)=>setPrePhone(e.target.value)} value={prePhone} className="EditInformationInput" style={{width:60}}/>

                               </div>
                            </div>
                            {/* <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
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

                            </div> */}
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                {t("تاریخ تولد")}
                                </p>
                                <input onChange={(e)=>setBirthday(e.target.value)} value={birthday}className="EditInformationInput"/>

                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                {t("شماره کارت")}
                                </p>
                                <input onChange={(e)=>setCardNumber(e.target.value)} value={cardNumber}className="EditInformationInput"/>

                            </div>

                         </Col>
                         <Col md={6} className="customCol">
                         <p className="colTitle">
                         {t("حساب حقوقی")}
                            </p>
                            <div className="mt-4">
                            {showText ?<Button className="saveBtn w100" style={{marginTop:20}} onClick={onClick}>
                            {t("حساب حقیقی")}                            </Button>:<Button className="saveBtn w100" style={{marginTop:20}} onClick={onClick}>
                            {t("فعال کردن حساب حقوقی")}
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
              {t("مایل به تکمیل اطلاعات حقوقی برای خرید سازمانی هستم.")}
              </label>
          </div>
          <p className="fontWeightMedium">
          {t("با تکمیل اطلاعات حقوقی سازمان مورد نظر خود می‌توانید اقدام به خرید سازمانی با دریافت فاکتور رسمی و گواهی ارزش افزودنمایید.")}

                                </p>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                {t("نام شرکت یا اداره")}
                                </p>
                                <input onChange={(e)=>setCompanyName(e.target.value)} value={companyName}className="EditInformationInput"/>

                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                {t("کد اقتصادی")}
                                </p>
                                <input onChange={(e)=>setEconomicCode(e.target.value)}value={economicCode} className="EditInformationInput"/>

                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                {t("شناسه ملی")}
                                </p>
                                <input onChange={(e)=>setNationalCodeCompany(e.target.value)} value={nationalCodeCompany}className="EditInformationInput"/>

                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                {t("شماره ثبت")}
                                </p>
                                <input onChange={(e)=>setRegistrationCode(e.target.value)}value={registrationCode} className="EditInformationInput"/>

                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <p className="fontWeightMedium">
                                {t("تلفن ثابت")}
                                </p>
                               <div className="d-flex justify-content-start">
                               <input onChange={(e)=>setPrePhoneCompany(e.target.value)} value={prePhoneCompany} className="EditInformationInput" style={{width:150,marginLeft:10}}/>
                               <input onChange={(e)=>setPhoneCompany(e.target.value)} value={phoneCompany}className="EditInformationInput" style={{width:60}}/>

                               </div>
                            </div>
                            {/* <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
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

                            </div> */}
                        </div> : null}
                         </Col>
                     </div>
                     <div className="row mt-4">
         <Col md={12} className="ta-left">
             <Button onClick={()=>editInfo()} className="saveBtn">
             {t("ذخیره تغییرات")}
             </Button>
         </Col>
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
export default EditInformation;
