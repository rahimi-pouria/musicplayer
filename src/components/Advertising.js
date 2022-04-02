import React from "react";
import Iphone from "../images/Iphone.jpeg";
const Advertising = () => {
  return (
    <>
      <div className="mt-5 mb-2 mx-auto Advertising">
        <div className="row">
          <div className="col-md-5 col-sm-12 IphonePhoto">
            <img src={Iphone} alt="" className="Iphone" />
          </div>
          <div className="col-md-5 col-sm-12 AdvertisingPhon">
            <div className="phoneTitle">
              <span className="IphoneName">Iphone X</span>
              <p className="conformation">128 GB</p>
            </div>
          </div>
          <div className="col-md-2  col-sm-12 AdvertisingPhon">
            <i className="fa fa-open"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertising;
