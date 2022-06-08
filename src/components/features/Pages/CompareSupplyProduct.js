import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaAngleDoubleRight ,FaAngleDoubleLeft  } from 'react-icons/fa';

import PageTitle from "../../assets/img/pageTitle.png"
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import CompareCardProduct from "./CompareComponents/CompareCardProduct";
import { useTranslation } from 'react-i18next';

const CompareSupplyProduct = () => {
  const [data,setData]=useState([])
  const [data2,setData2]=useState([])
  const [data3,setData3]=useState([])
  const [data4,setData4]=useState([])
  const params = useParams().id;
  const history = useHistory();
  const {t,i18n} = useTranslation();

console.log(params)
  const mainSlider=async()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "CompareProduct",{
            ProductID:params?.split("T")[0],
            ProductID2:params?.split("T")[1],
            ProductID3:params?.split("T")[2],
            ProductID4:params?.split("T")[3]
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setData(response.data.Data)
          setData2(response.data.Data2)
          setData3(response.data.Data3)
          setData4(response.data.Data4)
          console.log(response.data)

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });



  }

  useEffect(() => {
    mainSlider();
// alert(val)
  }, []);
  return (
    <div className="EachCategoryBody">
     <Header/> 
    <Menu/>

   
      <Container className="EachCategoryContainer" fluid>
      
        <div className="pageTitle">
            <div>
            <img src={PageTitle}/>
            </div>
            <div>
                <p>
                {t("مقایسه")}  
                        </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
        </div>
        <div className="productsWhiteBox radius10">
        <div className="compareCardDiv">
            {
              data.length>0?

              <CompareCardProduct data={data}/>
              :
              null
            }
            {
              data2.length>0?

              <CompareCardProduct data={data2}/>
              :
              null
            }
            {
              data3.length>0?

              <CompareCardProduct data={data3}/>
              :
              null
            }
            {
              data4.length>0?

              <CompareCardProduct data={data4}/>
              :
              null
            }
           
           
            
           
          </div>
        </div>
   
      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default CompareSupplyProduct;
