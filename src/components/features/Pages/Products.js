import Header from "./layouts/Header";
import Menu from "./layouts/Menu";
import Footer from "./layouts/Footer";
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
const Products = () => {
  const [data,setData]=useState([])
  const [product,setProduct]=useState([])
  const params = useParams().id;
  const history = useHistory();
console.log(params)
  const mainSlider=()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "GroupProduct",{
            GroupID:params
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
      axios
          .post(apiUrl + "FilterProduct",{
            GroupID:params
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setProduct(response.data.Data)
          console.log(44)
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
{data[0]?.Title}              </a>
            </li>
           
          </ul>
        </div>
        <div className="row " style={{marginBottom:25}}>
          <Col md={3}>
          <div className="redBoxFilter">
             <div className="pd2">
             <div className="row">
                  <Col md={7}>
                    <p className="filterText">
                        فیلترهای اعمال شده
                    </p>
                  </Col>
                  <Col md={5} className="ta-left">
                        <Button className="filterBtn">
                            حذف
                        </Button>
                  </Col>

              </div>
             </div>
              <div className="filterFlex">
            <div style={{padding:'1rem'}}>
            <div className="filterSelect">

                      کول مستر
                      <FaTimes style={{marginRight:5}}/>
                  </div>
                  <div className="filterSelect">
                     همه رده انرژی
                     <FaTimes style={{marginRight:5}}/>
                  </div>
                  <div className="filterSelect">

                  قیمت از ۲،۴۰۰،۰۰۰ تا ۷،۲۱۰،۰۰۰
                  <FaTimes style={{marginRight:5}}/>
                     </div>
            </div>

              </div>

          </div>
          <div className="whiteBoxProduct">
          <Accordion allowZeroExpanded ={true}>
            <AccordionItem className="productAccardion">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        برندها
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
               <div className="pad2">
               <div className="d-flex searchInput">
                <div >
          <FaSearch color={'#a0a0a0'}/>
        </div>
        <input

          type={'text'}
          placeholder={"نام برند را وارد کنید ..."}


        />

      </div>

               </div>
      <div className="pad2">
      <div className="scrollBar">
          <div className="d-flex checkBoxDiv">
          <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
                  همه
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
               <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
              کولر مستر
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
               <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
              کورسیر
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
               <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
              سی سونیک
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
               <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
              گیگابایت
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
               <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
              ای وی جی ای
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
               <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
              کورسیر
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
               <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
              کورسیر
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
               <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
              کورسیر
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
               <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
              کورسیر
              </label>
          </div>
      </div>
      </div>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
          </div>
          <div className="whiteBoxProduct">
          <Accordion allowZeroExpanded ={true}>
            <AccordionItem className="productAccardion">
                <AccordionItemHeading>
                    <AccordionItemButton>
                      محدوده قیمت
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
               <div className="pad2">
                <RangeSlider/>

               </div>
            <div className="rangeBorder">
            <div className="row">
      <Col md={6}>
            <p className="rangeText">
                از
            </p>


      </Col>
      <Col md={6}>
      <p className="rangeText">
                از
            </p>



      </Col>
      </div>
      <div className="row align-items-center">
          <Col md={6}>
          <p className="rangeText marginB0">
          ۲،۳۰۰،۰۰۰
            </p>
          </Col>
          <Col md={6}>
          <input className="rangeInput"/>
          </Col>
      </div>
      <div className="row marginTop15">
          <Col md={6}>
              <p className="rangeText maxFont">تومان</p>
          </Col>
          <Col md={6}>
              <p className="rangeText maxFont">تومان</p>
          </Col>
      </div>
            </div>
            <Button className="rangeBtn">
                اعمال محدوده قیمت
            </Button>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
          </div>
         {
           product.map((item)=>{
             return(

          <div className="whiteBoxProduct">
          <Accordion allowZeroExpanded ={true}>
            <AccordionItem className="productAccardion">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item[0].MainProperty}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

      <div className="pad2">
      <div className="scrollBar">
          {/* <div className="d-flex checkBoxDiv">
               <Checkbox

        defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
                  همه
              </label>
          </div> */}
          {
            item.map((item2)=>{
              return(

          <div className="d-flex checkBoxDiv">
               <Checkbox

        // defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />
              <label>
              {item2.SubProperty}
              </label>
          </div>
              )
            })
          }
        

      </div>
      </div>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
          </div>
             )
           })
         }

        
          </Col>
          <Col md={9}>
          <Sorts setData={setData} data={data}/>
          <div className="productsWhiteBox">
              <div className="whiteBoxHeader">
                  <div className="dashedHrdiv">
                      <hr className="dashedHr"/>
                  </div>
                  <div>
                      <p className="whiteBoxTitle">
                          همه {data[0]?.Title} ها
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
      <Footer />
    </div>
  );
};
export default Products;
