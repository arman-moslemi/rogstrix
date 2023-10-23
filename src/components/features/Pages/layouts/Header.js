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
  const [cart, setCart] = useState(0);
  const [auto, setAuto] = useState("");
  const [defLang, setDefLang] = useState("");
  const {t,i18n} = useTranslation();
  var ss="ir";

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
    console.log(123456)
    console.log(dd)
    // setLanguage(dd)
    localStorage.setItem("lang",dd)
    window.location.reload()

  }
  const [data,setData]=useState()
  const [name,setName]=useState()

const groups=async()=>{
   const axios = require("axios");
   console.log(55)
   console.log(localStorage.getItem("lang"))
 setName(localStorage.getItem("name")?localStorage.getItem("name"):"")
ss= localStorage.getItem("lang")
const lang=await localStorage.getItem("lang")
i18n.changeLanguage(lang)
setDefLang(ss)
console.log(ss)
   // axios.get(apiUrl + "AllMainGroup")
   axios.get(apiUrl + "AllMainGroup",{ headers: {
    lang: i18n.language
  }})
   .then(function (response) {
     if (response.data.result == "true") {

      //   setData(response.data.GroupData)
        setData(response.data.GroupData)

        console.log(12238897)
        console.log(response.data.GroupData)

       // history.push("/RegisterVerify/"+mobile)

   }
   else{

   }})
   .catch(function (error) {
     console.log(error);
   });

    const storedData = JSON.parse(localStorage.getItem("userData"))?.token
    var Guest=localStorage.getItem("guest")

      axios
          .post(apiUrl + "ShoppingBasketView",{
            CustomerID:storedData?.toString().length<10 && storedData?storedData:0,
            GuestID:storedData?.toString().length<10 && storedData?0:Guest?Guest:0,              })
      .then(function (response) {
        if (response.data.result == "true") {

          setCart(response.data?.Data?.length)
      
      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });



  


 }
 const  _handleKeyDownAuto = async(e) => {
  const axios = require("axios");
    const lang=await localStorage.getItem("lang")
    i18n.changeLanguage(lang)
      axios
          .post(apiUrl + "MenuSearch",{
            Title:search
          },{ headers: {
            lang: i18n.language
          }})
      .then(function (response) {
        if (response.data.result == "true") {

          setAuto(response.data.Data)
          console.log(response.data.Data)

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });}
 useEffect(() => {
   groups();
// alert(val)
 }, []);
 ss=localStorage.getItem("lang")
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
      <div className="cardTitleW100" style={{marginLeft:100}}>

        {/* <p>سایت در حال بروز رسانی میباشد</p> */}
        <p>{t("تلفن:55580475-09198768404")}</p>
        </div>
        <button className="headerBtn" onClick={()=>onClick()}>
        <MenuSearch/>
        </button>
        {!isLoggedIn?
        <button onClick={()=>history.push("/Login")} className="headerBtn">
          <MenuUser style={{marginLeft:10}}/>
          {t("ثبت نام / ورود")}

        </button>
        :
        <button onClick={()=>history.push("/EditInformation/"+token)} className="headerBtn">
          <MenuUser style={{marginLeft:10}} />
{name}
        </button>        }
        <button  onClick={()=>history.push("/CartStep1/"+token)} className="headerBtn" style={{position:'relative'}}>
        <CartMenu style={{marginLeft:10}}/>
        {t("سبد خرید")}
        {
          cart!=0?
          <div className="badgetCart">
          
          </div>
          :
          null
        }
     
        </button>
      
        <select onChange={(e) =>{ changeLang(e.target.value)}}          defaultValue={ss}
 name="Lang" id="language">
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
            <input className="" onKeyDown={_handleKeyDown} onChange={(e)=>{setSearch(e.target.value);_handleKeyDownAuto()}} placeholder="محصول مورد نظر را جستجو کنید..."/>
            </div>
           <ul class="suggestions">
             {
               auto && search?
auto.map((item)=>{
  return(
            <li className="suggestions li" 
            onClick={()=>history.push("/singleProduct/"+item.EngProductName.replace(/%20/g, " "))}

            >
                  <p>
                    {item?.ProductName}
                  </p>
                </li>

  )
})
               :
               null
             }
           
                
</ul>
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
  
   
  <NavDropdown title={    t("کامپیوتر و قطعات")   } id="collasible-nav-dropdown">
     {data?.filter(t=>t[0].MainGroupID==1).map((item)=>{
      return(
        
  <NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
   item?.map((item2)=>{
      return(
            // <NavDropdown.Item  >
           <p onClick={()=>{history.push("/Subproduct/"+item2.EngSubTitle);window.location.reload()}}>

            {item2.SubTitle } 
           </p>
            // </NavDropdown.Item>

 )})}
          </NavDropdown>
      )})}
          </NavDropdown>

<NavDropdown title= {t(" لپتاپ و کامپیوتر آماده و قطعات")}  id="collasible-nav-dropdown">
{data?.filter(t=>t[0].MainGroupID==2).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
  <p onClick={()=>{history.push("/Subproduct/"+item2.EngSubTitle);window.location.reload()}}>

  {item2.SubTitle } 
 </p>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title={t("تبلت")} id="collasible-nav-dropdown">
{data?.filter(t=>t[0].MainGroupID==3).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
  <p onClick={()=>{history.push("/Subproduct/"+item2.EngSubTitle);window.location.reload()}}>

  {item2.SubTitle } 
 </p>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title={t("موبایل و گجت")}  id="collasible-nav-dropdown">
{data?.filter(t=>t[0].MainGroupID==4).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
  <p onClick={()=>{history.push("/Subproduct/"+item2.EngSubTitle);window.location.reload()}}>

  {item2.SubTitle } 
 </p>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title= {t("شبکه و سرور")} id="collasible-nav-dropdown">
{data?.filter(t=>t[0].MainGroupID==5).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
  <p onClick={()=>{history.push("/Subproduct/"+item2.EngSubTitle);window.location.reload()}}>

  {item2.SubTitle } 
 </p>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title={t(" ماشین های اداری و قطعات")}  id="collasible-nav-dropdown">
{data?.filter(t=>t[0].MainGroupID==6).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
  <p onClick={()=>{history.push("/Subproduct/"+item2.EngSubTitle);window.location.reload()}}>

  {item2.SubTitle } 
 </p>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title=  {t("دوربین و لوازم جانبی")} id="collasible-nav-dropdown">
{data?.filter(t=>t[0].MainGroupID==7).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
  <p onClick={()=>{history.push("/Subproduct/"+item2.EngSubTitle);window.location.reload()}}>

  {item2.SubTitle } 
 </p>

)})}
     </NavDropdown>
 )})}
     </NavDropdown>
