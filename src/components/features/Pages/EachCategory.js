import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { NavLink } from "react-router-dom";
import { Container ,Col, Button,Row} from "react-bootstrap";
import CardBox from '../Pages/EachCategoryComponents/CardBox';
import Sorts from './EachCategoryComponents/Sorts';
import CategoryList from "./EachCategoryComponents/CategoryList";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import PaginationCustom from "./layouts/Pagination";
const EachCategory = () => {
  const [data,setData]=useState([])
  const params = useParams().id;
  const history = useHistory();
const [cat,setCat]=useState(params);
console.log(params)
  const mainSlider=()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "MainProduct",{
            MainGroupID:cat
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
  }, [cat]);
  return (
    <div className="EachCategoryBody">
      <Header />



      <Container className="EachCategoryContainer" fluid>
        <div className="breadCrumbs">
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
        </div>
        <div className="row">
          <Col md={2}>

          </Col>
          <Col md={10}>
          <Sorts/>
          </Col>

        </div>
       <div className="row marginTop3">
       <Col md={2}>
          <CategoryList cat={setCat}/>
          </Col>
          <Col md={10}>

           <div className="whiteBoxCategory">
          <p className="BoxTitle">
            همه مانیتورها
          </p>

          <div className="row margin-top-3">
            {
              data.map((item)=>{
return(
            <Col md={4} className="colmar-top-3">
              <CardBox data={item} className="test" />
            </Col>
)
              })
            }
            {/* <Col md={4} className="colmar-top-3">
            <CardBox/>
            </Col> */}

          </div>
          <div className="paginationBox ta-center">
          <PaginationCustom/>
          </div>
        </div>
          </Col>
       </div>
      </Container>
      <Footer />
    </div>
  );
};
export default EachCategory;
