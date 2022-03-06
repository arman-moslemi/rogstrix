import react,{useContext,useState} from "react";
import RedLogo from '../../../assets/img/redLogo.png';
import { FaSearch , FaUser ,FaShoppingBasket,FaTable,FaTimes} from 'react-icons/fa';
import { Container ,Col, Button} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../../../context/auth-context";

const Header = () => {
  const history = useHistory();
  const { isLoggedIn, token } = useContext(AuthContext);
  const [showSearch, setshowSearch] = useState(false);
  const onClick = () =>{
    setshowSearch(!showSearch);
  };
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
        <button className="headerBtn" onClick={()=>onClick()}>
        <FaSearch size={25}/>
        </button>
        {!isLoggedIn?
        <button onClick={()=>history.push("/Login")} className="headerBtn">
          <FaUser style={{marginLeft:10}} size={25}/>
        ثبت نام / ورود

        </button>
        :
        <button onClick={()=>history.push("/EditInformation/"+token)} className="headerBtn">
          <FaUser style={{marginLeft:10}} size={25}/>
کاربر
        </button>        }
        <button  onClick={()=>history.push("/CartStep1/"+token)} className="headerBtn" >
        <FaShoppingBasket size={25} style={{marginLeft:10}}/>
        سبد خرید
        </button>
        <select name="Lang" id="language">
            <option value="persian">Fa</option>
            <option value="english">En</option>

        </select>
      </div>


     </div>
     {
       showSearch?
       <div className="searchBoxDiv ta-center">
            <FaSearch/>
            <input className="desktopSerachBox" placeholder="محصول مورد نظر را جستجو کنید..."/>
            <FaTimes/>
     </div>
     :
     null
     }
     
     <div className="responsiveHeader">
       <div className="d-flex align-items-center borderBottomResponsive">
       <div className="responsiveLanguage">
       <button className="headerBtn">
       <FaTable color={'#a0a0a0'} fontSize={20}/>
       </button>
         </div>
         <div className="responsiveHeaderLogo">
         <img src={RedLogo} className=""/>
         </div>
         <div className="responsiveLanguage">
         <select name="Lang" id="language">
            <option value="persian">Fa</option>
            <option value="english">En</option>

        </select>
         </div>
       </div>
       <div className="row borderBottomResponsive d-flex align-items-center pdTB5">
         <Col xs={6} className="pdR0">
         <div className="d-flex searchInput mr-0 responsiveInput">
                <div >
          <FaSearch color={'#a0a0a0'}/>
        </div>
        <input
          style={{width:'100%'}}
          type={'text'}
          placeholder={"جستجو ..."}


        />

      </div>
         </Col>
         <Col xs={6} className="d-flex align-items-center">

        <button className="headerBtn">
        <FaUser style={{marginLeft:10}} size={25}/>

        </button>
        <button className="headerBtn" >
        <FaShoppingBasket size={25} style={{marginLeft:10}}/>

        </button>
        <label class="switch">
         <input type="checkbox"/>
            <span class="slider round"></span>
       </label>
         </Col>
       </div>
     </div>
   </Container>


  );
};
export default Header;
