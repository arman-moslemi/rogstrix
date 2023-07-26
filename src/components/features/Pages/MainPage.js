import FooterMain from "./layouts/FooterMain";
import Header from "./layouts/Header";
import Menu from "./layouts/Menu";
import React, { useState, useEffect } from 'react'
import RedBox from "./layouts/RedBox";
import BlackBox from "./layouts/BlackBox";
import MainSlider from "./MainPageComponents/MainSlider";
import SpecialOffer from "./MainPageComponents/SpecialOffer";
import ExclusiveSlider from "./MainPageComponents/ExclusiveSlider";
import NewProductSliderCard from "./MainPageComponents/NewProductSliderCard";
import BestSellingSliderCard from "./MainPageComponents/BestSellingSliderCard";
import BestSellingSlider from "./MainPageComponents/BestSellingSlider";
import bannerAssemble from "../../assets/img/bannerAssemble.png";
import bannerCase from "../../assets/img/bannerCase.png";
import img7 from "../../assets/img/img7.png";
import { Container, Col, Button, Row } from "react-bootstrap";

import WeblogSlider from "./MainPageComponents/WeblogSlider";
import { apiUrl, apiAsset } from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCard from "../Pages/HomePageComponents/SliderCard";
import SpecialOfferSlider from "../Pages/MainPageComponents/SpecialOfferSlider";
import SpecialSliderCard from "../Pages/MainPageComponents/SpecialSliderCard";

