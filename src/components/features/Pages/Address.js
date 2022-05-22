import { Container ,Col, Button,Row} from "react-bootstrap";
import {React,useState,useEffect} from "react";

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
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import CustomizedDialogs from './layouts/AlertModal';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const Address = () => {
  const [language,setLanguage]=useState();

    const [data,setData]=useState([])
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const [address1,setAddress1]=useState("")
    const [address2,setAddress2]=useState("")
    const [postalCode1,setPostalCode1]=useState("")
    const [postalCode2,setPostalCode2]=useState("")
    const [city1,setCity1]=useState(0)
    const [reg1,setReg1]=useState(0)
    const [city2,setCity2]=useState(0)
    const [reg2,setReg2]=useState(0)
    const [cities,setCity]=useState([])
    const history = useHistory();
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
    
    const {t,i18n} = useTranslation();

      const getData=async()=>{

        const axios = require("axios");
 
        const lang=await localStorage.getItem("lang")
        i18n.changeLanguage(lang)
        axios.post(apiUrl + "OneCustomer",{CustomerID:params})
        .then(function (response) {
          if (response.data.result == "true") {

             setData(response.data.Data)
             setAddress1(response.data.Data.Address1)
             setAddress2(response.data.Data.Address2)
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
        axios.get(apiUrl + "AllCities")
        .then(function (response) {
          if (response.data.result == "true") {

             setCity(response.data.Data)

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
    useEffect(() => {
  getData()
    }, [language]);

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

  return (
    <div className="">
      <Header setLanguage={setLanguage}/>
  <Menu/>


    <Container className="UserPanelContainer" fluid>
     <div className="row">
         <Col md={3} xs={12}>
             <RightMenu data={data} id={params}/>
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
      {
        address2?
        null
        :

      <Button className="addressAdd" onClick={handleOpen1}>
          <FaPlus className="mr-2"/>
          افزودن آدرس جدید
      </Button>
      }
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            افزودن آدرس جدید
          </Typography>
          <hr/>
         <div className="row">
         <Col md={4}>

                                <p className="fontWeightMedium mb-2">
                                   شهر
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
     منطقه
  </p>
  <select onChange={(e)=>!address1?setReg1(e.target.value):setReg2(e.target.value)} name="state" id="state" className="informationSelect">
  {[...new Array(22)].map((item,index)=>{
              return(
     <option  value={index+1}>{index+1}</option>
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
                                   کد پستی
                                </p>
                                <input onChange={(e)=>address1?setPostalCode2(e.target.value):setPostalCode1(e.target.value)}  className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
             آدرس                                </p>
                                <textarea  onChange={(e)=>address1?setAddress2(e.target.value):setAddress1(e.target.value)}  className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button onClick={()=>AddAddress()} className="saveBtn mt-4">
                     ذخیره
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
{address1}                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue" onClick={handleOpen2}>
                             ویرایش
                         </Button>
                         <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ویرایش آدرس
          </Typography>
          <hr/>
         <div className="row">
             <Col md={4}>

                                <p className="fontWeightMedium mb-2">
                                   شهر
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
     منطقه
  </p>
  <select onChange={(e)=>setReg1(e.target.value)} name="state" id="state" className="informationSelect">
  {[...new Array(22)].map((item,index)=>{
              return(
     <option  value={index+1}>{index+1}</option>
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
                                   کد پستی
                                </p>
                                <input onChange={(e)=>setPostalCode1(e.target.value)}value={postalCode1} className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
آدرس                                </p>
                                <textarea onChange={(e)=>setAddress1(e.target.value)} value={address1}className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button onClick={()=>AddAddress()}className="saveBtn mt-4">
                     ذخیره
                 </Button>
             </Col>
         </div>
        </Box>
      </Modal>
      <Button onClick={()=>{setAddress1("");setPostalCode1("");AddAddress("delete1")}} className="glassBtn" id="colorRed">
                                   حذف
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
                     {address2}
                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button onClick={()=>handleOpen3()} className="glassBtn" id="colorBlue">
                             ویرایش
                         </Button>
                         <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ویرایش آدرس
          </Typography>
          <hr/>
         <div className="row">
         <Col md={4}>

<p className="fontWeightMedium mb-2">
   شهر
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
منطقه
</p>
<select onChange={(e)=>setReg2(e.target.value)} name="state" id="state" className="informationSelect">
{[...new Array(22)].map((item,index)=>{
return(
<option  value={index+1}>{index+1}</option>
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
                                   کد پستی
                                </p>
                                <input onChange={(e)=>setPostalCode2(e.target.value)} value={postalCode2} className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
آدرس                                </p>
                                <textarea onChange={(e)=>setAddress2(e.target.value)} value={address2} className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button onClick={()=>AddAddress()} className="saveBtn mt-4">
                     ذخیره
                 </Button>
             </Col>
         </div>
        </Box>
      </Modal>
                         <Button onClick={()=>{setAddress2("");setPostalCode2("");AddAddress("delete2")}} className="glassBtn" id="colorRed">
                             حذف
                         </Button>
                     </div>
                 </div>

                 :
                 null
                 }
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
