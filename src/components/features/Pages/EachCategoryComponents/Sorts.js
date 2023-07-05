
import { Container ,Col, Button,Row} from "react-bootstrap";
import SortIcon from '../../../assets/icons/sort';
import './Styles/sort.css';
import React,{useState,useEffect} from 'react'

const Sorts = ({data,setData}) => {
  const expensive=()=>{


    console.log(14563)
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
setData([...data].sort((a, b) => (a[0].Cost < b[0].Cost) ? 1 : -1))
console.log(data)

}
const viewset=()=>{


console.log(14563)
//  setProduct([])
// var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
setData([...data].sort((a, b) => (a[0].TotalView < b[0].TotalView) ? 1 : -1))
console.log(data)

}
const cheap=()=>{



  setData([...data].sort((a, b) => (a[0].Cost > b[0].Cost) ? 1 : -1))
console.log(data)

}
const newest=()=>{



  setData([...data].sort((a, b) => (a[0].ProductID < b[0].ProductID) ? 1 : -1))
console.log(data)

}
  return (
    <div className="topWhiteBox mb-4">
    <div className="d-flex-start-start align-items-center">
     <div className="d-flex-start-start align-items-center">
       <SortIcon/>
       <p className="sortText">مرتب سازی بر اساس</p>
     </div>
     <div>
       <ul className="sortLable">
         <li>
           <button  onClick={()=>viewset()} className="sortBtn">
             پربازدید ترین
           </button>
         </li>
         <li>
           <button className="sortBtn">
             پرفروش ترین
             </button>
         </li>
         <li>
           <button className="sortBtn">
             محبوب ترین
             </button>
         </li>
         <li>
           <button onClick={()=>setData(data)} className="sortBtn">
             جدیدترین
             </button>
         </li>
         <li>
           <button onClick={()=>cheap()}className="sortBtn">
             ارزان ترین
             </button>
         </li>
         <li>
           <button onClick={()=>expensive()} className="sortBtn"> 
             گران ترین
             </button>
         </li>
         {/* <li>
           <button className="sortBtn">
             سریع ترین ارسال
             </button>
         </li> */}
       </ul>
     </div>

    </div>
  </div>
  );
};
export default Sorts;
