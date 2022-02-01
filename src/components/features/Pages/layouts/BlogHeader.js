import react from "react";
import RedLogo from '../../../assets/img/redLogo.png';
import { FaChevronDown } from 'react-icons/fa';
import { Container ,Col, Button} from "react-bootstrap";

const BlogHeader = () => {
  return (
   <Container fluid className="pad0">
   <div className="mainBack">
   <div className="MainMenu d-flex">
     <Button className="MainMenuBtn borderNone">
     
 
        خانه
     </Button>
     <Button className="MainMenuBtn borderNone">
     
     
         اخبار
     </Button>
     <Button className="MainMenuBtn borderNone">
     
         
        لپ تاپ
     </Button>
     <Button className="MainMenuBtn borderNone">
     
      
        تازه های تکنولوژی
     </Button>
     <Button className="MainMenuBtn borderNone">
     
      
      1  موضوع شماره 
     
     </Button>
     <Button className="MainMenuBtn borderNone">
     
      
     2  موضوع شماره 
    
    </Button>
     </div>
   </div>
   </Container>
     
   
  );
}; 
export default BlogHeader;
