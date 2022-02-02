import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";

import { FaTimes , FaShareAlt ,FaArrowUp ,FaLink,FaPlus,FaRegCommentAlt,FaRegCheckCircle} from 'react-icons/fa';
import AssembleSlidr from "./AssemblePageComponents/AssembleSlider";
import CommentBox from "./SingleProductComponents/CommentBox";
import PageTitle from "../../assets/img/pageTitle.png";
const AssembleMain = () => {

  return (
    <div className="EachCategoryBody">
      <Header />
    

   
      <Container className="EachCategoryContainer" fluid>
      <div className="pageTitle">
            <div>
            <img src={PageTitle}/>
            </div>
            <div>
                <p>
                سیستم عالی گیمینگ AMD                </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
        </div>
        <div className="assembleSliderBox">
          <AssembleSlidr/>
        </div>
        <div className="assembleBox">
          <div className="topBarBox">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center colorWhite">
                <Button>
                <FaPlus color={'#fff'}/>
                <p className="userName">
                    شخصی سازی این سیستم
                </p>
                </Button>
            </div>
            <div className="d-flex align-items-center borderRight1 colorWhite" >
                <FaArrowUp color={'#fff'}/>
                <p className="userName">
                   2
                </p>
            </div>
            <div className="d-flex align-items-center borderRight1 colorWhite">
                <FaRegCommentAlt color={'#fff'}/>
                <p className="userName">
                    10
                </p>
            </div>
            <div className="d-flex align-items-center borderRight1 colorWhite">
             <Button>
             <FaShareAlt color={'#fff'}/>
                <p className="userName">
                    اشتراک گذاری
                </p>
             </Button>
            </div>
          </div>
            <div className="d-flex align-items-center">
            <p className="linkCopy">
            https://rogstrix.ir/list/bRDXKB
            </p>
           <Button className="attachBtn">
           <FaLink color={'#fff'}/>
           </Button>
         
            </div>
          </div>
          <div className="secondBox">
            <div className="d-flex align-items-center colorWhite">
              <FaRegCheckCircle color={'#fff'}/>
              <p className="fontWeightBold">
                سازگاری قطعات :
              </p>
              <p className="fontWeightLight">
                هیچ ناسازگاری یا مشکلی وجود ندارد.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p className="tableFirstRow">
              قطعه
            </p>
          </div>
        </div>
        <div className="whiteBox3 mt-3">
            <p className="boxTitle2 BoldFont">
           توضیحات
                </p>
                <hr className="dottedH"/>
                <p className="productDetail">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>
        <div className="whiteBox3 mt-3">
          <CommentBox/>
          </div>
      </Container>
      <RedBox/>
      <Footer />
    </div>
  );
};
export default AssembleMain;
