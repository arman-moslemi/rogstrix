import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaAngleDoubleRight ,FaAngleDoubleLeft ,FaAward,FaPlus } from 'react-icons/fa';
import Img1 from "../../assets/img/img1.png";
import Radio from '@mui/material/Radio';

import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import React,{useState,useEffect,useContext} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { AuthContext } from "../../../context/auth-context";
import CustomizedDialogs from './layouts/AlertModal';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  border: "none",
  borderRadius:5,
  boxShadow: 24,
  p: 4,
};
const CartStep2 = () => {
  const {t,i18n} = useTranslation();

    const [count,setCount]=useState(1)
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const [tran,setTran]=useState([])
    // const [tran2,setTran2]=useState([])
    const [radio,setRadio]=useState("")
    const params = useParams().id;
    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleOpen3 = () => setOpen3(true);
    const handleClose2 = () => setOpen2(false);
    const handleClose3 = () => setOpen3(false);
    const [address1,setAddress1]=useState("")
    const [address2,setAddress2]=useState("")
    const [postalCode1,setPostalCode1]=useState("")
    const [postalCode2,setPostalCode2]=useState("")
    const [city1,setCity1]=useState(0)
    const [reg1,setReg1]=useState(0)
    const [city2,setCity2]=useState(0)
    const [reg2,setReg2]=useState(0)
    const [cities,setCity]=useState([])
    const [total,setTotal]=useState(0)
    const [disText,setDiscount]=useState("")
    const [tranCost,setTranCost]=useState(0)
    const [hesab,setHesab]=useState("")
    const [ramz,setRamz]=useState("")
    const [type,setType]=useState(0)
    const [send,setSend]=useState("")
    const [bank,setBank]=useState("")
    const [des,setDes]=useState("")
    const [personal,setPersonal]=useState()
    const [regions,setReg]=useState([])

    const history = useHistory();


            const getData=()=>{
        const axios = require("axios");


        axios.post(apiUrl + "OneCustomer",{
          CustomerID:params
        
        })
        .then(function (response) {
          if (response.data.result == "true") {

            //  setData(response.data.Data)
             setAddress1(response.data.Data.Address1)
             setAddress2(response.data.Data.Address2)
             console.log(999)
             console.log(response.data.Data)
             console.log(response.data.InfoData)
             setPersonal(response.data.Data)
             setBank(response.data.InfoData)
            // history.push("/RegisterVerify/"+mobile)

        }
        else{
          console.log(999)
          console.log(response.data.result)

          setTitle("شماره ورودی نادرست می باشد")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(999)

          console.log(error);
        });
        axios.get(apiUrl + "AllCities")
        .then(function (response) {
          if (response.data.result == "true") {

             setCity(response.data.Data)
             setReg(response.data.Data2)

             console.log(response.data.Data)

            // history.push("/RegisterVerify/"+mobile)

        }
        else{
          setTitle("شماره ورودی نادرست می باشد")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(error);
        });

          axios
              .post(apiUrl + "ShoppingBasketView",{
                CustomerID:params              })
          .then(function (response) {
            if (response.data.result == "true") {

var tot=0
response.data.Data.map((item)=>{
    tot+=parseInt(item?.Cost)*item.Number
})
setTotal(tot)
          }
          else{
            console.log(response.data.result)

          }})
          .catch(function (error) {
            console.log(error);
          });




      }
      const AddAddress=(type)=>{
        const axios = require("axios");
if(type=="delete1"){
setAddress1("")
setPostalCode1("")
setCity1(0)
}
if(type=="delete2"){
setAddress2("")
console.log(999)
console.log(address2)
setPostalCode2("")
setCity2(0)
}
        console.log(444)

        axios.post(apiUrl + "CustomerAddress",{CustomerID:params,Address1:type=="delete1"?"":address1,Address2:type=="delete2"?"":address2,PostalCode1:type=="delete1"?"":postalCode1,PostalCode2:type=="delete2"?"":postalCode2
          ,CityID1:parseInt(city1),CityID2:parseInt(city2),RegionID1:reg1,RegionID2:reg2})
        .then(function (response) {
          if (response.data.result == "true") {
            console.log(88)

//              setData(response.data.Data)
//              console.log(response.data.Data)
// setOpen1(false)
// setOpen2(false)
            // history.push("/RegisterVerify/"+mobile)

        }
        else{
          setTitle("خطا")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(error);
        });




      }
      const Transporter=(type)=>{
        const axios = require("axios");

        console.log(444)

        axios.post(apiUrl + "GetTransporter",{CustomerID:params,Address:type})
        .then(function (response) {
          if (response.data.result == "true") {
            console.log(88)

            console.log(response.data.Data)
            var cc=[]
            cc.push(response.data?.Data)
            console.log(cc)

             setTran(response.data.Data)
// setOpen1(false)
// setOpen2(false)
            // history.push("/RegisterVerify/"+mobile)

        }
        else{
          // setTran()
          console.log(response.data)

          setTitle("خطا")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(error);
        });




      }
      const Discount=()=>{
        const axios = require("axios");

        console.log(444)

        axios.post(apiUrl + "SetDiscount",{CustomerID:params,CostTotal:total,Text:disText})
        .then(function (response) {
          if (response.data.result == "true") {
            console.log(88)

setTotal(response.data.Data)
alert(t("کد تخفیف اعمال شد"))        

        }
        else{
alert(response.data.message)        
  setTitle("خطا")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(error);
        });




      }
      const Factor=()=>{
        const axios = require("axios");

        console.log(444)
if(send==""){
  alert("لطفا نحوه ارسال را مشخص کنید")
}
else if(radio==0){
  alert("لطفا آدرس را مشخص کنید")

}
else if(personal?.NationalCode==""|| personal?.NameFamily==""){
  alert("لطفا اسم یا کارت ملی را وارد نمایید")
}
else{
        axios.post(apiUrl + "PaymentType",{CustomerID:params,TotalCost:tranCost?parseInt(parseInt(total)+parseInt(tranCost)):total,Text:hesab?hesab:ramz,Type:type,Address:radio,SendCost:tranCost,DiscountText:disText,Description:des})
        .then(function (response) {
          if (response.data.result == "true") {
            console.log(response.data.Data)
            console.log(88)
alert("موفقیت آمیز بود")
history.push("/Factor/"+response.data.Data)
        }
        else{
alert(response.data.message)        
  setTitle("خطا")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(error);
        });


      }

      }
      useEffect(() => {
        // mainSlider();
        getData()

    // alert(val)
      }, []);
  return (
    <div className="EachCategoryBody">
     <Header/> 
    <Menu/>

   
      <Container className="CartContainer" fluid>
      <p className="CartTitle">
      {t("سبد خرید")}
      </p>
      <div className="cartDiv align-items-baseline">
      <div className="cartCol1 mt-4 pb-2">
            <div className='whiteBoxCart mt-4'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">

      <p className="fontWeightBold ml-4" href="#">
      {t("انتخاب آدرس")}
                </p>
      </div>
      <Button className="addressAdd" onClick={handleOpen1}>
          <FaPlus className="mr-2"/>
          {t("افزودن آدرس جدید")}
      </Button>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {t("افزودن آدرس جدید")}
          </Typography>
          <hr/>
         <div className="row">
         <Col md={4}>

                                <p className="fontWeightMedium mb-2">
                                {t("شهر")}
                                </p>
                                <select onChange={(e)=>!address1?setCity1(e.target.value):setCity2(e.target.value)} name="state" id="state" className="informationSelect">
                                {
                                    cities.map((item)=>{
                                      return(

                                        <option  value={item.CityID}>{item.CityName}</option>
                                      )
                                    })
                                  }

                                  </select>

             </Col>
             <Col md={4}>
{
  city1==1577||city2==1577?

  <div>
  <p className="fontWeightMedium mb-2">
  {t("منطقه")}
  </p>
  <select onChange={(e)=>!address1?setReg1(e.target.value):setReg2(e.target.value)} name="state" id="state" className="informationSelect">
  {regions.map((item,index)=>{
              return(
     <option  value={item.RegionID}>{item.RegionName}</option>
  )}  )
}
              </select>
              </div>
  :
  null
}


</Col>
             <Col md={4}>
             <p className="fontWeightMedium mb-2">
             {t("کد پستی")}
                                </p>
                                <input onChange={(e)=>address1?setPostalCode2(e.target.value):setPostalCode1(e.target.value)}  className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
             {t("آدرس")}                                </p>
                                <textarea  onChange={(e)=>address1?setAddress2(e.target.value):setAddress1(e.target.value)}  className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button onClick={()=>AddAddress()} className="saveBtn mt-4">
                 {t("ذخیره")}
                 </Button>
             </Col>
         </div>
        </Box>
      </Modal>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                     {
                         address1?

                 <div className="shadowBox mb-4">
                     <p className="fontWeightNormal">
                     <Radio

sx={{
  color: '#ff004e',
  '&.Mui-checked': {
    color: '#ff004e',
  },
}}
checked={radio === 1}
onChange={()=>{setRadio(1);Transporter(1)}}
/>
{address1}                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue" onClick={handleOpen2}>
                         {t("ویرایش")}
                         </Button>
                         <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {t("ویرایش آدرس")}
          </Typography>
          <hr/>
         <div className="row">
             <Col md={4}>

                                <p className="fontWeightMedium mb-2">
                                {t("شهر")}
                                </p>
                                <select onChange={(e)=>setCity1(e.target.value)} name="state" id="state" className="informationSelect">
                                {
                                    cities.map((item)=>{
                                      return(

                                        <option  value={item.CityID}>{item.CityName}</option>
                                      )
                                    })
                                  }

                                  </select>

             </Col>
             <Col md={4}>
{
  city1==1577?

  <div>
  <p className="fontWeightMedium mb-2">
  {t("منطقه")}
  </p>
  <select onChange={(e)=>setReg1(e.target.value)} name="state" id="state" className="informationSelect">
  {regions.map((item,index)=>{
              return(
     <option  value={item.RegionID}>{item.RegionName}</option>
  )}  )
}
              </select>
              </div>
  :
  null
}


</Col>
             <Col md={4}>
             <p className="fontWeightMedium mb-2">
             {t("کد پستی")}
                                </p>
                                <input onChange={(e)=>setPostalCode1(e.target.value)}value={postalCode1} className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
             {t("آدرس")}                             </p>
                                <textarea onChange={(e)=>setAddress1(e.target.value)} value={address1}className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button onClick={()=>AddAddress()}className="saveBtn mt-4">
                 {t("ذخیره")}
                 </Button>
             </Col>
         </div>
        </Box>
      </Modal>
      <Button onClick={()=>{setAddress1("");setPostalCode1("");AddAddress("delete1")}} className="glassBtn" id="colorRed">
      {t("حذف")}
                         </Button>
                     </div>
                 </div>
                         :
null
                     }
                     {
                         address2?
                 <div className="shadowBox mb-4">
                     <p className="fontWeightNormal">
                     <Radio

sx={{
  color: '#ff004e',
  '&.Mui-checked': {
    color: '#ff004e',
  },
}}
checked={radio === 2}
onChange={()=>{setRadio(2);Transporter(2)}}
/>
                     {address2}
                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button onClick={()=>handleOpen3()} className="glassBtn" id="colorBlue">
                         {t("ویرایش")}
                         </Button>
                         <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {t("ویرایش آدرس")}
          </Typography>
          <hr/>
         <div className="row">
         <Col md={4}>

<p className="fontWeightMedium mb-2">
{t("شهر")}
</p>
<select onChange={(e)=>setCity2(e.target.value)} name="state" id="state" className="informationSelect">
{
    cities.map((item)=>{
      return(

        <option  value={item.CityID}>{item.CityName}</option>
      )
    })
  }

  </select>

</Col>
<Col md={4}>
{
city2==1577?

<div>
<p className="fontWeightMedium mb-2">
{t("منطقه")}
</p>
<select onChange={(e)=>setReg2(e.target.value)} name="state" id="state" className="informationSelect">
{regions.map((item,index)=>{
              return(
     <option  value={item.RegionID}>{item.RegionName}</option>
  )}  )
}
</select>
</div>
:
null
}


</Col>
             <Col md={4}>
             <p className="fontWeightMedium mb-2">
             {t("کد پستی")}
                                </p>
                                <input onChange={(e)=>setPostalCode2(e.target.value)} value={postalCode2} className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
             {t("آدرس")}                                </p>
                                <textarea onChange={(e)=>setAddress2(e.target.value)} value={address2} className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button onClick={()=>AddAddress()} className="saveBtn mt-4">
                 {t("ذخیره")}
                 </Button>
             </Col>
         </div>
        </Box>
      </Modal>
                         <Button onClick={()=>{setAddress2("");setPostalCode2("");AddAddress("delete2")}} className="glassBtn" id="colorRed">
                         {t("حذف")}
                         </Button>
                     </div>
                 </div>

                 :
                 null
                 }
                 </div>





           </div>
           {
             tran?

           <div className='whiteBoxCart mt-4'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">

      <p className="fontWeightBold ml-4" href="#">
      {t("انتخاب نحوه ارسال")}
                </p>
      </div>
     
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1 d-flex f1">
                 {
                   tran.length!=0?
                   tran?.map((item)=>{
                     return(

                 <div className="shadowBox mb-4 w30">
                     <p className="fontWeightBold">
                     <Radio

       sx={{
         color: '#ff004e',
         '&.Mui-checked': {
           color: '#ff004e',
         },
       }}
       checked={send===item.SendName}
       onChange={()=>{setSend(item.SendName);setTranCost(item.Cost)}}

     />
{item.SendName}                   </p>
                   <p className='fontWeightNormal'>
                   {t("هزینه ارسال :")} {item.Cost} {t("تومان")}
                   </p>
                   <p className='fontWeightNormal'>
                   {t("مدت ارسال :")} {item.Days} {t("روز")}
                   </p>
                 </div>

                 
                
               

)
})
:
null
}
</div>
           </div>
             :
             null
           }
              <div className='whiteBoxCart mt-4 pb-2'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
      
      <p className="fontWeightBold ml-4" href="#">
      {t("توضیحات")}
                </p>
      </div>
      {/* <Button onClick={()=>Discount()} className="saveBtn">
          
      {t("ثبت")}
      </Button> */}
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="shadowBox mb-4">
              <div className='row align-items-center'>
                  {/* <Col md={4} className="shaCol1">
                  <p className="fontWeightBold">
                   
                  {t("کد تخفیف دارید ؟")} </p>
                  
                  </Col> */}
                  <Col md={12} className="ta-right shaCol1">
                  
                  {/* <div className='d-flex align-items-center justify-content-end mt-2 f3'> */}
                      {/* <p className='fontWeightBold mr-4'>
                      {t("کد تخفیف خود را وارد کنید :")}
                      </p> */}
                      <input onChange={(e)=>setDes(e.target.value)} style={{width:"100%"}} type="text"/>
                  {/* </div> */}
                  </Col>
              </div>
                  
                 </div>
                 </div>
              <div className='whiteBoxCart mt-4 pb-2'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
      
      <p className="fontWeightBold ml-4" href="#">
      {t("کد تخفیف")}
                </p>
      </div>
      <Button onClick={()=>Discount()} className="saveBtn">
          
      {t("ثبت")}
      </Button>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="shadowBox mb-4">
              <div className='row align-items-center'>
                  <Col md={4} className="shaCol1">
                  <p className="fontWeightBold">
                   
                  {t("کد تخفیف دارید ؟")} </p>
                  
                  </Col>
                  <Col md={8} className="ta-left shaCol1">
                  
                  <div className='d-flex align-items-center justify-content-end mt-2 f3'>
                      <p className='fontWeightBold mr-4'>
                      {t("کد تخفیف خود را وارد کنید :")}
                      </p>
                      <input onChange={(e)=>setDiscount(e.target.value)} type="text"/>
                  </div>
                  </Col>
              </div>
                  
                 </div>
                 </div>
        <div className="">
           <div className='whiteBoxCart mt-4'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
      
      <p className="fontWeightBold ml-4" href="#">
      {t("انتخاب نحوه پرداخت")}
                </p>
      </div>
      {/* <Button className="saveBtn">
          
      {t("ثبت")}
      </Button> */}
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                 <div className="shadowBox mb-4">
                 <p className="fontWeightBold">
                     <Radio
       
       sx={{
         color: '#ff004e',
         '&.Mui-checked': {
           color: '#ff004e',
         },
       }}
       checked={type===1}
       onChange={()=>setType(1)}

     />
     {t("پرداخت آنلاین")}
                   </p>
                   <p className='fontWeightNormal'>
                   {t("میتوانید از طریق درگاه پرداخت بانکی،اقدام به تسویه حساب نمایید")}
                   </p>
                  
                 </div>
                 <div className="shadowBox mb-4">
              <div className='row align-items-center'>
                  <Col md={6} className="shaCol1">
                  <p className="fontWeightBold">
                     <Radio
       
       sx={{
         color: '#ff004e',
         '&.Mui-checked': {
           color: '#ff004e',
         },
       }}
       checked={type===2}

       onChange={()=>setType(2)}

     />
{t("پرداخت بانکی")}                   </p>
                   <p className='fontWeightNormal'>
                   {t("پس از واریز مبلغ به شماره حساب فوق کد رهگیری را ثبت نمایید")}
                   </p>
                  </Col>
                  <Col md={6} className="ta-left shaCol1">
                  <p className="fontWeightBold">
                  {t("شماره حساب : ")}{bank?.Hesab}
                  </p>
                  <p className="fontWeightBold">
                  {t("شماره کارت : ")}{bank?.CardNumber}
                  </p>
                  <p className="fontWeightBold">
                  {t("شماره شبا : ")}{bank?.Sheba}
                  </p>
                  <div className='d-flex align-items-center justify-content-end mt-2 f3'>
                      <p className='fontWeightBold mr-4'>
                      {t("کد رهگیری :")}
                      </p>
                      <input onChange={(e)=>setHesab(e.target.value)} type="text"/>
                  </div>
                  </Col>
              </div>
                  
                 </div>
                 <div className="shadowBox mb-4">
              <div className='row align-items-center'>
                  <Col md={6} className="shaCol1">
                  <p className="fontWeightBold">
                     <Radio
       
       sx={{
         color: '#ff004e',
         '&.Mui-checked': {
           color: '#ff004e',
         },
       }}
       checked={type===3}

       onChange={()=>setType(3)}
     />
{t("پرداخت با تتر USDT")}                  </p>
                   <p className='fontWeightNormal'>
                   {t("پس از واریز مبلغ به آدرس کیف پول فوق،کد رهگیری را اینجا ثبت نمایید")}
                   </p>
                  </Col>
                  <Col md={6} className="ta-left shaCol1">
                  <p className="fontWeightBold">
                  {t("آدرس کیف پول")} {bank.Wallet}
                  </p>
                  <div className='d-flex align-items-center justify-content-end mt-2 f3'>
                      <p className='fontWeightBold mr-4'>
                      {t("کد رهگیری TXID :")}
                      </p>
                      <input  onChange={(e)=>setRamz(e.target.value)} type="text"/>
                  </div>
                  </Col>
              </div>
                  
                 </div>
                 </div>
           </div>
            </div>
            </div>
         
            <div className="cartCol2">
            <div className='whiteBoxCart pd30'>
            <div className="priceRowCart mb-4">
                    <div>
                        <p>
                        {t("جمع سبد خرید :")}
                        </p>
                    </div>
                    <div>
                        <p>
                            {total?.toLocaleString("en-de")} {t("تومان")}
                        </p>
                    </div>
                </div>
                <div className="priceRowCart mb-4">
                    <div>
                        <p>
                        {t("هزینه ارسال :")}
                        </p>
                    </div>
                    <div>
                        <p>
                            {tranCost?.toLocaleString("en-de")}{t("تومان")}
                        </p>
                    </div>
                </div>
                <hr className="cartHr"></hr>
                <div className="priceRowCart mb-4">
                    <div>
                        <p>
                        {t("قابل پرداخت :")}
                        </p>
                    </div>
                    <div>
                    <p>
                            {tranCost?parseInt(parseInt(total)+parseInt(tranCost))?.toLocaleString("en-de"):total?.toLocaleString("en-de")} {t("تومان")}
                        </p>
                    </div>
                </div>
                <Button onClick={()=>Factor()} className="saveBtn w100 mt-4" style={{marginTop:20}} >
                {t("پرداخت")}
                </Button>
            </div>
              <p className='fontWeightNormal mt-4'>
              {t("کالاهای موجود در سبد خرید شما ثبت و رزرو نشده اند ، برای ثبت سفارش مراحل بعدی را تکمیل کنید.")}

              </p>
            </div>
      </div>
          
            {/* <div className="cartCol2">
           
            {/* </div> */}
   
      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default CartStep2;
