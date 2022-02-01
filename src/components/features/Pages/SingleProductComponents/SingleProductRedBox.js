import React from "react";

import "./Styles/singleProduct.css";
import { Container ,Col, Button,Row} from "react-bootstrap";

// if you want to use array


const SingleProductRedBox = () => {
  return (
    <div className="SingleProductRedBox">
     <div className="redBoxTitle">
       <p>
       مشخصات فنی
       </p>
     </div>
     <hr className="whiteDotted"/>
     <div className="redBox2">

              <div className="">
                  <p className="firstLine">
                    Part #
                  </p>
                  <p className="secondLine">
                    100-10000065BOX
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                   Core Count
                  </p>
                  <p className="secondLine">
                    6
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    Core Clock
                  </p>
                  <p className="secondLine">
                    3.7 GHz
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    Boost Clock
                  </p>
                  <p className="secondLine">
                    4.6 GHz
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    TDP
                  </p>
                  <p className="secondLine">
                   65 W
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                   Series
                  </p>
                  <p className="secondLine">
                    AMD Ryzen 5
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    Microarchitecture
                  </p>
                  <p className="secondLine">
                    Zen 3
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    Core Family
                  </p>
                  <p className="secondLine">
                    Vermeer
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    Socket
                  </p>
                  <p className="secondLine">
                    AM4
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    Integrated Graphics
                  </p>
                  <p className="secondLine">
                    None
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    Maximum Supported Memory
                  </p>
                  <p className="secondLine">
                    128 GB
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    ECC Support
                  </p>
                  <p className="secondLine">
                    No
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    Packaging
                  </p>
                  <p className="secondLine">
                    Boxed
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    Includes CPU Cooler
                  </p>
                  <p className="secondLine">
                    Yes
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    L1 Cache
                  </p>
                  <p className="secondLine">
                    6 X 32 KB Instruction
                  </p>
                  <p className="secondLine">
                    6 X 32 KB Data
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p ccachelassName="firstLine">
                   L2 Cache
                  </p>
                  <p className="secondLine">
                    6 X 512 KB
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    L3 Cache
                  </p>
                  <p className="secondLine">
                    1 X 32 MB
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    Lithography
                  </p>
                  <p className="secondLine">
                    7 nm
                  </p>
              </div>
              <hr className="compareHR"/><div className="mt-4">
                  <p className="firstLine">
                    Simultaneous Multithreading
                  </p>
                  <p className="secondLine">
                    Yes
                  </p>
              </div>
     </div>
    </div>
  );
};

export default SingleProductRedBox;