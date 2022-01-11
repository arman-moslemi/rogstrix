import react from "react";
import "./Styles/whyrogstrix.css"
import MouseImg from "../../assets/images/MouseImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
const Header = () => {
  return (
   
      <div className="whyRogstrix">
       <Container className="d-flex-center" fluid>
        
            <Col md={7}>

            </Col>
            <Col md={5}>
               <img src={MouseImg} className="mouseImg"/>
            </Col>
        
       </Container>
      </div>
   
  );
}; 
export default Header;
