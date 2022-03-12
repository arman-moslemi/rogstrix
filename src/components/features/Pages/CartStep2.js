import React,{useEffect,useState} from 'react'
import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaAngleDoubleRight ,FaAngleDoubleLeft ,FaAward,FaPlus } from 'react-icons/fa';
import Img1 from "../../assets/img/img1.png";
import Radio from '@mui/material/Radio';
const CartStep2 = () => {
    const [count,setCount]=useState(1)

   const increment = () => {
    setCount(count+1)
    console.log(count)

      }

      const   decrement = () => {
        // this.setState({
        //   count: this.state.count - 1
        // });
        if(count!=0)
        setCount(count-1)
      }
  return (
    <div className="EachCategoryBody">
     <Header/> 
    <Menu/>

   
      <Container className="CartContainer" fluid>
      <p className="CartTitle">
          سبد خرید
      </p>
        <div className="cartDiv">
            <div className="cartCol1 mb-4">
          
           <div className='whiteBoxCart mt-4'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
      
      <p className="fontWeightBold ml-4" href="#">
                  انتخاب نحوه پرداخت
                </p>
      </div>
      <Button className="saveBtn">
          
         ثبت
      </Button>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                 <div className="shadowBox mb-4">
                 <p className="fontWeightBold">
                     <Radio
       
       sx={{
         color: '#ff004e',
         '&.Mui-checked': {
           color: '#ff004e',
         },
       }}
     />
     پرداخت آنلاین
                   </p>
                   <p className='fontWeightNormal'>
                   میتوانید از طریق درگاه پرداخت بانکی،اقدام به تسویه حساب نمایید
                   </p>
                  
                 </div>
                 <div className="shadowBox mb-4">
              <div className='row align-items-center'>
                  <Col md={6} className="shaCol1">
                  <p className="fontWeightBold">
                     <Radio
       
       sx={{
         color: '#ff004e',
         '&.Mui-checked': {
           color: '#ff004e',
         },
       }}
     />
پرداخت بانکی                   </p>
                   <p className='fontWeightNormal'>
                   پس از واریز مبلغ به شماره حساب فوق کد رهگیری را ثبت نمایید
                   </p>
                  </Col>
                  <Col md={6} className="ta-left shaCol1">
                  <p className="fontWeightBold">
                  شماره حساب : 1010252536254152635596596595
                  </p>
                  <div className='d-flex align-items-center justify-content-end mt-2 f3'>
                      <p className='fontWeightBold mr-4'>
                          کد رهگیری : 
                      </p>
                      <input type="text"/>
                  </div>
                  </Col>
              </div>
                  
                 </div>
                 <div className="shadowBox mb-4">
              <div className='row align-items-center'>
                  <Col md={6} className="shaCol1">
                  <p className="fontWeightBold">
                     <Radio
       
       sx={{
         color: '#ff004e',
         '&.Mui-checked': {
           color: '#ff004e',
         },
       }}
     />
پرداخت با اتریوم                  </p>
                   <p className='fontWeightNormal'>
                   پس از واریز مبلغ به آدرس کیف پول فوق،کد رهگیری را اینجا ثبت نمایید
                   </p>
                  </Col>
                  <Col md={6} className="ta-left shaCol1">
                  <p className="fontWeightBold">
                  آدرس کیف پول : http://wllet......
                  </p>
                  <div className='d-flex align-items-center justify-content-end mt-2 f3'>
                      <p className='fontWeightBold mr-4'>
                          کد رهگیری : 
                      </p>
                      <input type="text"/>
                  </div>
                  </Col>
              </div>
                  
                 </div>
                 </div>
           </div>
           <div className='whiteBoxCart mt-4 pb-2'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
      
      <p className="fontWeightBold ml-4" href="#">
                 کد تخفیف
                </p>
      </div>
      <Button className="saveBtn">
          
         ثبت
      </Button>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="shadowBox mb-4">
              <div className='row align-items-center'>
                  <Col md={4} className="shaCol1">
                  <p className="fontWeightBold">
                   
کد تخفیف دارید ؟ </p>
                  
                  </Col>
                  <Col md={8} className="ta-left shaCol1">
                  
                  <div className='d-flex align-items-center justify-content-end mt-2 f3'>
                      <p className='fontWeightBold mr-4'>
                         کد تخفیف خود را وارد کنید :
                      </p>
                      <input type="text"/>
                  </div>
                  </Col>
              </div>
                  
                 </div>
                 </div>
            </div>
            <div className="cartCol2">
            <div className='whiteBoxCart pd30'>
            <div className="priceRowCart mb-4">
                    <div>
                        <p>
                            جمع سبد خرید : 
                        </p>
                    </div>
                    <div>
                        <p>
                            3.250.000 تومان
                        </p>
                    </div>
                </div>
                <div className="priceRowCart mb-4">
                    <div>
                        <p>
                            هزینه ارسال :
                        </p>
                    </div>
                    <div>
                        <p>
                            125.000 تومان
                        </p>
                    </div>
                </div>
                <hr className="cartHr"></hr>
                <div className="priceRowCart mb-4">
                    <div>
                        <p>
                            قابل پرداخت :
                        </p>
                    </div>
                    <div>
                    <p>
                            3.250.000 تومان
                        </p>
                    </div>
                </div>
                <Button className="saveBtn w100 mt-4" style={{marginTop:20}} >
                    پرداخت
                </Button>
            </div>
              <p className='fontWeightNormal mt-4'>
              کالاهای موجود در سبد خرید شما ثبت و رزرو نشده اند ، 
برای ثبت سفارش مراحل بعدی را تکمیل کنید.

              </p>
            </div>
            </div>
   
      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default CartStep2;
