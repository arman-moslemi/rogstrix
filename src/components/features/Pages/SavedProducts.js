import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRegGrinTongueWink, FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RightMenu from "./UserPanelComponents/RightMenu";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import PanelSeen from "../../assets/icons/panelSeen";
import Checkbox from '@mui/material/Checkbox';
import SavedProductsCard from "./UserPanelComponents/SavedProductsCard";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
const SavedProducts = () => {
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
         <RightMenu data={data} id={params}/>
         </Col>
         <Col md={9}>
             <div className="panelWhiteBox">
             <div className="rightMenuBox1">
             <div className="d-flex align-items-center">
      <PanelSeen className="rightMenuImg"/>
      <p className="fontWeightBold ml-4" href="#">
                  محصولات ذخیره شده
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
                            <SavedProductsCard viewOverlay={true} data={item}/>
                        </Col>
    )
})
                        }
                        {/* <Col md={4} className="mb-4">
                            <SavedProductsCard viewOverlay={true}/>
                        </Col> */}

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
export default SavedProducts;
