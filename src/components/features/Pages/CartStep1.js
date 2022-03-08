import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaAngleDoubleRight ,FaAngleDoubleLeft ,FaAward,FaPlus } from 'react-icons/fa';
import Img1 from "../../assets/img/img1.png";
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import React,{useState,useEffect,useContext} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { AuthContext } from "../../../context/auth-context";
import CustomizedDialogs from './layouts/AlertModal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    border: "none",
    borderRadius:5,
    boxShadow: 24,
    p: 4,
  };
const CartStep1 = () => {
    const [count,setCount]=useState(1)
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const [tran,setTran]=useState()
    const [radio,setRadio]=useState("")

    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleOpen3 = () => setOpen3(true);
    const handleClose2 = () => setOpen2(false);
    const handleClose3 = () => setOpen3(false);
    const [address1,setAddress1]=useState("")
    const [address2,setAddress2]=useState("")
    const [postalCode1,setPostalCode1]=useState("")
    const [postalCode2,setPostalCode2]=useState("")
    const [city1,setCity1]=useState(0)
    const [reg1,setReg1]=useState(0)
    const [city2,setCity2]=useState(0)
    const [reg2,setReg2]=useState(0)
    const [cities,setCity]=useState([])
   const increment = () => {
    setCount(count+1)
    console.log(count)

      }

      const   decrement = () => {
        // this.setState({
        //   count: this.state.count - 1
        // });
        if(count!=0)
        setCount(count-1)
      }
      const [data,setData]=useState([])
      const params = useParams().id;
      const history = useHistory();
    console.log(params)
      const mainSlider=()=>{
        const axios = require("axios");

          axios
              .post(apiUrl + "ShoppingBasketView",{
                CustomerID:params
              })
          .then(function (response) {
            if (response.data.result == "true") {

              setData(response.data.Data)
              console.log(response.data.Data)

          }
          else{
            console.log(response.data.result)

          }})
          .catch(function (error) {
            console.log(error);
          });



      }
      const getData=()=>{
        const axios = require("axios");


        axios.post(apiUrl + "OneCustomer",{CustomerID:params})
        .then(function (response) {
          if (response.data.result == "true") {

            //  setData(response.data.Data)
             setAddress1(response.data.Data.Address1)
             setAddress2(response.data.Data.Address2)
             console.log(response.data.Data)

            // history.push("/RegisterVerify/"+mobile)

        }
        else{
          setTitle("شماره ورودی نادرست می باشد")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(error);
        });
        axios.get(apiUrl + "AllCities")
        .then(function (response) {
          if (response.data.result == "true") {

             setCity(response.data.Data)

             console.log(response.data.Data)

            // history.push("/RegisterVerify/"+mobile)

        }
        else{
          setTitle("شماره ورودی نادرست می باشد")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(error);
        });




      }
      const AddAddress=(type)=>{
        const axios = require("axios");
if(type=="delete1"){
setAddress1("")
setPostalCode1("")
setCity1(0)
}
if(type=="delete2"){
setAddress2("")
console.log(999)
console.log(address2)
setPostalCode2("")
setCity2(0)
}
        console.log(444)

        axios.post(apiUrl + "CustomerAddress",{CustomerID:params,Address1:type=="delete1"?"":address1,Address2:type=="delete2"?"":address2,PostalCode1:type=="delete1"?"":postalCode1,PostalCode2:type=="delete2"?"":postalCode2
          ,CityID1:parseInt(city1),CityID2:parseInt(city2),RegionID1:reg1,RegionID2:reg2})
        .then(function (response) {
          if (response.data.result == "true") {
            console.log(88)

//              setData(response.data.Data)
//              console.log(response.data.Data)
// setOpen1(false)
// setOpen2(false)
            // history.push("/RegisterVerify/"+mobile)

        }
        else{
          setTitle("خطا")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(error);
        });




      }
      const Transporter=(type)=>{
        const axios = require("axios");

        console.log(444)

        axios.post(apiUrl + "GetTransporter",{CustomerID:params,Address:type})
        .then(function (response) {
          if (response.data.result == "true") {
            console.log(88)

             setTran(response.data.Data)
//              console.log(response.data.Data)
// setOpen1(false)
// setOpen2(false)
            // history.push("/RegisterVerify/"+mobile)

        }
        else{
          setTran()
          setTitle("خطا")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(error);
        });




      }
      useEffect(() => {
        mainSlider();
        getData()

    // alert(val)
      }, []);
  return (
    <div className="EachCategoryBody">
     <Header/>
    <Menu/>


      <Container className="CartContainer" fluid>
      <p className="CartTitle">
          سبد خرید
      </p>
        <div className="cartDiv">
            <div className="cartCol1 mb-4">
           <div className='whiteBoxCart'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center">

      <p className="fontWeightBold" href="#">
                   محصولات انتخاب شده
                </p>
          </div>
                 </div>
                 <hr className="grayDashed" />
            {
            data.map((item)=>{
                return(

            <div className="d-flex justify-content-between pd4 f1">
                     <div className="d-flex">
                        <img src={apiAsset+item.Pic1} className="CartProductImg"/>
                        <div>
                            <p className="CartProductName">
{item.ProductName}                            </p>
                            <div className="d-flex align-items-center">
                                <div className="CartColor" style={{backgroundColor:"#"+item.ColorID}}>

                                </div>
                                {/* <p className="CartColorP">
                                    رنگ سبز
                                </p> */}
                            </div>
                            <p className="CartColorP mt-4">
                                <FaAward/>
                                    ضمانت اصل بودن کالا
                                </p>
                        </div>
                     </div>
                     <div>
                     <div  className="d-flex ta-center pd0 d-inline-block align-items-center" style={{borderBottom:"none",marginTop:5}}>
                    <p className="CartColorP">تعداد :</p>
                    <div className="counterDiv">
              <button onClick={()=>decrement()} className="decBTN">-</button>
              <span style={{marginRight:'0'}}>{count}</span>
              <button onClick={()=>increment()} className="inBTN">+</button>
            </div>
                    </div>
                    <div className="priceRowCart mb-4 mt-4">
                    <div>
                        <p className='colorRed'>
                            قیمت :
                        </p>
                    </div>
                    <div>
                        <p className='colorRed'>
                            {item.Cost} تومان
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue">
                             ویرایش
                         </Button>
                         <Button className="glassBtn borderRight" id="colorRed">
                             حذف
                         </Button>
                     </div>
                     </div>
                 </div>
                )
            })
                 }
                 <hr className="cartHr"></hr>
                 {/* <div className="d-flex justify-content-between pd4">
                     <div className="d-flex">
                        <img src={Img1} className="CartProductImg"/>
                        <div>
                            <p className="CartProductName">
                            Razer Gaming Computer Mouse
                            </p>
                            <div className="d-flex align-items-center">
                                <div className="CartColor">

                                </div>
                                <p className="CartColorP">
                                    رنگ سبز
                                </p>
                            </div>
                            <p className="CartColorP mt-4">
                                <FaAward/>
                                    ضمانت اصل بودن کالا
                                </p>
                        </div>
                     </div>
                     <div>
                     <div  className="d-flex ta-center pd0 d-inline-block align-items-center" style={{borderBottom:"none"}}>
                    <p className="CartColorP">تعداد :</p>
                    <div className="counterDiv">
              <button onClick={()=>decrement()} className="decBTN">-</button>
              <span style={{marginRight:'0'}}>{count}</span>
              <button onClick={()=>increment()} className="inBTN">+</button>
            </div>
                    </div>
                    <div className="priceRowCart mb-4 mt-4">
                    <div>
                        <p className='colorRed'>
                            قیمت :
                        </p>
                    </div>
                    <div>
                        <p className='colorRed'>
                            3.250.000 تومان
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue">
                             ویرایش
                         </Button>
                         <Button className="glassBtn borderRight" id="colorRed">
                             حذف
                         </Button>
                     </div>
                     </div>
                 </div> */}
           </div>
           <div className='whiteBoxCart mt-4'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">

      <p className="fontWeightBold ml-4" href="#">
                   انتخاب آدرس
                </p>
      </div>
      <Button className="addressAdd" onClick={handleOpen1}>
          <FaPlus className="mr-2"/>
          افزودن آدرس جدید
      </Button>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            افزودن آدرس جدید
          </Typography>
          <hr/>
         <div className="row">
         <Col md={4}>

                                <p className="fontWeightMedium mb-2">
                                   شهر
                                </p>
                                <select onChange={(e)=>!address1?setCity1(e.target.value):setCity2(e.target.value)} name="state" id="state" className="informationSelect">
                                {
                                    cities.map((item)=>{
                                      return(

                                        <option  value={item.CityID}>{item.CityName}</option>
                                      )
                                    })
                                  }

                                  </select>

             </Col>
             <Col md={4}>
{
  city1==1577||city2==1577?

  <div>
  <p className="fontWeightMedium mb-2">
     منطقه
  </p>
  <select onChange={(e)=>!address1?setReg1(e.target.value):setReg2(e.target.value)} name="state" id="state" className="informationSelect">
  {[...new Array(22)].map((item,index)=>{
              return(
     <option  value={index+1}>{index+1}</option>
  )}  )
}
              </select>
              </div>
  :
  null
}


</Col>
             <Col md={4}>
             <p className="fontWeightMedium mb-2">
                                   کد پستی
                                </p>
                                <input onChange={(e)=>address1?setPostalCode2(e.target.value):setPostalCode1(e.target.value)}  className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
             آدرس                                </p>
                                <textarea  onChange={(e)=>address1?setAddress2(e.target.value):setAddress1(e.target.value)}  className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button onClick={()=>AddAddress()} className="saveBtn mt-4">
                     ذخیره
                 </Button>
             </Col>
         </div>
        </Box>
      </Modal>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                     {
                         address1?

                 <div className="shadowBox mb-4">
                     <p className="fontWeightNormal">
                     <Radio

sx={{
  color: '#ff004e',
  '&.Mui-checked': {
    color: '#ff004e',
  },
}}
checked={radio === 1}
onChange={()=>{setRadio(1);Transporter(1)}}
/>
{address1}                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue" onClick={handleOpen2}>
                             ویرایش
                         </Button>
                         <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ویرایش آدرس
          </Typography>
          <hr/>
         <div className="row">
             <Col md={4}>

                                <p className="fontWeightMedium mb-2">
                                   شهر
                                </p>
                                <select onChange={(e)=>setCity1(e.target.value)} name="state" id="state" className="informationSelect">
                                {
                                    cities.map((item)=>{
                                      return(

                                        <option  value={item.CityID}>{item.CityName}</option>
                                      )
                                    })
                                  }

                                  </select>

             </Col>
             <Col md={4}>
{
  city1==1577?

  <div>
  <p className="fontWeightMedium mb-2">
     منطقه
  </p>
  <select onChange={(e)=>setReg1(e.target.value)} name="state" id="state" className="informationSelect">
  {[...new Array(22)].map((item,index)=>{
              return(
     <option  value={index+1}>{index+1}</option>
  )}  )
}
              </select>
              </div>
  :
  null
}


</Col>
             <Col md={4}>
             <p className="fontWeightMedium mb-2">
                                   کد پستی
                                </p>
                                <input onChange={(e)=>setPostalCode1(e.target.value)}value={postalCode1} className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
آدرس                                </p>
                                <textarea onChange={(e)=>setAddress1(e.target.value)} value={address1}className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button onClick={()=>AddAddress()}className="saveBtn mt-4">
                     ذخیره
                 </Button>
             </Col>
         </div>
        </Box>
      </Modal>
      <Button onClick={()=>{setAddress1("");setPostalCode1("");AddAddress("delete1")}} className="glassBtn" id="colorRed">
                                   حذف
                         </Button>
                     </div>
                 </div>
                         :
null
                     }
                     {
                         address2?
                 <div className="shadowBox mb-4">
                     <p className="fontWeightNormal">
                     <Radio

sx={{
  color: '#ff004e',
  '&.Mui-checked': {
    color: '#ff004e',
  },
}}
checked={radio === 2}
onChange={()=>{setRadio(2);Transporter(2)}}
/>
                     {address2}
                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button onClick={()=>handleOpen3()} className="glassBtn" id="colorBlue">
                             ویرایش
                         </Button>
                         <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ویرایش آدرس
          </Typography>
          <hr/>
         <div className="row">
         <Col md={4}>

<p className="fontWeightMedium mb-2">
   شهر
</p>
<select onChange={(e)=>setCity2(e.target.value)} name="state" id="state" className="informationSelect">
{
    cities.map((item)=>{
      return(

        <option  value={item.CityID}>{item.CityName}</option>
      )
    })
  }

  </select>

</Col>
<Col md={4}>
{
city2==1577?

<div>
<p className="fontWeightMedium mb-2">
منطقه
</p>
<select onChange={(e)=>setReg2(e.target.value)} name="state" id="state" className="informationSelect">
{[...new Array(22)].map((item,index)=>{
return(
<option  value={index+1}>{index+1}</option>
)}  )
}
</select>
</div>
:
null
}


</Col>
             <Col md={4}>
             <p className="fontWeightMedium mb-2">
                                   کد پستی
                                </p>
                                <input onChange={(e)=>setPostalCode2(e.target.value)} value={postalCode2} className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
آدرس                                </p>
                                <textarea onChange={(e)=>setAddress2(e.target.value)} value={address2} className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button onClick={()=>AddAddress()} className="saveBtn mt-4">
                     ذخیره
                 </Button>
             </Col>
         </div>
        </Box>
      </Modal>
                         <Button onClick={()=>{setAddress2("");setPostalCode2("");AddAddress("delete2")}} className="glassBtn" id="colorRed">
                             حذف
                         </Button>
                     </div>
                 </div>

                 :
                 null
                 }
                 </div>





           </div>
           {
             tran?

           <div className='whiteBoxCart mt-4'>
           <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">

      <p className="fontWeightBold ml-4" href="#">
                  انتخاب نحوه ارسال
                </p>
      </div>
      <Button className="saveBtn">

         ثبت
      </Button>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1 d-flex f1">
                 <div className="shadowBox mb-4 w30">
                     <p className="fontWeightBold">
                     <Radio

       sx={{
         color: '#ff004e',
         '&.Mui-checked': {
           color: '#ff004e',
         },
       }}
     />
{tran.SendName}                   </p>
                   <p className='fontWeightNormal'>
                       هزینه ارسال : {tran.Cost} تومان
                   </p>

                 </div>

                 
                
               

                 </div>
           </div>
             :
             null
           }
            </div>
          
            </div>

      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default CartStep1;
