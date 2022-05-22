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
import { useTranslation } from 'react-i18next';
const ProductsSearch = () => {
  const [language,setLanguage]=useState();
  const {t,i18n} = useTranslation();
  const [data,setData]=useState([])
  const params = useParams().id;
  const history = useHistory();
console.log(params)
const mainSlider=async()=>{
  const axios = require("axios");
    const lang=await localStorage.getItem("lang")
    i18n.changeLanguage(lang)
      axios
          .post(apiUrl + "MenuSearch",{
            Title:params
          },{ headers: {
            lang: i18n.language
          }})
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
  }, [language]);
  return (
    <div className="EachCategoryBody">
      <Header setLanguage={setLanguage}/>



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
          <div className="whiteBoxProduct">
          <Accordion allowZeroExpanded ={true}>
            <AccordionItem className="productAccardion">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        رده مصرف انرژی
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
              +۸۰ تیتانیوم
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
              +۸۰ پلاتینیوم
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
              +۸۰ طلایی
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
                     مصرف انرژی (وات)
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="pad2">
                <RangeSlider/>

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
                    طول (میلیمتر)
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="pad2">
                <RangeSlider/>

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
                        ماژولار
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
              هیچکدام
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
             کامل
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
             نیمه
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
                        رنگ
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
                سیاه
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
              سفید
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
              سیاه/قرمز
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
                        نوع
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
              ATX
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
              ATX12V
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
              Flex ATX
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
                       بدون فن
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
             باشد
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
              نباشد
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
                    اتصالات EPS/ATX
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
              4 x EPS 8-pin
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
              3 x EPS 8-pin
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
              2 x EPS 8-pin
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
              1 x EPS 8-pin + 1 x ATX 4-pin
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
          <Sorts/>
          <div className="productsWhiteBox">
              {/* <div className="whiteBoxHeader">
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
                  <div>
                      <Button className="allProductsBtn">
                      مشاهده همه
                          <FaChevronLeft/>

                          </Button>
                  </div>
              </div> */}
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
export default ProductsSearch;
