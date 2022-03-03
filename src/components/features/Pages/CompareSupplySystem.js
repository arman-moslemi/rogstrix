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
const CompareSupplySystem = () => {
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
          .post(apiUrl + "CompareSystem",{
            SystemID:params?.split("T")[0],
            SystemID2:params?.split("T")[1],
            SystemID3:params?.split("T")[2],
            SystemID4:params?.split("T")[3]
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
                مقایسه              </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
        </div>
        <div className="productsWhiteBox radius10">
          <div className="compareCardDiv">
            {
              data.length>0?

              <CompareCards data={data}/>
              :
              null
            }
            {
              data2.length>0?

              <CompareCards data={data2}/>
              :
              null
            }
            {
              data3.length>0?

              <CompareCards data={data3}/>
              :
              null
            }
            {
              data4.length>0?

              <CompareCards data={data4}/>
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
export default CompareSupplySystem;
