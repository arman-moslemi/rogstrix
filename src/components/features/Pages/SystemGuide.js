import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaAngleDoubleRight ,FaAngleDoubleLeft  } from 'react-icons/fa';

import PageTitle from "../../assets/img/pageTitle.png"

import CompletedCards from "./CompletedSystemsComponents/CompletedCards";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import PaginationCustom from "./layouts/Pagination";
const SystemGuide = () => {
  const [data,setData]=useState([])
  const params = useParams().id;
  const history = useHistory();
console.log(params)
  const mainSlider=()=>{
    const axios = require("axios");

      axios
          .get(apiUrl + "SystemGuide")
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
      <Header />
<Menu/>


      <Container className="EachCategoryContainer" fluid>
        {/* <div className="breadCrumbs">
          <ul>
            <li>
              <a>
                سایت راگ استریکس
              </a>
            </li>
            /
            <li>
              <a>
                سی پی یو
              </a>
            </li>
            /
            <li>
              <a>
              AMD Ryzen 5 5600X 3.7 GHz 6-Core Processor
              </a>
            </li>
          </ul>
        </div> */}
        <div className="pageTitle">
            <div>
            <img src={PageTitle}/>
            </div>
            <div>
                <p>
                راهنمای ساخت سیستم             </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
        </div>
        <div className="row " style={{marginBottom:25}}>


            {
              data.map((item)=>{
return(
          <Col md={12}>

          <div className="productsWhiteBox radius10">
          <div className="whiteBoxHeader">
            <div className="dashedBlackHr" style={{border:'none'}}>
              <hr/>
            </div>
            <div>
              <p className="blackHeader">
                <FaAngleDoubleRight className="mr-4"/>
{item[0].TypeName}                <FaAngleDoubleLeft className="ml-4"/>
                </p>
            </div>
            <div className="dashedBlackHr" style={{border:'none'}}>
              <hr/>
            </div>
           </div>
           <div className="compareCardDiv mt-20">
           {
              item.map((items)=>{
                return(

            <div className="systemGuideCard">
            <CompletedCards data={items}/>
            </div>
                )
              })
            }

           </div>

   </div>

   </Col>
)
})
}







        </div>

      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default SystemGuide;
