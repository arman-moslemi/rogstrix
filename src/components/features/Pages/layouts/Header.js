import react,{useContext,useState} from "react";
import RedLogo from '../../../assets/img/redLogo.png';
import { FaSearch , FaUser ,FaShoppingBasket,FaTable,FaTimes} from 'react-icons/fa';
import { Container ,Col, Button,ToggleButton} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../../../context/auth-context";
import MenuUser from "../../../assets/icons/userMenu";
import CartMenu from "../../../assets/icons/cartMenu";
import MenuSearch from "../../../assets/icons/menuSearch";
import Dashboard from "../../../assets/icons/dashboard";
import useDarkMode from 'use-dark-mode';

const Header = () => {
  const darkMode = useDarkMode(false);

  const history = useHistory();
  const { isLoggedIn, token } = useContext(AuthContext);
  const [showSearch, setshowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const onClick = () =>{
    setshowSearch(!showSearch);
  };
const  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      history.push("/ProductsSearch/"+search)    }
  }
  return (
   <Container fluid className="pad0">
    <div className="Header">
      <div className="d-flex">
      <div>
        <img src={RedLogo} onClick={()=>history.push("/")} className="hedearRedLogo"/>
       </div>
       {/* <div className="margin-right-60">
        <label class="switch">
         <input type="checkbox"/>
            <span class="slider round"></span>
       </label>
       </div> */}
        <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <ToggleButton checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
      </div>
      <div className="d-flex">
        <button className="headerBtn" onClick={()=>onClick()}>
        <MenuSearch/>
        </button>
        {!isLoggedIn?
        <button onClick={()=>history.push("/Login")} className="headerBtn">
          <MenuUser style={{marginLeft:10}}/>
        ثبت نام / ورود

        </button>
        :
        <button onClick={()=>history.push("/EditInformation/"+token)} className="headerBtn">
          <MenuUser style={{marginLeft:10}} />
کاربر
        </button>        }
        <button  onClick={()=>history.push("/CartStep1/"+token)} className="headerBtn" >
        <CartMenu style={{marginLeft:10}}/>
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
            <div className="desktopSerachBox">
            <FaSearch onClick={()=>history.push("/ProductsSearch/"+search)}/>
            <input className="" onKeyDown={_handleKeyDown} onChange={(e)=>setSearch(e.target.value)} placeholder="محصول مورد نظر را جستجو کنید..."/>
           </div>
     </div>
     :
     null
     }
     
     <div className="responsiveHeader">
       <div className="d-flex align-items-center borderBottomResponsive">
       <div className="responsiveLanguage">
       <button className="headerBtn">
       <Dashboard/>
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
        <MenuUser style={{marginLeft:10}} />

        </button>
        <button className="headerBtn" >
        <CartMenu  style={{marginLeft:10}}/>

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
