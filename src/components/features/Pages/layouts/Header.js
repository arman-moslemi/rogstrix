import react from "react";
import RedLogo from '../../../assets/img/redLogo.png';
import { FaSearch , FaUser ,FaShoppingBasket} from 'react-icons/fa';
import { Container ,Col, Button} from "react-bootstrap";
const Header = () => {
  return (
   <Container fluid className="pad0">
    <div className="Header">
      <div className="d-flex">
      <div>
        <img src={RedLogo} className="hedearRedLogo"/>   
       </div>
       <div className="margin-right-60">
        <label class="switch">
         <input type="checkbox"/>
            <span class="slider round"></span>
       </label>
       </div>
      </div>
      <div className="d-flex">
        <button className="headerBtn">
        <FaSearch size={25}/>    
        </button>
        <button className="headerBtn">
        <FaUser style={{marginLeft:10}} size={25}/>
        ثبت نام / ورود
        </button>
        <button className="headerBtn" >
        <FaShoppingBasket size={25} style={{marginLeft:10}}/>
        سبد خرید
        </button>
        <select name="Lang" id="language">
            <option value="persian">Fa</option>
            <option value="english">En</option>

        </select>
      </div>
     
      
     </div>
   </Container>
     
   
  );
}; 
export default Header;
