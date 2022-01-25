import MainPageHeader from "./layouts/MainPageHeader";
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
import CompletedCards from "./CompletedSystemsComponents/CompletedCards";
const CompletedSystems = () => {

  return (
    <div className="EachCategoryBody">
      <MainPageHeader />
    

   
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
     
          <div className="productsWhiteBox">
              <div className="whiteBoxHeader">
                  <div className="dashedHrdiv">
                      <hr className="dashedHr"/>
                  </div>
                  <div>
                      <p className="whiteBoxTitle">
                          همه موبایل ها
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
