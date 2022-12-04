import react from "react";
import RedLogo from '../../../assets/img/redLogo.png';
import { FaChevronDown } from 'react-icons/fa';
import { Container ,Col, Button} from "react-bootstrap";

const BlogHeader = ({data,cat}) => {
   console.log(77)
   console.log(data)

  return (
   <Container fluid className="pad0">
   <div className="mainBack">
   <div className="MainMenu d-flex">
      {
         data?.map((item)=>{
return(
     <Button onClick={()=>{cat(item.BlogTypeID)}} className="MainMenuBtn borderNone">
     
 
        {item.TypeName}
     </Button>
)
         })
      }
    
     </div>
   </div>
   </Container>
     
   
  );
}; 
export default BlogHeader;
