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
import PanelPassword from "../../assets/icons/panelPassword";
import Checkbox from '@mui/material/Checkbox';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import CustomizedDialogs from './layouts/AlertModal';
const ChangePassword = () => {
  const params = useParams().id;
  const [data,setData]=useState()
  const [old,setOld]=useState()
  const [again,setAgain]=useState()
  const [news,setNew]=useState()
  const [open,setOpen]=useState(false)
  const [title,setTitle]=useState("")
  const ProductSave=()=>{
      const axios = require("axios");


      axios.post(apiUrl + "OneCustomer",{CustomerID:params})
      .then(function (response) {
        if (response.data.result == "true") {

           setData(response.data.Data)

           console.log(response.data.Data)

          // history.push("/RegisterVerify/"+mobile)

      }
      else{

      }})
      .catch(function (error) {
        console.log(error);
      });


    }

    const changePass=()=>{
      const axios = require("axios");
if(news!=again)
{
  setTitle("رمز عبور تکراری درست نیست")
  setOpen(true)
}
else if(
  !news || !again || !old
){
  setTitle("مقادیر ورودی را وارد نمائید")
  setOpen(true)

}
else{
      axios.post(apiUrl + "ChangePassword",{CustomerID:params,OldPassword:old,newPassword:news})
      .then(function (response) {
        if (response.data.result == "true") {

           setData(response.data.Data)

           console.log(response.data.Data)
           setTitle("رمز عبور با موفقیت تغییر یافت")

           setOpen(true)

          // history.push("/RegisterVerify/"+mobile)

      }
      else{
        setTitle("رمز عبور نادرست می باشد")

        setOpen(true)
      }})
      .catch(function (error) {
        console.log(error);
      });
    }
    }
    useEffect(() => {
      ProductSave();
  // alert(val)
    }, []);
  return (
    <div className="">
    <Header />
  <Menu/>


    <Container className="UserPanelContainer" fluid>
     <div className="row">
         <Col md={3}>

         <RightMenu data={data} id={params}/>
         </Col>
         <Col md={9}>
             <div className="panelWhiteBox">
             <div className="rightMenuBox1">
             <div className="d-flex align-items-center">
             <CustomizedDialogs Title={title} open={open} setOpen={setOpen}/>

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
                                <input onChange={(e)=>setOld(e.target.value)} className="EditInformationInput w70"/>

                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4 w80block">
                                <p className="fontWeightMedium">
                                  * کلمه عبور جدید
                                </p>
                                <input onChange={(e)=>setNew(e.target.value)} className="EditInformationInput w70"/>

                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4 w80block">
                                <p className="fontWeightMedium">
                                   * تکرار کلمه عبور جدید
                                </p>
                                <input onChange={(e)=>setAgain(e.target.value)} className="EditInformationInput w70"/>

                            </div>
                       </Col>
                     </div>
                     <div className="row">
         <Col md={12} className="ta-left">
             <Button onClick={()=>changePass()} className="saveBtn">
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
    <FooterMain />
  </div>
  );
};
export default ChangePassword;
