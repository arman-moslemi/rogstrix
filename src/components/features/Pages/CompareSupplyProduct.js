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
import CompareCards from "./CompareComponents/CompareCards";
const CompareSupplyProduct = () => {
  const [data,setData]=useState([])
  const [data2,setData2]=useState([])
  const [data3,setData3]=useState([])
  const [data4,setData4]=useState([])
  const params = useParams().id;
  const history = useHistory();
console.log(params)
  const mainSlider=()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "CompareProduct",{
            SystemID:params?.split("T")[0],
            SystemID2:params?.split("T")[1],
            SystemID3:params?.split("T")[2],
            SystemID4:params?.split("T")[3]
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setData(response.data.Data)
          console.log(response.data.Data)

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
                مقایسه              </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
        </div>
        <div className="productsWhiteBox radius10">
          <div className="compareCardDiv">
           
              <CompareCards/>
           
              <CompareCards/>
          
              <CompareCards/>
            
           
              <CompareCards/>
           
          </div>
        </div>
   
      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default CompareSupplyProduct;
