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
const CartStep1 = () => {
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
           <div className='whiteBoxCart'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center">
      
      <p className="fontWeightBold" href="#">
                   محصولات انتخاب شده
                </p>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="d-flex justify-content-between pd4">
                     <div className="d-flex">
                        <img src={Img1} className="CartProductImg"/>
                        <div>
                            <p className="CartProductName">
                            Razer Gaming Computer Mouse
                            </p>
                            <div className="d-flex align-items-center">
                                <div className="CartColor">

                                </div>
                                <p className="CartColorP">
                                    رنگ سبز
                                </p>
                            </div>
                            <p className="CartColorP mt-4">
                                <FaAward/>
                                    ضمانت اصل بودن کالا
                                </p>
                        </div>
                     </div>
                     <div>
                     <div  className="d-flex ta-center pd0 d-inline-block align-items-center" style={{borderBottom:"none"}}>
                    <p className="CartColorP">تعداد :</p>
                    <div className="counterDiv">
              <button onClick={()=>decrement()} className="decBTN">-</button>
              <span style={{marginRight:'0'}}>{count}</span>
              <button onClick={()=>increment()} className="inBTN">+</button>
            </div>
                    </div>
                    <div className="priceRowCart mb-4 mt-4">
                    <div>
                        <p className='colorRed'>
                            قیمت :  
                        </p>
                    </div>
                    <div>
                        <p className='colorRed'>
                            3.250.000 تومان
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue">
                             ویرایش
                         </Button>
                         <Button className="glassBtn borderRight" id="colorRed">
                             حذف
                         </Button>
                     </div>
                     </div>
                 </div>
                 <hr className="cartHr"></hr>
                 <div className="d-flex justify-content-between pd4">
                     <div className="d-flex">
                        <img src={Img1} className="CartProductImg"/>
                        <div>
                            <p className="CartProductName">
                            Razer Gaming Computer Mouse
                            </p>
                            <div className="d-flex align-items-center">
                                <div className="CartColor">

                                </div>
                                <p className="CartColorP">
                                    رنگ سبز
                                </p>
                            </div>
                            <p className="CartColorP mt-4">
                                <FaAward/>
                                    ضمانت اصل بودن کالا
                                </p>
                        </div>
                     </div>
                     <div>
                     <div  className="d-flex ta-center pd0 d-inline-block align-items-center" style={{borderBottom:"none"}}>
                    <p className="CartColorP">تعداد :</p>
                    <div className="counterDiv">
              <button onClick={()=>decrement()} className="decBTN">-</button>
              <span style={{marginRight:'0'}}>{count}</span>
              <button onClick={()=>increment()} className="inBTN">+</button>
            </div>
                    </div>
                    <div className="priceRowCart mb-4 mt-4">
                    <div>
                        <p className='colorRed'>
                            قیمت :  
                        </p>
                    </div>
                    <div>
                        <p className='colorRed'>
                            3.250.000 تومان
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue">
                             ویرایش
                         </Button>
                         <Button className="glassBtn borderRight" id="colorRed">
                             حذف
                         </Button>
                     </div>
                     </div>
                 </div>
           </div>
           <div className='whiteBoxCart mt-4'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
      
      <p className="fontWeightBold ml-4" href="#">
                   انتخاب آدرس
                </p>
      </div>
      <Button className="addressAdd">
          <FaPlus className="mr-2"/>
          افزودن آدرس جدید
      </Button>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                 <div className="shadowBox mb-4">
                     <p className="fontWeightNormal">
                     <Radio
       
        sx={{
          color: '#ff004e',
          '&.Mui-checked': {
            color: '#ff004e',
          },
        }}
      />
                     استان تهران، شهر تهران، محله چهار راه استقلال، پاسداران میدان هروی بلوار گلها — کد پستی 1669148656
                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue">
                             ویرایش
                         </Button>
                         <Button className="glassBtn borderRight" id="colorRed">
                             حذف
                         </Button>
                     </div>
                 </div>
                
                 </div>
           </div>
           <div className='whiteBoxCart mt-4'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
      
      <p className="fontWeightBold ml-4" href="#">
                  انتخاب نحوه ارسال
                </p>
      </div>
      <Button className="saveBtn">
          
         ثبت
      </Button>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1 d-flex">
                 <div className="shadowBox mb-4 w30">
                     <p className="fontWeightBold">
                     <Radio
       
       sx={{
         color: '#ff004e',
         '&.Mui-checked': {
           color: '#ff004e',
         },
       }}
     />
     ارسال با پیک
                   </p>
                   <p className='fontWeightNormal'>
                       هزینه ارسال : 12000 تومان
                   </p>
                    
                 </div>
                 <div className="shadowBox mb-4 w30">
                     <p className="fontWeightBold">
                     <Radio
       
       sx={{
         color: '#ff004e',
         '&.Mui-checked': {
           color: '#ff004e',
         },
       }}
     />
     ارسال با پیک
                   </p>
                   <p className='fontWeightNormal'>
                       هزینه ارسال : 12000 تومان
                   </p>
                    
                 </div>
                 <div className="shadowBox mb-4 w30">
                     <p className="fontWeightBold">
                     <Radio
       
       sx={{
         color: '#ff004e',
         '&.Mui-checked': {
           color: '#ff004e',
         },
       }}
     />
     ارسال با پیک
                   </p>
                   <p className='fontWeightNormal'>
                       هزینه ارسال : 12000 تومان
                   </p>
                    
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
                            وابسته به آدرس انتخابی
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
                    ادامه فرایند خرید
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
export default CartStep1;
