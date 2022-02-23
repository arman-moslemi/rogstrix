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
import { FaEye } from 'react-icons/fa';

const TicketList = () => {
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
             <div className="d-flex justify-content-between align-items-center">
                 <div className="d-flex align-items-center">
      <PanelInformation className="rightMenuImg"/>
      <p className="fontWeightBold ml-4 md-0" href="#">
تیکت ها و پشتیبانی ها
   </p>
   </div>
   <Button className="addTicketBtn w15">+ پیام جدید</Button>

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
<p className=" ml-2 md-0">00/02/01 15:00</p>
</div>
<div className="ta-center" id="w5">
{/* <p className="fontWeightBold ml-4 md-0">مشاهده</p> */}
<FaEye className="ml-4 md-0 " />

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
<p className=" ml-2 md-0">00/02/01 15:00</p>
</div>
<div className="ta-center" id="w5">
{/* <p className="fontWeightBold ml-4 md-0">مشاهده</p> */}
<FaEye className="ml-4 md-0 " />

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
<p className=" ml-2 md-0">00/02/01 15:00</p>
</div>
<div className="ta-center" id="w5">
{/* <p className="fontWeightBold ml-4 md-0">مشاهده</p> */}
<FaEye color="#f4f4f4" height="200px" className="ml-4 md-0 " />

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
    <Footer />
  </div>
  );
};
export default TicketList;
