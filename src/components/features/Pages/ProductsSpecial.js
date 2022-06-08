import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import BestSellingSliderCard from "./MainPageComponents/BestSellingSliderCard";
import { FaTimes , FaSearch ,FaChevronLeft } from 'react-icons/fa';
import Sorts from './EachCategoryComponents/Sorts';
import RangeSlider from './ProductsComponents/RangeSlider';
import Checkbox from '@mui/material/Checkbox';
import BestSellingProductsSlider from './ProductsComponents/BestSellingProductsSlider';
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import PaginationCustom from "./layouts/Pagination";
import { useTranslation } from 'react-i18next';

const ProductsSpecial = () => {
  const [data,setData]=useState([])
  const params = useParams().id;
  const history = useHistory();
  const [language,setLanguage]=useState();
const {t,i18n} = useTranslation();
console.log(params)
  const mainSlider=async()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "LastSpecialMainProduct",{ headers: {
            lang: i18n.language
          }})
      .then(function (response) {
        if (response.data.result == "true") {

          setData(response.data.Data)
          console.log(77)
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
  }, [language]);
  return (
    <div className="EachCategoryBody">
      <Header setLanguage={setLanguage}/>



      <Container className="EachCategoryContainer" fluid>
        <div className="breadCrumbs">
          <ul>
            <li>
              <a>
              {t("سایت راگ استریکس")}
              </a>
            </li>
         
          </ul>
        </div>
        <div className="row " style={{marginBottom:25}}>
          
          <Col md={12}>
          <Sorts data={data}/>
          <div className="productsWhiteBox">
              <div className="whiteBoxHeader">
                  <div className="dashedHrdiv">
                      <hr className="dashedHr"/>
                  </div>
                  <div>
                      <p className="whiteBoxTitle">
                      {t("پیشنهادات ویژه")}
                      </p>
                  </div>
                  <div className="dashedHrdiv">
                      <hr className="dashedHr"/>
                  </div>
                  {/* <div>
                      <Button className="allProductsBtn">
                      مشاهده همه
                          <FaChevronLeft/>

                          </Button>
                  </div> */}
              </div>
              <div className="row">
                {
                  data?.map((item)=>{
return(


                  <Col md={3} className="marginTop15">
                        <BestSellingSliderCard data={item}/>
                  </Col>
)
                  })
                }
                  {/* <Col md={3} className="marginTop15">
                        <BestSellingSliderCard/>
                  </Col> */}



              </div>
          </div>
          {/* <div className="productsWhiteBox">
          <div className="row margin25">
                   <Col md={12}>
                   <div className="">
                        <p className="specialOfferTitle colorBlack">
                           محصولات پرفروش
                        </p>
                    </div>
                    <div className="seeAllDiv" style={{paddingLeft:50}}>
                        <Button className="seeAll">مشاهده همه
                        <FaChevronLeft/>
                        </Button>
                    </div>
                   </Col>
               </div>
              <div className="myPadding">
              <BestSellingProductsSlider/>
              </div>
          </div> */}
          </Col>

        </div>

      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default ProductsSpecial;
