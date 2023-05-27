import React,{useState,useEffect} from 'react'
import Header from "./layouts/Header";
import Menu from "./layouts/Menu";
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
import { FaTimes , FaSearch ,FaFilter} from 'react-icons/fa';

import RangeSlider from './ProductsComponents/RangeSlider';
import Checkbox from '@mui/material/Checkbox';
import PageTitle from "../../assets/img/pageTitle.png"
import PaginationCustom from "./layouts/Pagination";
import CompletedCards from "./CompletedSystemsComponents/CompletedCards";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import Filter from "../../assets/icons/Filter";
import { useTranslation } from 'react-i18next';





const CompletedSystems = () => {
  const {t,i18n} = useTranslation();

  const [data,setData]=useState([])
  const [data2,setData2]=useState([])
  const [property,setProperty]=useState([])
  const [filter,setFilter]=useState([])
  const [from,setFrom]=useState(0)
  const [counter,setCounter]=useState(0)
  const [to,setTo]=useState(0)
  const [title,setTitle]=useState("")
  const mainSlider=async()=>{
    const axios = require("axios");
    axios.get(apiUrl + "AllFactorSystems")
    .then(function (response) {
      if (response.data.result == "true") {

        setData(response.data.Data)
        setData2(response.data.Data)
        console.log(11)
        console.log(response.data.Data)

    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
    axios.get(apiUrl + "FilterSystem")
    .then(function (response) {
      if (response.data.result == "true") {

        setProperty(response.data.Data)
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
  var gg=[]
  var dd=[]
  const proFilter=(type,val,vv)=>{

if(type==1){
  setFilter([...filter,{id:val,title:vv.ProductName}])
  filter?.map((item)=>{
    gg.push(item)
  })
  gg.push({id:val,title:vv.ProductName})
  var ff=[]

    console.log(14563)
    console.log(val)
    console.log(gg)
    console.log(data)
    
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);

data?.map((item2,index1)=>{
  var count=0;
  item2?.map((item3,index2)=>{
gg?.map((item,index3)=>{

 

    if(item3.ProductID==item.id)
   {
     count+=1;
     if (count==gg.length){

      ff.push(item2)
    }
    
  
  }
  })
})
})

// if(ff.length!=0){


  setData(ff)
}
else{
  setFilter( filter.filter((el)=>el.id!=val));
  filter?.map((item)=>{
    gg.push(item)
  })
  gg=( gg.filter((el)=>el.id!=val));
  var ff=[]

    console.log(14563)
    console.log(val)
    console.log(gg)
    console.log(data)
    
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);

data2?.map((item2,index1)=>{
  var count=0;
  item2?.map((item3,index2)=>{
gg?.map((item,index3)=>{

 

    if(item3.ProductID==item.id)
   {
     count+=1;
     if (count==gg.length){

      ff.push(item2)
    }
    
  
  }
  })
})
})

// if(ff.length!=0){


  setData(ff)
  // mainSlider()
}



// }
if(gg.length==0)
{
mainSlider()
}
}
// useEffect(() => {
//   console.log(5555)
//   console.log(data2)
//   setData(data2);
// // alert(val)
// }, [counter]);
  useEffect(() => {
    mainSlider();
// alert(val)
  }, []);
  const search=()=>{


    console.log(14563)
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
setData([...data].filter((a) => a.SystemName.includes(title)  ))
console.log(data)

}
  const setCost=()=>{


    console.log(14563)
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
setData([...data].filter((a) => (a.Cost <= to && a.Cost>from) ))
console.log(data)

}
  const expensive=()=>{


    console.log(14563)
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
setData([...data].sort((a, b) => (a.Cost < b.Cost) ? 1 : -1))
console.log(data)

}
const viewset=()=>{


console.log(14563)
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
setData([...data].sort((a, b) => (a.TotalView < b.TotalView) ? 1 : -1))
console.log(data)

}
const cheap=()=>{



  setData([...data].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1))
console.log(data)

}
const newest=()=>{



  setData([...data].sort((a, b) => (a.SystemID < b.SystemID) ? 1 : -1))
console.log(data)

}
  return (
    <div className="EachCategoryBody">
      <Header />
<Menu/>


      <Container className="EachCategoryContainer" fluid>
        <div className="breadCrumbs">
          <ul>
            <li>
              <a>
              {t("سایت راگ استریکس")}
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
                {t("گالری سیستم های فروخته شده")}
                </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
        </div>
        <div className="row " style={{marginBottom:25}}>
          <Col md={3} className="completSystemCol1">
          <div className="redBoxFilter">
             <div className="pd2">
             <div className="row">
                  <Col md={7}>
                    <p className="filterText">
                    {t("فیلترهای اعمال شده")}
                    </p>
                  </Col>
                  <Col md={5} className="ta-left">
                        <Button onClick={()=>window.location.reload()} className="filterBtn">
                        {t("حذف")}
                        </Button>
                  </Col>

              </div>
             </div>
              <div className="filterFlex">
            <div style={{padding:'1rem'}}>
            {
                filter?.map((item)=>{
                  return(
            <div className="filterSelect">

{item.title}                      
{/* <FaTimes style={{marginRight:5}}/> */}
                  </div>

                  )
                })
              }
            </div>

              </div>

          </div>
          <div className="whiteBoxProduct">
          <Accordion allowZeroExpanded ={true}>
            <AccordionItem className="productAccardion">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {t("محدوده قیمت")}
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
            {t("تا")}
            </p>


      </Col>
      <Col md={6}>
      <p className="rangeText">
      {t("از")}
            </p>



      </Col>
      </div>
      <div className="row align-items-center">
          <Col md={6}>
          <p className="rangeText marginB0">
          {/* ۲،۳۰۰،۰۰۰ */}
          <input onChange={(e)=>setTo(e.target.value)} className="rangeInput"/>
            </p>
          </Col>
          <Col md={6}>
          <input onChange={(e)=>setFrom(e.target.value)} className="rangeInput"/>
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
            <Button onClick={()=>setCost()} className="rangeBtn">
            {t("اعمال محدوده قیمت")}
            </Button>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
          </div>

{
  property?.map((item)=>{
    return(

          <div className="whiteBoxProduct">
          <Accordion allowZeroExpanded ={true}>
            <AccordionItem className="productAccardion">
                <AccordionItemHeading>
                    <AccordionItemButton>
{item[0].Title}                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

      <div className="pad2">
      <div className="scrollBar">
        {
item.map((item2)=>{
  return(

          <div className="d-flex checkBoxDiv">
               <Checkbox

        
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
        value={item2.ProductID}

       
       onChange={(e)=>e.target.checked? proFilter(1,e.target.value,item2)
        :
      
       proFilter(2,e.target.value,item2)
       }
      />
              <label>
                  {item2.ProductName+item2?.BrandName}
              </label>
          </div>
  )
})
        }
         
      </div>
      </div>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
          </div>
    )
  })
}
        
          </Col>
          <Col md={9} className="completSystemCol2">

          <div className="productsWhiteBox">
              <div className="whiteBoxHeader headerResNone">
              <div className="borderDashedBottom">
                <div>
                  <p>
                  {t("همه سیستم های تکمیل شده")}
                  </p>
                </div>
                <div>
                <label for="sort" className="sortLabel">{t("مرتب کردن بر اساس")}</label>
  <select name="sort" id="sort">
    <option onClick={()=>viewset()}>{t("پربازدیدترین")}</option>
    <option  onClick={()=>cheap()}>{t("ارزان ترین")}</option>
    <option  onClick={()=>expensive()}>{t("گران ترین")}</option>
    <option  onClick={()=>newest()}>{t("جدید ترین")}</option>
  </select>

                </div>
                <div className="d-flex">
                <div >
          <FaSearch onClick={()=>title==""?mainSlider():search()} color={'#a0a0a0'} size={20}/>
        </div>
      <div>
      <input
          className="searchInput"
          type={'text'}
          placeholder={t("جستجو در میان سیستم ها ...")}
onChange={(e)=>setTitle(e.target.value)}

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
      <FooterMain />
    </div>
  );
};
export default CompletedSystems;
