import FooterMain from "./layouts/FooterMain";
import Header from "./layouts/Header";
import Menu from "./layouts/Menu";
import ContactUs from "./Information/ContactUs"
import { Container ,Col, Button,Row} from "react-bootstrap";
import React,{useState,useEffect} from 'react'

const ContactUsPage = () => {
  const [language,setLanguage]=useState();

  return (
    <>
     
    
     <Header setLanguage={setLanguage}/>
      <Menu/> 
      <Container className="ta-center grayB" fluid >
    <ContactUs/>
      </Container>
     
      <FooterMain/>
    </>
  );
};
export default ContactUsPage;
