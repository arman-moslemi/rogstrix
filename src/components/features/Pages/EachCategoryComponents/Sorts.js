
import { Container ,Col, Button,Row} from "react-bootstrap";
import SortIcon from '../../../assets/icons/sort';
import './Styles/sort.css';
const Sorts = () => {

  return (
    <div className="topWhiteBox">
    <div className="d-flex-start-start align-items-center">
     <div className="d-flex-start-start align-items-center">
       <SortIcon/>
       <p className="sortText">مرتب سازی بر اساس</p>
     </div>
     <div>
       <ul className="sortLable">
         <li>
           <button className="sortBtn">
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
           <button className="sortBtn">
             جدیدترین
             </button>
         </li>
         <li>
           <button className="sortBtn">
             ارزان ترین
             </button>
         </li>
         <li>
           <button className="sortBtn"> 
             گران ترین
             </button>
         </li>
         <li>
           <button className="sortBtn">
             سریع ترین ارسال
             </button>
         </li>
       </ul>
     </div>

    </div>
  </div>
  );
};
export default Sorts;