<NavDropdown title={t("کنسول و لوارم بازی")}  id="collasible-nav-dropdown">
{data?.filter(t=>t.MainGroupID==8).map((item)=>{
 return(
   
<NavDropdown title={item[0]?.Title}  id="collasible-nav-dropdown">
{
item?.map((item2)=>{
 return(
  <p onClick={()=>{history.push("/Subproduct/"+item2.EngSubTitle);window.location.reload()}}>

  {item2.SubTitle } 
 </p>

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
         <img src={RedLogo} className="" onClick={()=>history.push("/")}/>
         </div>
         <div className="responsiveLanguage">
         <select name="Lang" 
        //  defaultValue={"en"}
        onChange={(e) =>{ changeLang(e.target.value)}}         
         defaultValue={ss}
                  id="language">
            <option value="en">En</option>
            <option value="ir">Fa</option>

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
          onKeyDown={_handleKeyDown} 
          onChange={(e)=>{setSearch(e.target.value);_handleKeyDownAuto()}}

        />
    
      </div>
      <ul class="suggestions suggestionRes">
             {
               auto && search?
auto.map((item)=>{
  return(
            <li className="suggestions li" 
            onClick={()=>history.push("/singleProduct/"+item.EngProductName.replace(/%20/g, " "))}
            >
                  <p>
                    {item?.ProductName}
                  </p>
                </li>

  )
})
               :
               null
             }
           
                
</ul>
         </Col>
         <Col xs={6} className="d-flex align-items-center">
         {!isLoggedIn?

<>

<button onClick={()=>history.push("/Login")} className="headerBtn">
<MenuUser style={{marginLeft:10}} />
</button>

</>
:
<>

<button onClick={()=>history.push("/EditInformation/"+token)} className="headerBtn">
<MenuUser style={{marginLeft:10}} />
</button>

</>
         }
        <button onClick={()=>history.push("/CartStep1/"+token)} className="headerBtn" style={{position:'relative'}} >
        <CartMenu  style={{marginLeft:10}}/>
        {
          cart!=0?
        <div className="badgetCartRes">
          
          </div>
          :
          null}
        </button>
        <label class="switch resColor">
         <input  onChange={darkMode.toggle} type="checkbox"/>
            <span class="slider round"></span>
       </label>
         </Col>
       </div>
     </div>
   </Container>


  );
};
export default Header;
