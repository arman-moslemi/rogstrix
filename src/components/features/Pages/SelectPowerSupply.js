import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Menu from "./layouts/Menu";
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
import { FaTimes , FaSearch ,FaChevronDown  } from 'react-icons/fa';
import Sorts from './EachCategoryComponents/Sorts';
import RangeSlider from './ProductsComponents/RangeSlider';
import Checkbox from '@mui/material/Checkbox';
import PageTitle from "../../assets/img/pageTitle.png"
import MadeSystem from "../../assets/img/madeSystem.png";
import BestSellingProductsSlider from './ProductsComponents/BestSellingProductsSlider';
import PaginationCustom from "./layouts/Pagination";
import React,{useState,useEffect,useContext} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";

const SelectPowerSupply = () => {
  const [data,setData]=useState([])
  const [data2,setData2]=useState([])
  const [product,setProduct]=useState([])
  const [filter,setFilter]=useState([])
  const [compare,setCompare]=useState([])
  const [brand,setBrand]=useState([])
  const params = useParams().id;
  const [from,setFrom]=useState(0)
  const [to,setTo]=useState(0)
  const [head,setHead]=useState("")
  const history = useHistory();
console.log(params)
const { isLoggedIn, token } = useContext(AuthContext);
const addCompare=(type,id)=>{
  if(compare.length==3){
    alert("مقایسه بیشتر از ۴ مورد نمیشود")
  }
  else
{  if(type==1){
    setCompare([...compare,{id:id}])
  }
  else{
    setCompare( compare.filter((el)=>el.id!=id));
  
  }}

}
const goCompare=()=>{
  if(compare.length==0){
    alert("مقایسه بیشتر از ۴ مورد نمیشود")
  }
  else{

    localStorage.setItem("compare","")
    var ss=""
    compare.map((item)=>{
  ss+=(item.id+"T")
    })
  //  localStorage.setItem("compare",localStorage.getItem("compare")+"T"+id) ;
    history.push("/CompareSupplyProduct/"+ss)
  }
}
const ProductSave=(id)=>{
  var Guest=localStorage.getItem("guest")

  const axios = require("axios");

  axios
      // .post(apiUrl + "AddCustomerProductSave",{
      .post(apiUrl + "CreateSystemCustomer",{
        ProductID:id,
        CustomerID:token.length<10 && token?token:0,
        GuestID:token.length<10 && token?0:Guest?Guest:0
      })
  .then(function (response) {
    if (response.data.result == "true") {
alert("با موفقیت ذخیره شد")
      console.log(222)
      console.log(response.data.Data2)
      // response.data.Data2?
if(!Guest || Guest==0){

localStorage.setItem("guest",response.data.Data2?response.data.Data2:0)
}

      
      history.push("/AssembleSecond")
  }
  else if(response.data.result == "duplicate"){
    console.log(888)
    alert(response.data.Data)
    history.push("/AssembleSecond")

  }})
  .catch(function (error) {
    console.log(error);
  });
}
  const mainSlider=()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "GroupProduct",{
            GroupID:params
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setData(response.data.Data)
          console.log(55)
          console.log(response.data.Data)
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
          console.log(44)
          console.log(response.data.Data)

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
          console.log(44)
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
    <div className="EachCategoryBody">
      <Header />
    <Menu/>

   
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
            {
                         data[0]?
                <p>
                انتخاب {data[0][0]?.Title}                </p>
                :
                null}
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
                        {/* <Button className="filterBtn">
                            حذف
                        </Button> */}
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
            {
              brand?.map((item)=>{
                return(
          <div className="d-flex checkBoxDiv">
          <Checkbox

        
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
      />

              <label>
                  {item.BrandName}
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
            <Button onClick={()=>setCost()}className="rangeBtn">
                اعمال محدوده قیمت
            </Button>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
          </div>
         {
           product.map((item)=>{
             return(

          <div className="whiteBoxProduct">
          <Accordion allowZeroExpanded ={true}>
            <AccordionItem className="productAccardion">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item[0].MainTitle}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

      <div className="pad2">
      <div className="scrollBar">
          {/* <div className="d-flex checkBoxDiv">
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
          </div> */}
          {
            item.map((item2)=>{
              return(

          <div className="d-flex checkBoxDiv">
               <Checkbox

        // defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
        value={item2.SubGroupPropertyID}
        onChange={(e)=>e.target.checked? proFilter(1,e.target.value,item2)
          :
        
         proFilter(2,e.target.value,item2)
        
        
          
         }
      />
              <label>
              {item2.Title}
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
          <Col md={9}>
          
          <div className="productsWhiteBox">
          <div className="whiteBoxHeader">
              <div className="borderDashedBottom">
                <div>
                  <p>
                  شناسایی {data.length} قطعه 
                  </p>
                </div>
                <div>
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
                         نمایش همه قطعات
                      </label>
                  </div>
                </div>
                <div className="d-flex">
                <div >
          <FaSearch color={'#a0a0a0'} size={20}/>
        </div>
      <div>
      <input
          className="searchInput"
          type={'text'}
          placeholder={"جستجو در میان منبع تغذیه..."}
        
         
        />
      </div>
        
                </div>
              </div>
              </div>
           <div className="selectRow">
             <div>
               <Button className="selectAll marginLeft60">
                 انتخاب همه
               </Button>
             </div>
             <div>
               <Button className="selectAll marginLeft60">
                 حذف انتخاب همه
               </Button>
             </div>
             <div>
               <Button onClick={()=>goCompare()} className="compareBtn">
                 مقایسه انتخاب شده ها (حداکثر 4 مورد)
               </Button>
             </div>
           </div>
          <div className="tableBox">
          <div className="d-flex justify-content-between" id="w95">
                <div className="ta-center" >
                <p className="tableTitle">
                <FaChevronDown className="marginLeftt20" color={'#f6303f'}/>
                  مقایسه
                  
                </p>
                </div>
                <div className="ta-center" >
                <p className="tableTitle">
                <FaChevronDown className="marginLeftt20" color={'#f6303f'}/>
                  عکس
                  
                </p>
                </div>
                <div className="ta-center">
                <p className="tableTitle">
                <FaChevronDown className="marginLeftt20" color={'#f6303f'}/>
                 
نام                </p>
</div>
{/* <div className="ta-center">
<p className="tableTitle">
<FaChevronDown className="marginLeftt20" color={'#f6303f'}/>
                 
                  رده انرژی
                </p>
</div> */}
{/* <div className="ta-center">
<p className="tableTitle">
<FaChevronDown className="marginLeftt20" color={'#f6303f'}/>
                 
                 مصرف(وات)
                </p>
</div> */}
{/* <div className="ta-center">
<p className="tableTitle">
<FaChevronDown className="marginLeftt20" color={'#f6303f'}/>
                 
                 ماژولار
                </p>
</div> */}
<div className="ta-center">
<p className="tableTitle">
<FaChevronDown className="marginLeftt20" color={'#f6303f'}/>
                 
                  قیمت (تومان)
                </p>
</div>
<div className="ta-center">
<p className="tableTitle">
<FaChevronDown className="marginLeftt20" color={'#f6303f'}/>
                 
                  امتیاز
                </p>
</div>
<div className="ta-center">
<p className="tableTitle">
{/* <FaChevronDown className="marginLeftt20" color={'#f6303f'}/> */}
                 
                </p>
</div>
           </div>
           <hr className="mt-0 mb-0"/>
           {
                  data?.map((item)=>{
return(
           <div className="borderBottom d-flex justify-content-between align-items-center pr-2">
             <div>
               <Checkbox    
                // defaultChecked
        sx={{
          color: '#f6303f',
          '&.Mui-checked': {
            color: '#f6303f',
          },
        }}
         onChange={(e)=>e.target.checked? addCompare(1,e.target.value)
          :
        
          addCompare(2,e.target.value)
        
        
          
         }
         value={item[0].ProductID}

        />
             </div>
                <div className="rowImg">
                  <img src={apiAsset+item[0].Pic1}/>
                </div>
                <div>
                  <p className="productNameRow">
{item[0].ProductName}
                  </p>
                </div>
                {/* <div>
                  <p className="pNameRow">
                    Atx
                  </p>
                </div>
                <div>
                  <p className="pNameRow">
                    Atx
                  </p>
                </div>
                <div>
                  <p className="pNameRow">
                    500 W
                  </p>
                </div>
                <div>
                  <p className="pNameRow">
                    بله
                  </p>
                </div> */}
                <div>
                  

                  <p className="pNameRow">
{parseInt(item[0]?.Cost)-parseInt(item[0]?.SpecialCost)}                  </p>
                   
                </div>
                <div>
                  <p className="pNameRow">
                   
                   (123)
                   <p className="redColor">5</p>
                  </p>
                </div>
                <div>
                  <Button onClick={()=>ProductSave(item[0].ProductID)} className="addRowBtn">
                    افزودن
                  </Button>
                </div>
          </div>
                  )})}
          </div>
          <div className="paginationBox ta-center">
          <PaginationCustom/>
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
export default SelectPowerSupply;
