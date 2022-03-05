import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaAngleDoubleRight ,FaAngleDoubleLeft ,FaAward,FaPlus } from 'react-icons/fa';
import Img1 from "../../assets/img/img1.png";
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import React,{useState,useEffect,useContext} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { AuthContext } from "../../../context/auth-context";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    border: "none",
    borderRadius:5,
    boxShadow: 24,
    p: 4,
  };
const CartStep1 = () => {
    const [count,setCount]=useState(1)
    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
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
      const [data,setData]=useState([])
      const params = useParams().id;
      const history = useHistory();
    console.log(params)
      const mainSlider=()=>{
        const axios = require("axios");

          axios
              .post(apiUrl + "ShoppingBasketView",{
                CustomerID:params
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
      }, []);
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
            {
            data.map((item)=>{
                return(

            <div className="d-flex justify-content-between pd4">
                     <div className="d-flex">
                        <img src={apiAsset+item.Pic1} className="CartProductImg"/>
                        <div>
                            <p className="CartProductName">
{item.ProductName}                            </p>
                            <div className="d-flex align-items-center">
                                <div className="CartColor" style={{backgroundColor:"#"+item.ColorID}}>

                                </div>
                                {/* <p className="CartColorP">
                                    رنگ سبز
                                </p> */}
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
                            {item.Cost} تومان
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
                )
            })
                 }
                 <hr className="cartHr"></hr>
                 {/* <div className="d-flex justify-content-between pd4">
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
                 </div> */}
           </div>
           <div className='whiteBoxCart mt-4'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">

      <p className="fontWeightBold ml-4" href="#">
                   انتخاب آدرس
                </p>
      </div>
      <Button className="addressAdd" onClick={handleOpen1}>
          <FaPlus className="mr-2"/>
          افزودن آدرس جدید
      </Button>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            افزودن آدرس جدید
          </Typography>
          <hr/>
         <div className="row">
             <Col md={4}>
 
                                <p className="fontWeightMedium mb-2">
                                   استان
                                </p>
                                <select name="state" id="state" className="informationSelect">
                                   <option value="man">تهران</option>
                                   <option value="woman">اصفهان</option>
                                  </select>

             </Col>
             <Col md={4}>

            <p className="fontWeightMedium mb-2">
               شهر
            </p>
            <select name="state" id="state" className="informationSelect">
               <option value="man">تهران</option>
                <option value="woman">اصفهان</option>

              </select>

</Col>
             <Col md={4}>
             <p className="fontWeightMedium mb-2">
                                   کد پستی
                                </p>
                                <input className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
                                   کد پستی
                                </p>
                                <textarea className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button className="saveBtn mt-4">
                     ذخیره
                 </Button>
             </Col>
         </div>
        </Box>
      </Modal>
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
