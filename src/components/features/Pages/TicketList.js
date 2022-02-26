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
import { FaEye } from 'react-icons/fa';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
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
const TicketList = () => {
    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [open, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const [showText, setShowText] = useState(false);
    const onClick = () => setShowText(true);
    const params = useParams().id;
    const [data,setData]=useState()
    const [product,setProduct]=useState()

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

        axios
            .post(apiUrl + "CustomerProductSave",{
              CustomerID:params
            })
        .then(function (response) {
          if (response.data.result == "true") {
            console.log(777)
            setProduct(response.data.Data)
            console.log(response.data.Data)

        }
        else{
          console.log(888)
          console.log(response.data.result)

        }})
        .catch(function (error) {
          console.log(error);
        });
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
             <RightMenu/>
         </Col>
         <Col md={9}>
             <div className="panelWhiteBox">
             <div className="rightMenuBox1">
             <div className="d-flex justify-content-between align-items-center">
                 <div className="d-flex align-items-center">
      <PanelInformation className="rightMenuImg"/>
      <p className="fontWeightBold ml-4 md-0" href="#">
تیکت ها و پشتیبانی ها
   </p>
   </div>
   <Button className="addTicketBtn w15" onClick={handleOpen1}>+ پیام جدید</Button>
   <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            پیام جدید
          </Typography>
          <hr/>
          <Row style={{margin:"0px"}}>



<Col md={12} style={{margin:"20px !important"}}>
  <div className="serviceForm pd0">
      <div className="cFormDiv3 ta-right d-flex align-items-center"  style={{marginTop:"20px"}}>
     <p>عنوان پیام : </p>

     <input placeholder="عنوان پیام خود را وارد کنید" type='text' style={{float:"right !important"}} className="EditInformationInput"/>
      </div>
      </div>
  </Col>
  </Row>
<Row style={{margin:"0px",marginTop:"20px !important"}}>
    <Col md={12} style={{marginTop:"20px"}}>
    <div className="cFormDiv3 ta-right" style={{margin:"20px !important"}}>
     <p>متن پیام : </p>

     <textarea placeholder="متن پیام خود را وارد کنید" type='text' style={{float:"right !important",width:"100% !important",height:"100px",margin:"20px 0px"}}  className="EditInformationInput w100 mt-2"/>
      </div>
    </Col>
</Row>
<div className="row mt-4">
         <Col md={12} className="ta-left">
             <Button className="saveBtn">
                 ارسال پیام
             </Button>
         </Col>
     </div>
        </Box>
      </Modal>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
<div className="d-flex">
<div className="ta-right" id="w50">
    <p className="fontWeightBold ml-4 md-0">موضوع</p>
</div>
<div className="w20 ta-center">
<p className="fontWeightBold ml-4 md-0">وضعیت</p>
</div>
<div className="w20 ta-center">
<p className="fontWeightBold ml-4 md-0">آخرین به روزرسانی</p>
</div>
<div className="w20 ta-center">
<p className="fontWeightBold ml-4 md-0">مشاهده</p>
</div>

</div>
<div className="d-flex">
<div className="ticketBox  d-flex w-100 ma-top-1">
<div className="ta-right" id="w50">
    <p className="fontWeightNormal mb-0">ارور در پرداخت وجه...</p>
</div>
<div className="w20 ta-center" >
<div className="statusTicketBtn w28 h40"
> بسته شده
    </div>
</div>
<div className="w20 ta-center">
<p className="fontWeightNormal ml-2 md-0">00/02/01 15:00</p>
</div>
<div className="ta-center" id="w5">
{/* <p className="fontWeightBold ml-4 md-0">مشاهده</p> */}
<Button className="glassBtn">
<FaEye className="ml-4 md-0 " />
</Button>

</div>
</div>
</div>
<div className="d-flex">
<div className="ticketBox  d-flex w-100 ma-top-1">
<div className="ta-right" id="w50">
    <p className="fontWeightNormal mb-0">ارور در پرداخت وجه...</p>
</div>
<div className="w20 ta-center" >
<div className="statusTicketBtn2 w28 h40"
> درانتظار پاسخ
    </div>
</div>
<div className="w20 ta-center">
<p className="fontWeightNormal ml-2 md-0">00/02/01 15:00</p>
</div>
<div className="ta-center" id="w5">
<Button className="glassBtn">
<FaEye className="ml-4 md-0 " />
</Button>
</div>
</div>
</div>
<div className="d-flex">
<div className="ticketBox  d-flex w-100 ma-top-1">
<div className="ta-right" id="w50">
    <p className="fontWeightNormal mb-0">ارور در پرداخت وجه...</p>
</div>
<div className="w20 ta-center" >
<div className="statusTicketBtn3 w28 h40"
> پاسخ داده شده
    </div>
</div>
<div className="w20 ta-center">
<p className="fontWeightNormal ml-2 md-0">00/02/01 15:00</p>
</div>
<div className="ta-center" id="w5">
<Button className="glassBtn">
<FaEye className="ml-4 md-0 " />
</Button>
</div>
</div>
</div>
<div>

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
export default TicketList;
