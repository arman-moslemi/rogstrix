import MainPageHeader from "./layouts/MainPageHeader";
import Footer from "./layouts/Footer";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import { FaTimes , FaSearch } from 'react-icons/fa';
import Sorts from './EachCategoryComponents/Sorts';

const Products = () => {

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
        <div className="row">
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
      <div style={{padding:'1rem'}}>
      <div className="scrollBar">
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
                  همه
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              کولر مستر
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              کورسیر
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              سی سونیک
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              گیگابایت
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              ای وی جی ای
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              کورسیر
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              کورسیر
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              کورسیر
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

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
           
     
               </div>
      <div style={{padding:'1rem'}}>
      
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
                        رده مصرف انرژی
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
              
      <div style={{padding:'1rem'}}>
      <div className="scrollBar">
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
                  همه
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              +۸۰ تیتانیوم
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              +۸۰ پلاتینیوم
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

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
           
     
               </div>
      <div style={{padding:'1rem'}}>
      
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
           
     
               </div>
      <div style={{padding:'1rem'}}>
      
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
              
      <div style={{padding:'1rem'}}>
      <div className="scrollBar">
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
                  همه
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              هیچکدام
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
             کامل
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

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
              
      <div style={{padding:'1rem'}}>
      <div className="scrollBar">
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
                  همه
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
                سیاه
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              سفید
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

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
              
      <div style={{padding:'1rem'}}>
      <div className="scrollBar">
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
                  همه
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              ATX
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              ATX12V
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

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
              
      <div style={{padding:'1rem'}}>
      <div className="scrollBar">
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
                  همه
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
             باشد
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

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
              
      <div style={{padding:'1rem'}}>
      <div className="scrollBar">
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
                  همه
              </label>
          </div>
         
       
       
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              4 x EPS 8-pin
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              3 x EPS 8-pin
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

              />
              <label>
              2 x EPS 8-pin
              </label>
          </div>
          <div className="d-flex checkBoxDiv">
              <input
              type={'checkbox'}

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
          </Col>
         
        </div>
   
      </Container>
      <Footer />
    </div>
  );
};
export default Products;
