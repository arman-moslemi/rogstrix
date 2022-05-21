import FooterMain from "./layouts/FooterMain";
import Header from "./layouts/Header";
import Menu from "./layouts/Menu";
import AboutUs from "./Information/AboutUs"
import { Container ,Col, Button,Row} from "react-bootstrap";
import React,{useState,useEffect} from 'react'

const AboutUsPage = () => {
  const [language,setLanguage]=useState();

  return (
    <>
     
    
     <Header setLanguage={setLanguage}/>
      <Menu/> 
      <Container className="ta-center grayB" fluid >
    <AboutUs/>
      </Container>
     
      <FooterMain/>
    </>
  );
};
export default AboutUsPage;
