import react,{useContext,useState,useEffect} from "react";
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
import { useTranslation } from 'react-i18next';
import { Nav, Navbar, NavDropdown, NavItem,Offcanvas } from "react-bootstrap";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";

const Header = ({setLanguage}) => {
  const darkMode = useDarkMode(false);

  const history = useHistory();
  const { isLoggedIn, token } = useContext(AuthContext);
  const [showSearch, setshowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const {t,i18n} = useTranslation();

  const onClick = () =>{
    setshowSearch(!showSearch);
  };
const  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      history.push("/ProductsSearch/"+search)    }
  }
  const changeLang=async(dd)=>{
    await localStorage.setItem("lang",dd)
    i18n.changeLanguage(dd);
    setLanguage(dd)
    // window.location.reload()
  }
  const [data,setData]=useState()

const groups=()=>{
   const axios = require("axios");


   // axios.get(apiUrl + "AllMainGroup")
   axios.get(apiUrl + "GroupBrand")
   .then(function (response) {
     if (response.data.result == "true") {

      //   setData(response.data.GroupData)
        setData(response.data.Data)

        console.log(888)
        console.log(response.data.Data)

       // history.push("/RegisterVerify/"+mobile)

   }
   else{

   }})
   .catch(function (error) {
     console.log(error);
   });


 }
 useEffect(() => {
   groups();
// alert(val)
 }, []);
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
        <div className="mi">
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
        <select onChange={(e) => changeLang(e.target.value)} name="Lang" id="language">
            <option value="ir">Fa</option>
            <option value="en">En</option>

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
       <Navbar collapseOnSelect expand={false} variant="light" className="w100">
     {/* <img src={Logo}/> */}
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Navbar.Toggle style={{float:'left',border:'none'}}>X</Navbar.Toggle>
  <Nav className="myPd">
  
   
  {/* <Nav.Link href="#" className="responsiveLink mt-2">شروع بازی</Nav.Link> */}
  
   
  <NavDropdown title={"قطعات کامپیوتر" } id="collasible-nav-dropdown">
     {data?.filter(t=>t[0].MainGroupID==1).map((item)=>{
      return(
        
  <NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
   item?.map((item2)=>{
      return(
            <NavDropdown.Item >
            {item2.BrandName } 
            </NavDropdown.Item>

 )})}
          </NavDropdown>
      )})}
          </NavDropdown>

<NavDropdown title={"لبتاب" } id="collasible-nav-dropdown">
{data?.filter(t=>t.MainGroupID==2).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
       <NavDropdown.Item >
       {item2.BrandName } 
       </NavDropdown.Item>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title={"تبلت" } id="collasible-nav-dropdown">
{data?.filter(t=>t[0].MainGroupID==3).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
       <NavDropdown.Item >
       {item2.BrandName } 
       </NavDropdown.Item>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title={"موبایل و گجت" } id="collasible-nav-dropdown">
{data?.filter(t=>t.MainGroupID==4).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
       <NavDropdown.Item >
       {item2.BrandName } 
       </NavDropdown.Item>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title={"شبکه و سرور" } id="collasible-nav-dropdown">
{data?.filter(t=>t.MainGroupID==5).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
       <NavDropdown.Item >
       {item2.BrandName } 
       </NavDropdown.Item>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title={"کالای اداری" } id="collasible-nav-dropdown">
{data?.filter(t=>t.MainGroupID==6).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
       <NavDropdown.Item >
       {item2.BrandName } 
       </NavDropdown.Item>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title={"تصویربرداری" } id="collasible-nav-dropdown">
{data?.filter(t=>t.MainGroupID==7).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
       <NavDropdown.Item >
       {item2.BrandName } 
       </NavDropdown.Item>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title={"کنسول بازی" } id="collasible-nav-dropdown">
{data?.filter(t=>t.MainGroupID==8).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
       <NavDropdown.Item >
       {item2.BrandName } 
       </NavDropdown.Item>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
 
  {/* <Nav.Link onClick={()=>history.push("AboutUs")} className="responsiveLink">درباره ما</Nav.Link>
  <Nav.Link onClick={()=>history.push("Rank")} className="responsiveLink">بانک امتیازات</Nav.Link> */}
 
   

  </Nav>

</Navbar.Collapse>
</Navbar>
         </div>
         <div className="responsiveHeaderLogo">
         <img src={RedLogo} className=""/>
         </div>
         <div className="responsiveLanguage">
         <select name="Lang" defaultValue={"en"} id="language">
            <option value="ir">Fa</option>
            <option value="en">En</option>

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
