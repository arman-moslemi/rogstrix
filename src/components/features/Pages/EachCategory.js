import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import { NavLink } from "react-router-dom";
import { Container ,Col, Button,Row} from "react-bootstrap";
import CardBox from '../Pages/EachCategoryComponents/CardBox';
import Sorts from './EachCategoryComponents/Sorts';
import CategoryList from "./EachCategoryComponents/CategoryList";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import PaginationCustom from "./layouts/Pagination";
import { useTranslation } from 'react-i18next';
import BestSellingSliderCard from "./MainPageComponents/BestSellingSliderCard";
import parse  from 'html-react-parser';

const EachCategory = () => {
  const [data,setData]=useState([])
  const params = useParams().id;
  const history = useHistory();
const [cat,setCat]=useState(params);
const [language,setLanguage]=useState();
const {t,i18n} = useTranslation();
const [page,setPage]=useState(1)
const [count,setCount]=useState(0)
console.log(params)

  const mainSlider=async()=>{
    const axios = require("axios");
    console.log(i18n.language)

    const lang=await localStorage.getItem("lang")
    i18n.changeLanguage(lang)
    console.log(888)
      axios

          .post(apiUrl + "MainProductByName",{
            MainGroupName:cat,
            page:page

          },{ headers: {
            lang: i18n.language
          }})
      .then(function (response) {
        if (response.data.result == "true") {

          setData(response.data.Data)
          console.log(response.data.Data)
          setCount(parseInt(parseInt(response.data.Count)/15)+1)

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
  }, [cat,language,page]);
  return (
    <div className="EachCategoryBody">
      <Header setLanguage={setLanguage}/>
<Menu/>


      <Container className="EachCategoryContainer" fluid>
        <div className="breadCrumbs">
          <ul>
            <li>
              <a>
              {t("سایت راگ استریکس")}
              </a>
            </li>
            /
            {
              data?
            <li>
              <Link onClick={()=>history.push("/EachCategory/"+params)}>
{data[0]?.MainTitle}              </Link>
            </li>
:
null
}

          </ul>
        </div>

       <div className="EachCategoryRow marginTop3 mb-4">
       <div className="EachCategoryCol1 categoryResNone">
          {/* <CategoryList cat={setCat} className=""/> */}
          </div>
          <div className="EachCategoryCol2">
          <Sorts data={data} setData={setData}/>
          <div className="categoryDesNone">
          {/* <CategoryList cat={setCat} /> */}
          </div>
           <div className="whiteBoxCategory">
            {
              data[0]?
              <p className="BoxTitle">
              همه {data[0][0]?.MainTitle}ها
            </p>
              :
              null
            }
          {/* <p className="BoxTitle">
            همه {data[0]?.MainTitle}ها
          </p> */}

          <div className="CardBoxDiv margin-top-9">
            {
              data.map((item)=>{
return(

              // <CardBox data={item} className="test" />
              <Col md={3} className="marginTop15">

              <BestSellingSliderCard data={item[0]}/>
</Col>
)
              })
            }
            {/* <Col md={4} className="colmar-top-3">
            <CardBox/>
            </Col> */}

          </div>
      
          {
                count!=0?
                <div className="paginationBox ta-center">
                <PaginationCustom setPage={setPage} count={count}/>
                </div>
                :
                null
              }
              {
                data[0]?
          <div style={{marginTop:20}}>
             { data[0][0]?.MainDescription?
              parse(data[0][0]?.MainDescription):
              null}
          </div>
          :
          null}
        </div>
          </div>
       </div>
      </Container>
      <FooterMain />
    </div>
  );
};
export default EachCategory;
