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
const Factor = () => {
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
        .post(apiUrl + "CustomerOrderDetail",{
          FactorNumber:params
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
    <div className="Factor">
  

 
    <Container className="UserPanelContainer" fluid style={{backgroundColor:'#fff'}}>
  <div className="row">
    <Col md={12}>
      <div className="factorTable">
        <div className="row rightMenuBox1" style={{backgroundColor:'#111'}}>
          <Col md={4} className="ta-right">
          <p className="fontWeightBold colorWhite" href="#">
                  شماره فاکتور : {params}
                </p>
          </Col>
          <Col md={4} className="ta-center">
          <p className="fontWeightBold colorWhite" href="#">
                 تاریخ : {product?product[0].Date:null}
                </p>
          </Col>
          <Col md={4} className="ta-left">
          <p className="fontWeightBold colorWhite" href="#">
                   جمع فاکتور : {product?product[0].CostTotal:null} تومان
                </p>
          </Col>
        </div>
        <hr className="grayDashed" />
        <div className="row pdtb10" style={{backgroundColor:'#f4f4f4'}}>
        <Col md={1} className="ta-right">
            <p className="fontWeightBold">
           ردیف
            </p>
          </Col>
          <Col md={8} className="ta-right">
            <p className="fontWeightBold">
              نام محصول
            </p>
          </Col>
          <Col md={1} className="ta-right">
          <p className="fontWeightBold">
              تعداد
            </p>
          </Col>
          <Col md={2} className="ta-right">
          <p className="fontWeightBold">
             قیمت
            </p>
          </Col>
        </div>
       
        <hr className="grayDashed" />
        {
          product?.map((item,index)=>{
            return(
              <div>
              <div className="row  pdtb10">
              <Col md={1} className="ta-right">
                  <p className="fontWeightBold">
                   {index+1}
                  </p>
                </Col>
                <Col md={8} className="ta-right">
                  <p className="fontWeightM">
                    {item.ProductName}
                  </p>
                </Col>
                <Col md={1} className="ta-right">
                <p className="fontWeightM">
                    {item.Number}
                  </p>
                </Col>
                <Col md={2} className="ta-right">
                <p className="fontWeightM">
                   {item.Cost} تومان
                  </p>
                </Col>
              </div>
              <hr className="grayDashed" />
</div>
            )
          })
        }
       
      </div>
    </Col>
  </div>
    
    </Container>
   
  </div>
  );
};
export default Factor;
