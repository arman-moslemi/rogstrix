import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container, Col, Button, Row } from "react-bootstrap";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaAward, FaPlus } from 'react-icons/fa';
import Img1 from "../../assets/img/img1.png";
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react'
import { apiUrl, apiAsset } from "../../../commons/inFormTypes";
import { AuthContext } from "../../../context/auth-context";
import CustomizedDialogs from './layouts/AlertModal';
import { useTranslation } from 'react-i18next';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  border: "none",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};
const CartStep1 = () => {
  const { t, i18n } = useTranslation();

  const [count, setCount] = useState(1)
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [tran, setTran] = useState()
  const [radio, setRadio] = useState("")

  const [open1, setOpen1] = useState(false);
  const [total, setTotal] = useState(0);
  const [ID, setID] = useState(0);


  const increment = (id, type) => {
    setCount(count + 1)
    console.log(count)
    const axios = require("axios");

    axios
      .post(apiUrl + "ShoppingBasketChange", {
        ShoppingBasketID: id,
        Type: type
      })
      .then(function (response) {
        if (response.data.result == "true") {

          // setData(response.data.Data)
          mainSlider()
          console.log(response.data.Data)

        }
        else {
          console.log(response.data.result)

        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const decrement = () => {
    // this.setState({
    //   count: this.state.count - 1
    // });
    if (count != 0)
      setCount(count - 1)
  }
  const [data, setData] = useState([])
  // const params = useParams().id;
  const history = useHistory();
  var Guest = localStorage.getItem("guest")
  const mainSlider = async () => {
    const axios = require("axios");
    const storedData = JSON.parse(localStorage.getItem("userData"))?.token

    axios
      .post(apiUrl + "ShoppingBasketView", {
        CustomerID: storedData?.toString().length < 10 && storedData ? storedData : 0,
        GuestID: storedData?.toString().length < 10 && storedData ? 0 : Guest ? Guest : 0,
      })
      .then(function (response) {
        if (response.data.result == "true") {
          console.log(12376678)
          console.log(data?.length)
          setData(response.data.Data)
          console.log(response.data.Data)
          var tot = 0
          response.data.Data.map((item) => {
            tot += parseInt(item?.Cost) * item.Number
          })
          setTotal(tot)
        }
        else {
          console.log(response.data.result)

        }
      })
      .catch(function (error) {
        console.log(error);
      });



  }
  const toStep2 = () => {
    const storedData = JSON.parse(localStorage.getItem("userData"))?.token
    console.log(234555)
    console.log(data?.length)
    console.log(555)
    console.log(storedData?.toString().length < 10 && storedData ? true : false)
    if (data.length == 0) {
      alert("سبد خرید خالی است!")

    }
    else if (storedData?.toString().length > 10 && !storedData) {
      alert("ابتدا ورود کنید")
      history.push("/Login")

    }
    else {
      history.push("/CartStep2/" + storedData)
      // alert("سبد خرید خالی است!")


    }

  }
  const deleted = (id) => {
    const axios = require("axios");

    axios
      .post(apiUrl + "ShoppingBasketDelete", {
        ShoppingBasketID: id
      })
      .then(function (response) {
        if (response.data.result == "true") {

          setData(response.data.Data)
          console.log(response.data.Data)
          mainSlider();

        }
        else {
          console.log(response.data.result)

        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    mainSlider();
    // getData()

    // alert(val)
  }, []);
  return (
    <div className="EachCategoryBody">
      <Header />
      <Menu />


      <Container className="CartContainer" fluid>
        <p className="CartTitle">
          {t("سبد خرید")}
        </p>

        <div className="cartDiv">
          <div className="cartCol1 mb-4">
            <div className='whiteBoxCart'>
              <div className="rightMenuBox1">
                <div className="d-flex align-items-center">

                  <p className="fontWeightBold" href="#">
                    {t("محصولات انتخاب شده")}
                  </p>
                </div>
              </div>
              <hr className="grayDashed" />
              {
                data?.map((item) => {
                  return (

                    <div className="d-flex justify-content-between pd4 f1">
                      <div className="d-flex">
                        <img src={apiAsset + item.Pic1} className="CartProductImg" />
                        <div>
                          <p className="CartProductName">
                            {item.ProductName ? item.ProductName : item?.SystemName}                            </p>
                          <div className="d-flex align-items-center">
                            <div className="CartColor" style={{ backgroundColor: "#" + item.ColorHex }}>

                            </div>
                            <p className="CartColorP">گارانتی:{item.WarrantyName}                                </p>
                          </div>
                          <p className="CartColorP mt-4">
                            <FaAward />
                            {t("ضمانت اصل بودن کالا")}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex ta-center pd0 d-inline-block align-items-center" style={{ borderBottom: "none", marginTop: 5 }}>
                          <p className="CartColorP"> {t("تعداد :")}</p>
                          <div className="counterDiv">
                            <button onClick={() => item.Number == 1 ? null : increment(item.ShoppingBasketID, "mines")} className="decBTN">-</button>
                            <span style={{ marginRight: '0' }}>{item.Number}</span>
                            <button onClick={() => increment(item.ShoppingBasketID, "add")} className="inBTN">+</button>
                          </div>
                        </div>
                        <div className="priceRowCart mb-4 mt-4">
                          <div>
                            <p className='colorRed'>
                              {t("قیمت :")}
                            </p>
                          </div>
                          <div>
                            <p className='colorRed'>

                              {parseInt(item?.Cost).toLocaleString("en-de")
                              }                         {t("تومان")}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                          {/* <Button className="glassBtn" id="colorBlue">
                             ویرایش
                         </Button> */}
                          <Button onClick={() => { deleted(item.ShoppingBasketID); setID(item.ShoppingBasketID) }} className="glassBtn borderRight" id="colorRed">
                            {t("حذف")}
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


          </div>
          <div className="cartCol2">
            <div className='whiteBoxCart pd30'>
              <div className="priceRowCart mb-4">
                <div>
                  <p>
                    {t("جمع سبد خرید :")}
                  </p>
                </div>
                <div>
                  <p>
                    {total.toLocaleString("en-de")} {t("تومان")}
                  </p>
                </div>
              </div>
              {/* <div className="priceRowCart mb-4">
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
                </div> */}
              <Button onClick={() => toStep2()} className="saveBtn w100 mt-4" style={{ marginTop: 20 }} >
                {t("ادامه سفارش")}
              </Button>
            </div>
            <p className='fontWeightNormal mt-4'>
              {t("کالاهای موجود در سبد خرید شما ثبت و رزرو نشده اند ، برای ثبت سفارش مراحل بعدی را تکمیل کنید.")}

            </p>
          </div>
        </div>

      </Container>
      <RedBox />
      <FooterMain />
    </div>
  );
};
export default CartStep1;
