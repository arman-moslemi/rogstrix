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
import PaginationCustom from "./layouts/Pagination";
import { useTranslation } from 'react-i18next';
import CardBox from '../Pages/EachCategoryComponents/CardBox';
import CategoryList from "./EachCategoryComponents/CategoryList";
import CategoryListRog from "./EachCategoryComponents/CategoryListRog";

const Products = () => {
  const [data,setData]=useState([])
  const [data2,setData2]=useState([])
  const [product,setProduct]=useState([])
  const [filter,setFilter]=useState([])
  const [brand,setBrand]=useState([])
  const params = useParams().id;
  const [from,setFrom]=useState(0)
  const [to,setTo]=useState(0)
  const [head,setHead]=useState("")
  const {t,i18n} = useTranslation();
  const [cat,setCat]=useState(params);
  const [language,setLanguage]=useState();
  const history = useHistory();
  const [page,setPage]=useState(1)
  const [count,setCount]=useState(0)

console.log(params)
  const mainSlider=async()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "GroupProductROG",{
            GroupID:params,
            page:page

          })
      .then(function (response) {
        if (response.data.result == "true") {
          setCount(parseInt(parseInt(response.data.Count)/15)+1)

          setData(response.data.Data)
          setData2(response.data.Data)
          console.log(55)
          console.log(parseInt(parseInt(response.data.Count)/15)+1)

          console.log(response.data.Data)
setHead(response.data.Data[0][0].Title)
      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });
      axios
          .post(apiUrl + "FilterProduct",{
            GroupID:params
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setProduct(response.data.Data)
  

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });
      axios
          .get(apiUrl + "AllBrand")
      .then(function (response) {
        if (response.data.result == "true") {

          setBrand(response.data.Data)
        

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });



  }

  const setcategory=(id)=>{
    const axios = require("axios");

    axios.post(apiUrl + "LastRogMainProduct ",{MainGroupID:id})
    .then(function (response) {
      if (response.data.result == "true") {

        setData(response.data.Data)
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
  const setCost=()=>{


    console.log(14563)
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
setData([...data].filter((a) => (a.Cost <= to && a.Cost>from) ))
console.log(data)

}
var gg=[]
  const proFilter=(type,val,vv)=>{

if(type==1){
  setFilter([...filter,{id:val,title:vv.Title}])
  gg.push({id:val,title:vv.SubProperty})
  var ff=[]

    console.log(14563)
    console.log(val)
    console.log(gg)
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
data?.map((item2,index1)=>{
  var count=0;
  item2?.map((item3,index2)=>{
gg?.map((item,index3)=>{

 

    if(item3.SubGroupPropertyID==item.id)
   {
     count+=1;
     if (count==gg.length){

      ff.push(item2)
    }
    
  
  }
  })
})
})
console.log(ff)
// if(ff.length!=0){

  setData(ff)
}
else{
  setFilter( filter.filter((el)=>el.id!=vv.SubGroupPropertyID));
  gg=gg.filter((el)=>el.id!=vv.SubGroupPropertyID);
  var ff=[]

    console.log(14563)
    console.log(val)
    console.log(gg)
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
data2?.map((item2,index1)=>{
  var count=0;
  item2?.map((item3,index2)=>{
gg?.map((item,index3)=>{

 

    if(item3.SubGroupPropertyID==item.id)
   {
     count+=1;
     if (count==gg.length){

      ff.push(item2)
    }
    
  
  }
  })
})
})
console.log(ff)
// if(ff.length!=0){

  setData(ff)

}



// }
if(gg.length==0)
{
mainSlider()
}
}
  useEffect(() => {
    mainSlider();
// alert(val)
  }, [head]);
  return (
//     <div className="EachCategoryBody">
//       <Header />
// <Menu/>


//       <Container className="EachCategoryContainer" fluid>
//         <div className="breadCrumbs">
//           <ul>
//             <li>
//               <a>
//               {t("سایت راگ استریکس")}
//               </a>
//             </li>
//             /
//             <li>
//               <a>
// {data[0]?.Title}              </a>
//             </li>
           
//           </ul>
//         </div>
//         <div className="row " style={{marginBottom:25}}>
//           <Col md={3}>
//           <div className="redBoxFilter">
//              <div className="pd2">
//              <div className="row">
//                   <Col md={7}>
//                     <p className="filterText">
//                     {t("فیلترهای اعمال شده")}
//                     </p>
//                   </Col>
//                   <Col md={5} className="ta-left">
//                         {/* <Button className="filterBtn">
//                             حذف
//                         </Button> */}
//                   </Col>

//               </div>
//              </div>
//               <div className="filterFlex">
//             <div style={{padding:'1rem'}}>
//               {
//                 filter?.map((item)=>{
//                   return(
//             <div className="filterSelect">

// {item.title}                      
// {/* <FaTimes style={{marginRight:5}}/> */}
//                   </div>

//                   )
//                 })
//               }
           
//             </div>

//               </div>

//           </div>
//           <div className="whiteBoxProduct">
//           <Accordion allowZeroExpanded ={true}>
//             <AccordionItem className="productAccardion">
//                 <AccordionItemHeading>
//                     <AccordionItemButton>
//                     {t("برندها")}
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel>
//                <div className="pad2">
//                <div className="d-flex searchInput">
//                 <div >
//           <FaSearch color={'#a0a0a0'}/>
//         </div>
//         <input

//           type={'text'}
//           placeholder={t("نام برند را وارد کنید ...")}


//         />

//       </div>

//                </div>
//       <div className="pad2">
//       <div className="scrollBar">
//             {
//               brand?.map((item)=>{
//                 return(
//           <div className="d-flex checkBoxDiv">
//           <Checkbox

        
//         sx={{
//           color: '#f6303f',
//           '&.Mui-checked': {
//             color: '#f6303f',
//           },
//         }}
//       />

//               <label>
//                   {item.BrandName}
//               </label>
         
//           </div>
         
//          )
//         })
//       }
//       </div>
//       </div>
//                 </AccordionItemPanel>
//             </AccordionItem>

//         </Accordion>
//           </div>
//           <div className="whiteBoxProduct">
//           <Accordion allowZeroExpanded ={true}>
//             <AccordionItem className="productAccardion">
//                 <AccordionItemHeading>
//                     <AccordionItemButton>
//                     {t("محدوده قیمت")}
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel>
//                <div className="pad2">
//                 <RangeSlider/>

//                </div>
//             <div className="rangeBorder">
//             <div className="row">
//             <Col md={6}>
//             <p className="rangeText">
//             {t("از")}
//             </p>


//       </Col>
//       <Col md={6}>
//       <p className="rangeText">
//       {t("از")}
//             </p>



//       </Col>
//       </div>
//       <div className="row align-items-center">
//           <Col md={6}>
//           <p className="rangeText marginB0">
//           {/* ۲،۳۰۰،۰۰۰ */}
//           <input onChange={(e)=>setTo(e.target.value)} className="rangeInput"/>
//             </p>
//           </Col>
//           <Col md={6}>
//           <input onChange={(e)=>setFrom(e.target.value)} className="rangeInput"/>
//           </Col>
//       </div>
//       <div className="row marginTop15">
//           <Col md={6}>
//               <p className="rangeText maxFont">{t("تومان")}</p>
//           </Col>
//           <Col md={6}>
//               <p className="rangeText maxFont">{t("تومان")}</p>
//           </Col>
//       </div>
//             </div>
//             <Button onClick={()=>setCost()}className="rangeBtn">
//             {t("اعمال محدوده قیمت")}
//             </Button>
//                 </AccordionItemPanel>
//             </AccordionItem>

//         </Accordion>
//           </div>
//          {
//            product.map((item)=>{
//              return(

//           <div className="whiteBoxProduct">
//           <Accordion allowZeroExpanded ={true}>
//             <AccordionItem className="productAccardion">
//                 <AccordionItemHeading>
//                     <AccordionItemButton>
//                         {item[0].MainTitle}
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel>

//       <div className="pad2">
//       <div className="scrollBar">
//           {/* <div className="d-flex checkBoxDiv">
//                <Checkbox

//         defaultChecked
//         sx={{
//           color: '#f6303f',
//           '&.Mui-checked': {
//             color: '#f6303f',
//           },
//         }}
//       />
//               <label>
//                   همه
//               </label>
//           </div> */}
//           {
//             item.map((item2)=>{
//               return(

//           <div className="d-flex checkBoxDiv">
//                <Checkbox

//         // defaultChecked
//         sx={{
//           color: '#f6303f',
//           '&.Mui-checked': {
//             color: '#f6303f',
//           },
//         }}
//         value={item2.SubGroupPropertyID}
//         onChange={(e)=>e.target.checked? proFilter(1,e.target.value,item2)
//           :
        
//          proFilter(2,e.target.value,item2)
        
        
          
//          }
//       />
//               <label>
//               {item2.Title}
//               </label>
//           </div>
//               )
//             })
//           }
        

//       </div>
//       </div>
//                 </AccordionItemPanel>
//             </AccordionItem>

//         </Accordion>
//           </div>
//              )
//            })
//          }

        
//           </Col>
//           <Col md={9}>
//           <Sorts setData={setData} data={data}/>
//           <div className="productsWhiteBox">
//               <div className="whiteBoxHeader">
//                   <div className="dashedHrdiv">
//                       <hr className="dashedHr"/>
//                   </div>
//                   <div>
//                        {
//                          data[0]?
//                       <p className="whiteBoxTitle">

// {t("همه")} {data[0][0]?.GroupName} {t("ها")}
//                          </p>
//                          :
//                          null
//                        }
//                   </div>
//                   <div className="dashedHrdiv">
//                       <hr className="dashedHr"/>
//                   </div>
//                   {/* <div>
//                       <Button className="allProductsBtn">
//                       مشاهده همه
//                           <FaChevronLeft/>

//                           </Button>
//                   </div> */}
//               </div>
//               <div className="row">
//                 {
//                   data?.map((item)=>{
// return(


//                   <Col md={3} className="marginTop15">
//                         <BestSellingSliderCard data={item[0]}/>
//                   </Col>
// )
//                   })
//                 }
//                   {/* <Col md={3} className="marginTop15">
//                         <BestSellingSliderCard/>
//                   </Col> */}



//               </div>
//           </div>
//           {/* <div className="productsWhiteBox">
//           <div className="row margin25">
//                    <Col md={12}>
//                    <div className="">
//                         <p className="specialOfferTitle colorBlack">
//                            محصولات پرفروش
//                         </p>
//                     </div>
//                     <div className="seeAllDiv" style={{paddingLeft:50}}>
//                         <Button className="seeAll">مشاهده همه
//                         <FaChevronLeft/>
//                         </Button>
//                     </div>
//                    </Col>
//                </div>
//               <div className="myPadding">
//               <BestSellingProductsSlider/>
//               </div>
//           </div> */}
//           </Col>

//         </div>

//       </Container>
//       <RedBox/>
//       <FooterMain />
//     </div>




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
      <li>
        {/* <Link onClick={()=>history.push("/EachCategory/"+params)}>
{data[0]?.MainTitle}              </Link> */}
      </li>

    </ul>
  </div>

 <div className="EachCategoryRow marginTop3 mb-4">
 <div className="EachCategoryCol1 categoryResNone">
    {/* <CategoryList cat={setCat} className=""/> */}
    <CategoryListRog cat={setcategory} isRog={true}/>
    </div>
    <div className="EachCategoryCol2">
    <Sorts data={data} setData={setData}/>
    <div className="categoryDesNone">
    {/* <CategoryList cat={setCat} /> */}
    <CategoryListRog cat={setcategory} isRog={true}/>
    </div>
     <div className="whiteBoxCategory">
    {/* <p className="BoxTitle">
      همه {data[0]?.MainTitle}ها
    </p> */}

    <div className="CardBoxDiv margin-top-9">
      {
        data.map((item)=>{
return(

        <CardBox data={item[0]} className="test" />

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
  </div>
    </div>
 </div>
</Container>
<FooterMain />
</div>
  );
};
export default Products;