const MainPage = () => {
  const [slider, setSlider] = useState([])
  const [blog, setBlog] = useState([])
  const [newPro, setNew] = useState([])
  const [rog, setRog] = useState([])
  const [seller, setSeller] = useState()
  const [special, setSpecial] = useState()
  const [showMore, setShowMore] = useState(false)
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 3,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    }
  };

  const responsiveSpecial = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 2,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1000, min: 790 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 790, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const mainSlider = async () => {
    const axios = require("axios");
    console.log(i18n.language)
    axios
      .get(apiUrl + "MainSlider", {
        headers: {
          lang: i18n.language
        }
      })
      .then(function (response) {
        if (response.data.result == "true") {

          setSlider(response.data.Data[0])
          console.log(3425)
          console.log(response.data.Data[0])

        }
        else {
          console.log(response.data.result)

        }
      })
      .catch(function (error) {
        console.log(error);
      });


    axios.get(apiUrl + "BestSellersProduct", {
      headers: {
        lang: i18n.language
      }
    })
      .then(function (response) {
        if (response.data.result == "true") {

          setSeller(response.data.Data)
          console.log(889988)
          console.log(response.data.Data)

        }
        else {
          console.log(22)

          console.log(response)

        }
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get(apiUrl + "LastRogProduct", {
      headers: {
        lang: i18n.language
      }
    })
      .then(function (response) {
        if (response.data.result == "true") {

          setRog(response.data.Data)
          console.log(11)
          console.log(response.data.Data)

        }
        else {
          console.log(response.data.result)

        }
      })
      .catch(function (error) {
        console.log(error);
      });
    axios.get(apiUrl + "LastProduct", {
      headers: {
        lang: i18n.language
      }
    })
      .then(function (response) {
        if (response.data.result == "true") {

          setNew(response.data.Data.sort((a, b) => (a.ProductID < b.ProductID) ? 1 : -1))
          // newPro.sort((a, b) => (a.ProductID > b.ProductID) ? 1 : -1)
          console.log("new")
          console.log(response.data.Data)

        }
        else {
          console.log(response.data.result)

        }
      })
      .catch(function (error) {
        console.log(error);
      });
    axios.get(apiUrl + "LastBlog", {
      headers: {
        lang: i18n.language
      }
    })
      .then(function (response) {
        if (response.data.result == "true") {

          setBlog(response.data.Data)


        }
        else {

        }
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .post(apiUrl + "LastSpecialMainProduct", {
        headers: {
          lang: i18n.language
        }
      })
      .then(function (response) {
        if (response.data.result == "true") {

          setSpecial(response.data.Data)
    

        }
        else {

        }
      })
      .catch(function (error) {
        console.log(error);
      });




    axios.post(apiUrl + "LastSpecialMainProduct", { MainGroupID: 1 })
      .then(function (response) {
        console.log(159876)

        console.log(response)

        if (response.data.result == "true") {

          setSpecial(response.data.Data)
          console.log(response.data.Data)

        }
        else {
          console.log(789456)

          console.log(response.data.result)

        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    mainSlider();
    document.title = "Rogstrixراگ استریکس | فروشگاه اینترنتی قطعات و سیستم های کامپیوتری";
    document.getElementsByTagName("META")[2].content = "راگ استریکس مرجع فروش اینترنتی بهترین و با گیفیت ترین تجهیزات کامپیوتر | همراه با اسمبل أنلاین و مشاوره رایگان";


    // alert(val)
  }, []);
  const mainProduct = (ss) => {
    const axios = require("axios");


    axios.post(apiUrl + "SpecialMainProduct", { MainGroupID: ss }, {
      headers: {
        lang: i18n.language
      }
    })
      .then(function (response) {
        if (response.data.result == "true") {

          setSpecial(response.data.Data)
          console.log(999)
          console.log(response.data.Data)

        }
        else {
          console.log(999)

          console.log(response.data.result)

        }
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  return (
    <>


      <Header setLanguage={setLanguage} />
      <Menu />
      <Container className="MainPageContainer ta-center" fluid>
        <MainSlider data={slider} />
        {/* <SpecialOffer data={slider}/> */}
        <div className="MainPageSpecialOffer">
          <div className="row margin25">
            <Col md={12} className="resTaCenter">
              <div className="">
                <p className="specialOfferTitle">
                  {t("پیشنهادهای ویژه")}
                </p>
              </div>
              <div className="seeAllDiv">
                <Button onClick={() => history.push("/ProductsSpecial")} className="seeAll">{t("مشاهده همه")}</Button>
              </div>
            </Col>
          </div>
          <div className="row">
            <Col md={2} className="pdTop15 colSpecial1">
              <ul className="specialOfferUl">
                <li onClick={() => mainProduct(1)}>
                  {/* <a href="#"> */}
                  {t("کامپیوتر و قطعات")}
                  {/* </a> */}
                </li>
                <li onClick={() => mainProduct(2)}>
                  {t(" لپتاپ و کامپیوتر آماده و قطعات")}
                </li>
                <li onClick={() => mainProduct(3)}>
                  {t("تبلت")}
                </li>

                <li onClick={() => mainProduct(4)}>
                  {t("موبایل و گجت")}
                </li>
                <li onClick={() => mainProduct(5)}>
                  {t("شبکه و سرور")}
                </li>
                <li onClick={() => mainProduct(6)}>
                  {t(" ماشین های اداری و قطعات")}
                </li>
                <li>
                  {t("دوربین و لوازم جانبی")}
                </li>
                <li onClick={() => mainProduct(7)}>
                  {t("کنسول و لوارم بازی")}
                </li>
              </ul>
            </Col>
            <Col md={8} className="colSpecial2">

              {/* <SpecialOfferSlider data={special}/> */}
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                arrows={true}
                responsive={responsiveSpecial}

                ssr={true}
                // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="ease-in-out .8"
                transitionDuration={4000}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={['desktop']}
                rtl={true}
                // deviceType={"desktop"}

                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"

              >
                {
                  special?.map((item) => {
                    return (

                      item ?
                        <div>
                          <SpecialSliderCard data={item} />
                        </div>
                        :
                        null

                    )
                  })
                }
                <div>

                </div>

              </Carousel>
            </Col>
            <Col md={2} className="colSpecial3">
              <div className="redBanner">
              <a href={ slider?.LinkLeftSlider1} >
                <img style={{ borderRadius: 20 }} src={apiAsset + slider?.LeftSlider1} />
                {/* <p>ایسوس</p> */}
              </a>
              </div>
              <div className="blackBanner">
              <a href={ slider?.LinkLeftSlider2} >
                <img style={{ borderRadius: 20 }} src={apiAsset + slider?.LeftSlider2} />
                {/* <p>سامسونگ</p> */}
              </a>
              </div>
            </Col>
          </div>
        </div>








        <div className="bannerRow">
          <div className="row">
            <Col md={6}>
              <div className="bannerBackground">
                <Link onClick={() => history.push("/AssembleSecond")} className="row align-items-center">
                  <Col md={2} className="bannerCol1">
                    <img src={bannerAssemble} className="redbannerImg" />
                  </Col>
                  <Col md={10} className="bannerCol2">
                    <p className="bannerFirstLine">
                      {t("ساخت و اسمبل کردن سیستم")}
                    </p>
                    <p className="bannerSecondLine">
                      {t("انتخاب، مقایسه و اسمبل سریع از بین قطعات برندهای مختلف")}
                    </p>
                  </Col>

                </Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="bannerBackground">
                <Link onClick={() => history.push("/CompletedSystems")} className="row align-items-center">
                  <Col md={2} className="bannerCol1">
                    <img src={bannerCase} className="redbannerImg" />
                  </Col>
                  <Col md={10} className="bannerCol2">
                    <p className="bannerFirstLine">
                      {t("سیستم های آماده")}
                    </p>
                    <p className="bannerSecondLine">
                      {t("خرید از بین سیستم های آماده و بسته شده توسط کاربران")}
                    </p>
                  </Col>

                </Link>
              </div>
            </Col>
          </div>
        </div>
        <BlackBox data={slider} />
        {/* <ExclusiveSlider data={slider}/> */}
        <div className="bestSellingDiv" style={{ backgroundColor: '#fff' }}>
          <div className="row margin25 backWhite" style={{ paddingTop: 25 }}>
            <Col md={12}>
              <div className="">
                <p className="specialOfferTitle" style={{ color: '#1a1a1a' }}>
                  {t("محصولات راگ")}
                </p>
              </div>
              <div className="seeAllDiv" style={{ paddingLeft: 50 }}>
                <Button onClick={() => history.push("/home")} className="seeAll">{t("مشاهده همه")}</Button>
              </div>
            </Col>
          </div>
          {/* <div className="d-flex justify-content-center margin mn  marginBottom30" style={{overflowY:'hidden',overflowX:'scroll'}}> */}
          {/* {
         rog?.map((item)=>{
           return(

     <div>
           <BestSellingSliderCard viewList={true} data={item}/>
         </div>
           )
         })
       } */}

          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            arrows={true}
            responsive={responsive}

            ssr={true}
            // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="ease-in-out .8"
            transitionDuration={4000}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={['desktop']}
            rtl={true}
            // deviceType={"desktop"}

            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"

          >
            {
              rog?.map((item) => {
                return (

                  item ?
                    <div>
                      <SliderCard data={item} />
                    </div>
                    :
                    null

                )
              })
            }
            <div>

            </div>

          </Carousel>


          {/* </div> */}
        </div>
        <div>
          <div className="row customRow">
            <Col md={4}>
              <Link to={slider.LinkDownSlider1} href={slider.LinkDownSlider1} className="productBannerBox" id="backBlack">

                <img style={{ borderRadius: 20 }} src={apiAsset + slider?.DownSlider1} />
                <div className="">

                  {/* <a href={slider.LinkDownSlider1} className="productLink">
                    مشاهده محصول
                  </a> */}
                </div>

              </Link>
            </Col>
            <Col md={4}>
              <Link to={slider.LinkDownSlider2} href={slider.LinkDownSlider2} className="productBannerBox" id="backGray">

                <img style={{ borderRadius: 20 }} src={apiAsset + slider?.DownSlider2} />

                {/* <div className="">

                  <a href={slider.LinkDownSlider2} className="productLink">
                    مشاهده محصول
                  </a>
                </div> */}


              </Link>
            </Col>
            <Col md={4}>
              <Link to={slider.LinkDownSlider3} href={slider.LinkDownSlider3} className="productBannerBox" id="backBlack">
                <img style={{ borderRadius: 20 }} src={apiAsset + slider?.DownSlider3} />
                {/* <div className="">

                  <a href={slider.LinkDownSlider3} className="productLink">
                    مشاهده محصول
                  </a>
                </div> */}

              </Link>
            </Col>
          </div>
        </div>

        <div className="bestSellingDiv">
          <div className="row margin25  p">
            <Col md={12}>
              <div className="">
                <p className="specialOfferTitle colorBlack">
                  {t("محصولات پر فروش")}
                </p>
              </div>
              {/* <div className="seeAllDiv" style={{paddingLeft:50}}>
                        <Button className="seeAll">مشاهده همه</Button>
                    </div> */}
            </Col>
          </div>
          <div className="d-flex justify-content-center margin">


            <div className="tt2">
              <BestSellingSlider data={seller} />
            </div>


          </div>
        </div>
        <div>
          <div className="row customRow">
            <Col md={4}>
              <Link to={slider.LinkDownSlider4} href={slider.LinkDownSlider4} className="productBannerBox" id="backBlack">
                <img style={{ borderRadius: 20 }} src={apiAsset + slider?.DownSlider4} />
                {/* <div className="">

                  <a href={slider.LinkDownSlider4} className="productLink">
                    مشاهده محصول
                  </a>
                </div> */}



              </Link>
            </Col>
            <Col md={4}>
              <Link to={slider.LinkDownSlider5} className="productBannerBox" id="backGray">
                <img style={{ borderRadius: 20 }} src={apiAsset + slider?.DownSlider5} />
                {/* <div className="">

                  <a href={slider.LinkDownSlider5} className="productLink">
                    مشاهده محصول
                  </a>
                </div> */}

              </Link>
            </Col>
            <Col md={4}>
              <Link href={slider.LinkDownSlider6} className="productBannerBox" id="backBlack">
                <img style={{ borderRadius: 20 }} src={apiAsset + slider?.DownSlider6} />
                {/* <div className="">

                  <a href={slider.LinkDownSlider6} className="productLink">
                    مشاهده محصول
                  </a>
                </div> */}

              </Link>
            </Col>
          </div>
        </div>
        <div className="newProductBox">
          <div className="row margin25">
            <Col md={12} className="resTaCenter">
              <div className="">
                <p className="specialOfferTitle colorWhite">
                  {t("محصولات جدید")}
                </p>
              </div>
              {/* <div className="seeAllDiv" onClick={() => history.push("/products/89")} style={{ paddingLeft: 50 }}>
                <Button className="seeAll"> {t("مشاهده همه")}</Button>
              </div> */}
            </Col>
          </div>
          <div className="row">
            {
              newPro?.map((item, index2) => {
                return (
                  index2 < 4 ?
                    <Col md={6} className="marginTop30 newProductCol">
                      <div className=" whiteBoxSlider">
                        <NewProductSliderCard data={item} />
                      </div>
                    </Col>
                    :
                    null
                )
              })
            }

          </div>

        </div>
        <div className="newsDiv">
          <div className="row margin25 backWhite">
            <Col md={12} className="resTaCenter">
              <div className="">
                <p className="specialOfferTitle colorBlack">
                  {t("وبلاگ و خبرنامه")}
                </p>
              </div>
              <div className="seeAllDiv" style={{ paddingLeft: 50 }}>
                <Button onClick={() => history.push('/BlogMain')} className="seeAll"> {t("مشاهده همه")}</Button>
              </div>
            </Col>
          </div>
          <div className="tt3">
            <WeblogSlider data={blog} />
          </div>

        </div>
        <div>
          {
            showMore ?
              <p style={{ margin: 20, lineHeight: 2, textAlign: 'right', fontFamily: 'IRANSans', fontSize: 14 }}>
                <h1 style={{ fontFamily: 'IRANSans-Bold', fontSize: '20px' }}>ROG STRIX</h1>
                <br />
                به طور کلی ریشه اصلی برند Rog Strix در شرکت حرفه ای <a href="https://www.asus.com/"> ایسوس </a>است، اما در حال حاضر در کشور ما به دلیل شرایط اقتصادی و تحریم های به وجود آمده، این برند معتبر نمی تواند نمایندگی اصلی خود را در این کشور داشته باشد.
                <br />
                ما قصد داریم به عنوان یک مولتی برند محصولات کامپیوتری گسترده ای را به بازار عرضه کنیم.
                <br />
                همان گونه که در مطالب فوق ذکر شد ما مرکز فروش برند Rog Strix در ایران هستیم و تمامی محصولات این برند محبوب را در داخل کشور پوشش می دهیم، همچنین ما برای مشتریان این برند تمامی محصولات را با بیمه نامه معتبر و خدمات پس از فروش ویژه و گسترده عرضه خواهیم کرد. ما به عنوان یک مولتی برند، در کنار
                Rog Strix دیگر محصولات سخت افزاری کامپیوتری را به مشتریان خود ارائه می دهیم.
                <br />
                Rog یا همان republic of gamers نام تجاری است که شرکت ایسوس Asus از سال 2006 تا کنون از آن استفاده می کند و مجموعه ای از سخت افزارها از جمله لپتاپ، کامپیوتر های شخصی قطعاتی همچون (مادربرد، گرافیک و ...) و همچنین لوازم جانبی مانند موس ،کیبورد و .... را در برمیگیرد. rog در سال های پس از شروع به کار خود توانسته محبوبیت و مشروعیت بسیار زیادی برای خود پیدا کند و به یکی از قطب های اصلی دنیای گیمینگ تبدیل شود.
                <br />
                ROG و Strix به مدت چندین سال متوالی به صورت جداگانه بر روی بخش های مختلف سیستم های خود کار می کردند، همانطور که گفته شد ROG به صورت تخصصی بر روی قطعاتی همچون مادربرد، کارت گرافیک و لوازم جانبی از جمله کیس گیمینگ کار و Strix به صورت تخصصی بر روی فن ها و سیستم خنک کننده محصولات کار می کرد، این دو برند پس از مدت کوتاهی باهم ترکیب و به صورت تیمی بر روی محصولات کار خود را شروع کردند.
                <br />
                در ادامه شما را با محصولات و انواع مختلف محصولات تولیدی این برند آشنا خواهیم کرد.
                <br />
                <h2 style={{ fontFamily: 'IRANSans-Bold', fontSize: '18px', marginTop: 15 }}>لپ تاپ های ROG Strix</h2>
                <br />
                همان طور که مشخص است در دنیای مدرن امروز گیم بسیار محبوب و سرگرم کننده است، همین امر سبب شده تا دنیای گیمینگ از اهمیت و جایگاه بسیار بالایی در بین طرفداران خود پیدا کند و در کانون توجهات دنبال کنندگان بازی های گیمی قرار بگیرد. معمولا گیمرها برای تجربه لذت بیشتری از بازی و گیم مورد علاقه خود، همواره به دنبال تهیه لپ تاپ های گیمینگ حرفه ای و به روز دنیا هستند.
                <br />
                لپ تاپ های سری Strix  Rog توسط شرکت حرفه ای ایسوس طراحی و تولید می شوند و هدف از طراحی و تولید این دسته از لپ تاپ ها این است که گیمر ها به راحتی بتوانند بازی های روز دنیا را با بهترین کیفیت تجربه کنند این نوع از لپ تاپ ها جز بهترین مدل های لپ تاپ مخصوص بازی موجود در بازار است. این سری از لپ تاپ ها شامل  Zephyrus، G، Flow، Scar  و … است.
                <br />
                شرکت حرفه ای ایسوس همواره در تلاش است تا با تولید و ارائه لپ تاپ های خود تعادل خوبی میان کیفیت و قیمت در دنیا برقرار کند. اگر شما جزو آن دسته گیمر هایی هستند که علاوه بر کانفیگ، نمایشگر و طراحی ظاهری لپ تاپ برای شما از اهمیت بسیار بالایی برخوردار است، داشتن یکی از مدل های جذاب و محبوب از سری لپ تاپ های راگ ایسوس به طور قطع تمامی نیاز های شما را برطرف خواهد ساخت، این نکته را بیاد داشته باشید که ما در Rog Strix تمامی مدل ها را برای شما فراهم کردیم.
                <br />
                <h2 style={{ fontFamily: 'IRANSans-Bold', fontSize: '18px', marginTop: 15 }}>کیس های  ROG Strix</h2>
                <br />
                سیستم های دسکتاپ امروزه قدرتمندتر از همیشه هستند و به راحتی پاسخگوی نیاز افراد  برای اجرای بازی های روز هستند. <a href="https://rogstrix.com/Subproduct/187">کیس های Rog Strix</a>یک کیس مخصوص بازی هستند که در دی ان ای های آن ، روح سری Strix  Rog ایسوس تزریق شده است تا  گیمر ها لحظاتی فراموش نشدنی از بازی کردن را تجربه کنند. درون کیس های Rog Strix از پردازنده های بسیار قوی استفاده شده است. معمولا درون بدنه این کیس ها از LED های هشت میلیون رنگ استفاده می کنند که می شود آن ها را در چهار منطقه کنترل کرد. نورپردازی کیس های Strix  Rog زیبایی بسیار زیبایی دارد و گیمر را به وجد می آورد.
                <br />
                <h2 style={{ fontFamily: 'IRANSans-Bold', fontSize: '18px', marginTop: 15 }}>سخت افزار در دسکتاپ های ROG STRIX:</h2>
                <br />
                شرکت ایسوس در انتخاب پردازنده های کامپیوترهای Strix  Rog خود خیلی سخت گیرانه عمل می کند تا بتواند بهترین پردازنده ها را انتخاب و آن ها را تا 14 درصد اورکلاک کند تا از پردازنده های دیگر موجود در بازار قوی تر باشند به این ترتیب هر زمان که اراده کنید می توانید به آسانی و با استفاده از Turbo Gear فرکانس پردازنده را از 4 گیگاهرتز به 4.6 گیگاهرتز ارتقا دهید. نیازی به راه اندازی مجدد کامپیوترتان نخواهید داشت و بسیار راحت می توانید پس از اورکلاک، استفاده از کامپیوتر خود را ادامه دهید. خنک کننده های آبی بر روی پردازنده باعث می شوند تا خیالتان از نظر پایداری سیستم خود حین اورکلاک راحت باشد.
                <br />
                <h2 style={{ fontFamily: 'IRANSans-Bold', fontSize: '18px', marginTop: 15 }}>جلوه های ویژه</h2>
                <br />
                کامپیوترهای Rog Strix از دو مدل کارت گرافیکی که با یکدیگر SLI شده اند استفاده می کنند. این دو غول گرافیکی در کنار یکدیگر می توانند جلوه های جذابی را در حین بازی برای شما به ارمغان اورد، به این ترتیب شما می توانید از جلوه های ویژه و جذابی در حین بازی بهرمند شوید، به گونه ای که دیگر هیچ لگ و پرشی در تصویر برای شما به چشم نیاید.
                <br />
                <h2 style={{ fontFamily: 'IRANSans-Bold', fontSize: '18px', marginTop: 15 }}>قطعات کامپیوتر  ROG Strix</h2>
                <br />
                قطعاتی همچون هارد، مادربرد <a href="https://rogstrix.com/Subproduct/179"> (CPU)سی پی یو </a>و غیره با نام مهمترین قطعات یک سیستم گیمینگ قدرتمند شناخته می شوند. شما باید بتوانید تعادلی میان قیمت و عملکرد قطعات اصلی کامپیوتر خود برقرار کنید. در حالت ایده ‌آل، کیس گیمینگ باید یکی از عالی ترین کارت‌های گرافیک و سی پی یوهای موجود در بازار را برای اجرای با کیفیت بازی‌ها داشته باشد.
                <br />
                <h2 style={{ fontFamily: 'IRANSans-Bold', fontSize: '18px', marginTop: 15 }}>کارت گرافیک  ROG STRIX </h2>
                <br />
                برای گیمرها و کسانی که از کامپیوتر شخصی برای کار های گرافیکی استفاده میکنند ‌کارت گرافیک بیشترین اهمیت را در میان دیگر قطعات دارد. <a href="https://rogstrix.com/Subproduct/182"> کارت گرافیک </a>قطعه‌ای است که زیبایی‌های بصری بازی‌ را به شما نشان می‌دهد. هر چه کارت حجم بالاتری داشته باشد معمولاً عملکرد بهتری دارد . شما میتوانید در فروشگاه ما تمامی گرافیک های تولید شده توسط ASUS  یا بقیه برند ها را خریداری کنید.
                <br />
                <h2 style={{ fontFamily: 'IRANSans-Bold', fontSize: '18px', marginTop: 15 }}>مادربرد ROG STRIX</h2>
                <br />
                مادربرد یکی دیگر از قطعات مهم است  که همۀ اجزای سازندۀ رایانه شما را به هم متصل می کند و امکان برقراری ارتباط میان تمام سخت ‌افزارهای مختلف را فراهم می‌کند. نوع مادربرد مورد نظر شما تا حد زیادی به پردازنده‌ آن بستگی دارد. ویژگی‌هایی همچون قابلیت اورکلاک CPU و نورپردازی، فاکتورهایی اند که باید هنگام خریدن مادربرد rog در نظر داشته باشید.
                <br />
                <h2 style={{ fontFamily: 'IRANSans-Bold', fontSize: '18px', marginTop: 15 }}>پاور ROG STRIX</h2>
                <br />
                هیچوقت یک پاور یا PSU ضعیف نخرید، زیرا یک پاور ارزان به زودی خراب می شود و به سایر قطعات نیز آسیب می‌زند. همیشه پاوری را در نظر بگیرید که از میزان وات سیستم گیمینگ شما ظرفیت بالاتری داشته باشد و بعد از انتخاب آن، گواهینامه 80Plus بگیرید.
                <br />
                <h2 style={{ fontFamily: 'IRANSans-Bold', fontSize: "18px", marginTop: 15 }}>لوازم جانبی ROG STRIX</h2>
                <br />
                اگر گیمر حرفه‌‌ ای می باشید و یا فقط برای خودتان بازی می‌کنید، شما نمی‌توانید بر روی یک صندلی معمولی بشینید و یا تجهیزات خودتان را بر روی یک میز نامناسبی بگذارید موس، کیبورد و یا دسته بازی بی کیفیت شما را به مرور خسته می‌کند. به همین دلیل باید لوازم جانبی مناسبی را تهیه کنید.
                <br />
                <h3 style={{ fontFamily: 'IRANSans-Bold', fontSize: "16px", marginTop: 15 }}>صندلی گیمینگ</h3>
                <br />
                شاید صندلی از آخرین مواردی باشد که به آن توجه می‌کنید، اما اگر ساعت ‌های طولانی صرف بازی می‌کنید، در فکر تهیه کردن آن باشید. طراحی ارگونومی  صندلی های گیمینگ وضعیت بدن شما را بهبود می بخشد.
                <br />
                <h3 style={{ fontFamily: 'IRANSans-Bold', fontSize: "16px", marginTop: 15 }}>اسپیکر گیمینگ</h3>
                <br />
                اغلب  جلوه‌های بصری بازی روی مانیتور، بر صدا اولویت دارند. با این حال، هر چه اسپیکر با کیفیت‌تر باشد، صدای واقعی‌تر و تجربه لذت‌بخش‌تری خواهید داشت. اسپیکر های STRIX  ROG  با کیفیت بالای خود این حس واقعی را به شما منتقل می کند.
                <br />
                <h3 style={{ fontFamily: 'IRANSans-Bold', fontSize: 8, marginTop: 15 }}>هدست گیمینگ:</h3>
                <br />
                وقتی صحبت از بازی ‌های FPS  و یا اکشن می‌شود، داشتن صدایی دقیق و شفاف برای عملکرد شما ضروری است. در این صورت، هدست با کیفیت بالا برای برقراری ارتباط موثر و واضح در مسابقات رقابتی خواهد بود.
                <br />
                <h3 style={{ fontFamily: 'IRANSans-Bold', fontSize: "16px", marginTop: 15 }}>مودم گیمینگ:</h3>
                <br />
                اگر بازی‌های آنلاین زیادی انجام می‌دهید نیاز به اینترنت دارید. بنابراین خرید مودم گیمینگ با کیفیت از ضروریات کار شماست. یک مودم بی‌کیفیت، بازی شما را مکرر با تاخیر مواجه می‌کند، زیرا یک مودم بی‌کیفیت نمی‌تواند سیگنال‌ها را به سرعت ترجمه کند تا به دستگاهی که با آن بازی می‌کنید ارسال کند. در هنگام خرید مودم باید به دو نکته توجه کنید:
                *•	حداکثر سرعت مودم
                *•	تعداد کانال‌های مودم
                <br />
                <h3 style={{ fontFamily: 'IRANSans-Bold', fontSize: "16px", marginTop: 15 }}>دسته بازی:</h3>
                <br />
                یک دسته گیمینگ از طریق USB یا به صورت بلوتوث بازی شما را به سطح بالایی ارتقا می‌دهد. یک دسته گیمینگ عالی مجهز به دکمه‌های چند منظوره و با طراحی ارگونومیک و وزن مناسب، محبوبیت زیادی در بین گیمرها خواهد داشت. همچنین دسته بازی با نمایشگرهای بازخورد لرزشی دوگانه به شما امکان می‌دهد بازی را به معنای واقعی کلمه در دستان خود احساس کنید. علاوه بر این، اتصال بی‌سیم دسته بازی به شما امکان می‌دهد سیم‌ها را به طور کامل قطع کنید تا بتوانید با حداکثر راحتی بازی کنید.
                <br />
                <h3 style={{ fontFamily: 'IRANSans-Bold', fontSize: "16px", marginTop: 15 }}>کیبورد گیمینگ</h3>
                <br />
                کیبورد گیمینگ برای پیروزی در بازی‌ها نقشی اساسی دارد. کیبوردهای گیمینگ به دلیل ویژگی‌های بازی محور و زیبایی شان در میان گیمرها بیشتر جلب توجه می کنند. همچنین تعدادی از کیبوردهای ارگونومیک با ظاهری زیبا و شگفت‌انگیز برای راحتی، سهولت و همچنین داشتن کارایی بالا طراحی شده‌اند.
                <br />
                <h3 style={{ fontFamily: 'IRANSans-Bold', fontSize: "16px", marginTop: 15 }}>موس گیمینگ</h3>
                <br />
                معمولا انتخاب موس‌های گیمینگ بستگی به ژانر بازی دارند زیرا هر مدل برای برخی از بازی‌ها کاربرد بیشتری دارد. در بازی‌های MMO و MOBA، گیمر های حرفه‌ای‌ها معمولا از  موسی که ماکروهای اضافی دارد را برای سهولت و کارایی بیشتر استفاده می کنند. برای مثال مدل‌هایی مانند Corsair Scimitar و Razer Naga Hex به همین دلیل محبوب هستند.
                <br />
                <h3 style={{ fontFamily: 'IRANSans-Bold', fontSize: "16px", marginTop: 15 }}>فرمان بازی</h3>

                <br />
                بازی با فرمان گیمینگ با  دامنه حرکتی بهتر و دقیق‌تری که دارد باعث می شود در بازی غرق شوید و  بازی واقعی تر و به بازی ‌ نزدیک‌تر می‌شوید. با استفاده از فرمان گیمینگ ، بازیکنان کنترل بیشتری بر بازی دارند. بازی از طریق فرمان بازی به شما امکان می‌دهد به طور مستقیم‌  و سریع واکنش نشان دهید و بسیار کمتر از یک دسته بازی، حواس‌تان پرت شود.
                وب کم گیمینگ:
                حالات چهره، زبان بدن و احساسات شما برای اینکه بیننده از گیم استریم لذت ببرد، مهم هستند بنابراین وب کم مهم است زیرا به بینندگان گیم استریم اجازه می‌دهد شما را ببینند. پس برای گیم استریم نیاز به یک وب‌کم گیمینگ مناسب دارید تا بتوانید با کیفیت بسیار بالا چهره شما را به بینندگان نشان دهد. برای این کار حتما نیاز نیست وب کم گران قیمت بخرید، دستگاهی که بتواند با کیفیت 1080p  تصاویر را ضبط کند برای شما مناسب است.
                <br />
                <h3 style={{ fontFamily: 'IRANSans-Bold', fontSize: "16px", marginTop: 15 }}>مولتی برند:</h3>

                <br />
                با توجه به اینکه  تخصص اصلی وب سایت  Rog strix  اسمبل  و کانفیگ سیستم های حرفه ای کامپیوتری می باشد و در حال حاضر تمام سخت افزارهای کامپیوتری توسط asus تولید نمی شوند وب سایت rog strix بدین منظور و برای احترام به سلایق مختلف کاربران عزیز تمامی  محصولات سخت افزاری  اصلی سایر برندهارا تحت پوشش  قرار داده است، لازم بذکر است تمامی قطعات ارائه شده سایر برندها در وب سایت تمامی تاییده ها و استاندارد های حرفه ای سخت افزاری را توسط تیم حرفه ای وب سایت rog strix دریافت کرده اند تا کاربران بتوانند تجربه ای عالی همانند محصولات rog strix برند asus را در مورد سایر برندها داشته باشند.
                <br />
                <button style={{ fontFamily: 'IRANSans-Bold', fontSize: 16, backgroundColor: 'transparent', border: 'none', color: '#f6303f' }} onClick={() => setShowMore(!showMore)}>بستن</button>

              </p>
              :

              <p style={{ margin: 20, lineHeight: 2, textAlign: 'right', fontFamily: 'IRANSans', fontSize: 14 }}>
                <h1 style={{ fontFamily: 'IRANSans-Bold', fontSize: '20px' }}>ROG STRIX</h1>
                <br />
                به طور کلی ریشه اصلی برند Rog Strix در شرکت حرفه ای <a href="https://www.asus.com/"> ایسوس </a>است، اما در حال حاضر در کشور ما به دلیل شرایط اقتصادی و تحریم های به وجود آمده، این برند معتبر نمی تواند نمایندگی اصلی خود را در این کشور داشته باشد.
                <br />
                ما قصد داریم به عنوان یک مولتی برند محصولات کامپیوتری گسترده ای را به بازار عرضه کنیم.
                <br />
                همان گونه که در مطالب فوق ذکر شد ما مرکز فروش برند Rog Strix در ایران هستیم و تمامی محصولات این برند محبوب را در داخل کشور پوشش می دهیم، همچنین ما برای مشتریان این برند تمامی محصولات را با بیمه نامه معتبر و خدمات پس از فروش ویژه و گسترده عرضه خواهیم کرد. ما به عنوان یک مولتی برند، در کنار
                Rog Strix دیگر محصولات سخت افزاری کامپیوتری را به مشتریان خود ارائه می دهیم.
                <br />
                Rog یا همان republic of gamers نام تجاری است که شرکت ایسوس Asus از سال 2006 تا کنون از آن استفاده می کند و مجموعه ای از سخت افزارها از جمله لپتاپ، کامپیوتر های شخصی قطعاتی همچون (مادربرد، گرافیک و ...) و همچنین لوازم جانبی مانند موس ،کیبورد و .... را در برمیگیرد. rog در سال های پس از شروع به کار خود توانسته محبوبیت و مشروعیت بسیار زیادی برای خود پیدا کند و به یکی از قطب های اصلی دنیای گیمینگ تبدیل شود.
                <br />
                ROG و Strix به مدت چندین سال متوالی به صورت جداگانه بر روی بخش های مختلف سیستم های خود کار می کردند، همانطور که گفته شد ROG به صورت تخصصی بر روی قطعاتی همچون مادربرد، کارت گرافیک و لوازم جانبی از جمله کیس گیمینگ کار و Strix به صورت تخصصی بر روی فن ها و سیستم خنک کننده محصولات کار می کرد، این دو برند پس از مدت کوتاهی باهم ترکیب و به صورت تیمی بر روی محصولات کار خود را شروع کردند.
                <br />
                در ادامه شما را با محصولات و انواع مختلف محصولات تولیدی این برند آشنا خواهیم کرد.
                <br />
                <h2 style={{ fontFamily: 'IRANSans-Bold', fontSize: '18px', marginTop: 15 }}>لپ تاپ های ROG Strix</h2>
                <br />
                همان طور که مشخص است در دنیای مدرن امروز گیم بسیار محبوب و سرگرم کننده است، همین امر سبب شده تا دنیای گیمینگ از اهمیت و جایگاه بسیار بالایی در بین طرفداران خود پیدا کند و در کانون توجهات دنبال کنندگان بازی های گیمی قرار بگیرد. معمولا گیمرها برای تجربه لذت بیشتری از بازی و گیم مورد علاقه خود، همواره به دنبال تهیه لپ تاپ های گیمینگ حرفه ای و به روز دنیا هستند.
                <br />
                لپ تاپ های سری Strix  Rog توسط شرکت حرفه ای ایسوس طراحی و تولید می شوند و هدف از طراحی و تولید این دسته از لپ تاپ ها این است که گیمر ها به راحتی بتوانند بازی های روز دنیا را با بهترین کیفیت تجربه کنند این نوع از لپ تاپ ها جز بهترین مدل های لپ تاپ مخصوص بازی موجود در بازار است. این سری از لپ تاپ ها شامل  Zephyrus، G، Flow، Scar  و … است.
                <br />
                شرکت حرفه ای ایسوس همواره در تلاش است تا با تولید و ارائه لپ تاپ های خود تعادل خوبی میان کیفیت و قیمت در دنیا برقرار کند. اگر شما جزو آن دسته گیمر هایی هستند که علاوه بر کانفیگ، نمایشگر و طراحی ظاهری لپ تاپ برای شما از اهمیت بسیار بالایی برخوردار است، داشتن یکی از مدل های جذاب و محبوب از سری لپ تاپ های راگ ایسوس به طور قطع تمامی نیاز های شما را برطرف خواهد ساخت، این نکته را بیاد داشته باشید که ما در Rog Strix تمامی مدل ها را برای شما فراهم کردیم.
                <br />

                <button style={{ fontFamily: 'IRANSans-Bold', fontSize: 16, backgroundColor: 'transparent', border: 'none', color: '#f6303f' }} onClick={() => setShowMore(!showMore)}>ادامه مطلب ... </button>
              </p>
          }
        </div>
      </Container>

      <RedBox />
      <FooterMain />
    </>
  );
};
export default MainPage;
