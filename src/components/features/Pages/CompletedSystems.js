import React,{useState,useEffect} from 'react'
import Header from "./layouts/Header";
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
import { FaTimes , FaSearch ,FaChevronLeft } from 'react-icons/fa';

import RangeSlider from './ProductsComponents/RangeSlider';
import Checkbox from '@mui/material/Checkbox';
import PageTitle from "../../assets/img/pageTitle.png"
import PaginationCustom from "./layouts/Pagination";
import CompletedCards from "./CompletedSystemsComponents/CompletedCards";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";






const CompletedSystems = () => {
  const [data,setData]=useState([])


  const mainSlider=()=>{
    const axios = require("axios");
    axios.get(apiUrl + "AllDefaultSystems")
    .then(function (response) {
      if (response.data.result == "true") {

        setData(response.data.Data)
        console.log(11)
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



      <Container className="EachCategoryContainer" fluid>
        <div className="breadCrumbs">
          <ul>
            <li>
              <a>
                سایت راگ استریکس
              </a>
            </li>

          </ul>
        </div>
        <div className="pageTitle">
            <div>
            <img src={PageTitle}/>
            </div>
            <div>
                <p>
                    سیستم های تکمیل شده
                </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
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


          <div className="whiteBoxProduct">
          <Accordion allowZeroExpanded ={true}>
            <AccordionItem className="productAccardion">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        سی پی یو
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

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
              AMD Ryzen 9 5900X
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
              AMD Ryzen 7 5800X
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
              AMD Ryzen 7 3700X
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
                    سی پی یو اورکلاک شده
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

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
                      بله
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
                     خیر
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
                    سوکت سی پی یو
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

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
                      AM4
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
                      LGA1150
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
                      LGA1151
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
                    خنک کننده سی پی یو
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

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
              استوک
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
              Corsair H100i RGB PLATINUM SE
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
              Corsair iCUE H100i ELITE CAPELLIX
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
                    کارت گرافیک
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

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
              GeForce RTX 2070 SUPER
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
              GeForce RTX 3070
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
              GeForce RTX 3080
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
                    SLI / CrossFire
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

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
              2-Way CrossFire
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
              2-Way SLI
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
              3-Way SLI
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
                    کیس
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

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
              Corsair 4000D Airflow
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
              Fractal Design Meshify C
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
                    نوع کیس
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

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
              ATX Full Tower
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
              ATX Mid Tower
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
              MicroATX Mini Tower
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
              Mini ITX Desktop
              </label>
          </div>
      </div>
      </div>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
          </div>
          </Col>
          <Col md={9}>

          <div className="productsWhiteBox">
              <div className="whiteBoxHeader">
              <div className="borderDashedBottom">
                <div>
                  <p>
                    همه سیستم های تکمیل شده
                  </p>
                </div>
                <div>
                <label for="sort" className="sortLabel">مرتب کردن بر اساس</label>
  <select name="sort" id="sort">
    <option>پر فروش ترین</option>
    <option>ارزان ترین</option>
    <option>گران ترین</option>
    <option>جدید ترین</option>
  </select>

                </div>
                <div className="d-flex">
                <div >
          <FaSearch color={'#a0a0a0'} size={20}/>
        </div>
      <div>
      <input
          className="searchInput"
          type={'text'}
          placeholder={"جستجو در میان سیستم ها ..."}


        />
      </div>

                </div>
              </div>
              </div>
              <div className="row marginTop30">
                {
                  data.map((item)=>{
return(

  <Col md={4}>
                  <CompletedCards data={item} viewOverlay={true}/>
                </Col>
                  )
                  })
                }
                {/* <Col md={4}>
                  <CompletedCards viewOverlay={true}/>
                </Col> */}

              </div>
              <div className="paginationBox ta-center">
          <PaginationCustom/>
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
export default CompletedSystems;
