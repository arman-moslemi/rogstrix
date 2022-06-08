import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RightMenu from "./UserPanelComponents/RightMenu";
import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import PanelSeen from "../../assets/icons/panelSeen";
import Checkbox from '@mui/material/Checkbox';
import ProductsViewdCard from "./UserPanelComponents/ProductsViewdCard";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useTranslation } from 'react-i18next';

const ProductsViewed = () => {
    const params = useParams().id;
    const [data,setData]=useState()
    const [product,setProduct]=useState()
    const {t,i18n} = useTranslation();

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
            .post(apiUrl + "CustomerProductShow",{
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
         <RightMenu data={data} id={params}/>
         </Col>
         <Col md={9}>
             <div className="panelWhiteBox">
             <div className="rightMenuBox1">
             <div className="d-flex align-items-center">
      <PanelSeen className="rightMenuImg"/>
      <p className="fontWeightBold ml-4" href="#">
                   {t("محصولات مشاهده شده")}
                </p>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                     <div className="row">
                     {
product?.map((item)=>{
    return(
                       <Col md={4} className="mb-4">
                   <ProductsViewdCard data={item}/>
                       </Col>
                         )
})
                        }
                       {/* <Col md={4} className="mb-4">
                   <ProductsViewdCard/>
                       </Col> */}

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
export default ProductsViewed;
