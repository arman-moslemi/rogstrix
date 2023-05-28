import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRegEye } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RightMenu from "./UserPanelComponents/RightMenu";
import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import PanelOrder from "../../assets/icons/panelOrder";
import Checkbox from '@mui/material/Checkbox';
import {useParams } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useTranslation } from 'react-i18next';

export const truncate = (str, len) => {
    // console.log("truncate", str, str.length, len);
    if (str?.length > len && str?.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  };
const UserOrder = () => {
  const {t,i18n} = useTranslation();

    const params = useParams().id;
    const [data,setData]=useState()
    const [product,setProduct]=useState()

    const CustomerOrder=()=>{
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
            .post(apiUrl + "CustomerOrder",{
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
        CustomerOrder();
    // alert(val)
      }, []);
  return (
    <div className="">
    <Header/>
  <Menu/>

 
    <Container className="UserPanelContainer" fluid>
     <div className="row">
         <Col md={3}>
         <RightMenu data={data} id={params}/>
         </Col>
         <Col md={9}>
             <div className="panelWhiteBox pdbottom150">
             <div className="rightMenuBox1">
             <div className="d-flex align-items-center">
      <PanelOrder className="rightMenuImg"/>
      <p className="fontWeightBold ml-4" href="#">
      {t("سفارش های من")}
                </p>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="grayBoxTop">
                     <div id="w7">
                         <p>
                         {t("شماره")}
                         </p>
                     </div>
                     <div id="w28">
                        <p>
                        {t("محصولات")}
                        </p>
                     </div>
                     <div id="w15">
                     <p>
                     {t("تاریخ")}
                        </p>
                     </div>
                     <div id="w12">
                     <p>
                     {t("مبلغ")}
                        </p>
                     </div>
                     <div id="w12">
                     <p>
                     {t("پرداخت")}
                        </p>
                         </div>
                         <div id="w12">
                         <p>
                         {t("وضعیت")}
                        </p>
                         </div>
                         <div id="w12">
                         <p>
                         {t("مشاهده فاکتور")}
                        </p>
                         </div>
                 </div>
                 {
                   product?.map((item,index)=>{
                     return(
                 <div className="tableOrder">
                     <div id="w7">
                         <p>
                             {index+1}
                         </p>
                     </div>
                     <div id="w28">
                        <p>
                      {  item[0].FactorNumber}
                        </p>
                     </div>
                     <div id="w15">
                     <p>
{item[0].Date}                        </p>
                     </div>
                     <div id="w12">
                     <p>
{item[0].CostTotal}                        </p>
                     </div>
                     <div id="w12">
{/* {item[0].Payment==1? */}
                     <p>
{t("‍‍‍پرداخت شده")}
                       </p>
{/* // :
// <p>

// {t("‍‍‍پرداخت نشده")}
// </p> */}
{/* } */}

                         </div>
                         <div id="w12">
{
item[0].Condition==0?
  <p>
    {t("ارسال نشده")}
  </p>
                           :
                           item[0].Condition==1?
                           <p>
                           {t("درحال ارسال")}
                         </p>
                           :
                           <p>
{t("ارسال شده")}                         </p>

}                    

                         </div>
                         <div id="w12" >
                         <a href={"/Factor/"+item[0].FactorNumber}>

                             <FaRegEye className="mr-1 ml-1 sd5s" color={'#ff004e'}/>
                         </a>
                         </div>
                 </div>

                     )
                   })
                 }
           
             </div>
         </Col>
     </div>
    
    </Container>
    <RedBox/>
    <FooterMain />
  </div>
  );
};
export default UserOrder;
