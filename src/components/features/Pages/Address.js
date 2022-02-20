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
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import CustomizedDialogs from './layouts/AlertModal';
import React,{useState,useEffect} from 'react'

const Address = () => {
    const [data,setData]=useState([])
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const history = useHistory();
    const params = useParams().id;
    const getData=()=>{
        const axios = require("axios");


        axios.post(apiUrl + "OneCustomer",{CustomerID:params})
        .then(function (response) {
          if (response.data.result == "true") {

             setData(response.data.Data)
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
    useEffect(() => {
  getData()
    }, []);
  return (
    <div className="">
    <Header />
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
      <Button className="addressAdd">
          <FaPlus className="mr-2"/>
          افزودن آدرس جدید
      </Button>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                     {
                         data.Address1?

                 <div className="shadowBox mb-4">
                     <p className="fontWeightNormal">
{data.Address1}                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue">
                             ویرایش
                         </Button>
                         <Button className="glassBtn" id="colorRed">
                             حذف
                         </Button>
                     </div>
                 </div>
                         :
null
                     }
                     {
                         data.Address2?
                 <div className="shadowBox mb-4">
                     <p className="fontWeightNormal">
                     {data.Address2}
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
