import React from "react";
import Slider1 from "../images/1.png";
import Slider2 from "../images/3.png";
import Slider3 from "../images/4.png";
import Slider4 from "../images/5.png";
const SliderComponent = () => {
  return (
    <>
      <div>
        <h2>Billborad Topchart</h2>
        <div
          id="multi-item-example"
          className="carousel slide carousel-multi-item"
          data-ride="carousel"
        >
          <div className="controls-top">
            <a
              className="btn-floating"
              href="#multi-item-example"
              data-slide="prev"
            >
              <i className="fas fa-chevron-left"></i>
            </a>
            <a
              className="btn-floating"
              href="#multi-item-example"
              data-slide="next"
            >
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#multi-item-example"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="col-md-3" style={{ float: "left" }}>
                <div className="card mb-2">
                  <img
                    className="card-img-top CloringBook shadow-sm"
                    src={Slider1}
                    alt=""
                  />
                  <div className="card-bodys">
                    <h6 className="card-title mt-3">Cloring Book</h6>
                    <p className="lead nameSliderHuman">Pop king</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ float: "left" }}>
                <div className="card mb-2">
                  <img
                    className="card-img-top Neightbourihood shadow-sm"
                    src={Slider2}
                    alt=""
                  />
                  <div className="card-bodys Blue">
                    <h6 className="card-title  mt-3">Blue Neightbourihood</h6>
                    <p className="lead nameSliderHuman">Troy Sivan</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ float: "left" }}>
                <div className="card mb-2">
                  <img
                    className="card-img-top Star shadow-sm"
                    src={Slider3}
                    alt=""
                  />
                  <div className="card-bodys Star">
                    <h6 className="card-title mt-3">Star Boy</h6>
                    <p className="lead nameSliderHuman">The Weekend</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ float: "left" }}>
                <div className="card mb-2">
                  <img
                    className="card-img-top shadow-sm"
                    src={Slider4}
                    alt=""
                  />
                  <div className="card-bodys">
                    <h6 className="card-title mt-3">Mirage</h6>
                    <p className="lead nameSliderHuman">Else Twin</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3" style={{ float: "left" }}>
                <div className="card mb-2">
                  <img
                    className="card-img-top shadow-sm"
                    src={Slider4}
                    alt=""
                  />
                  <div className="card-bodys">
                    <h6 className="card-title mt-3">Cloring Book</h6>
                    <p className="lead nameSliderHuman">Pop king</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ float: "left" }}>
                <div className="card mb-2">
                  <img
                    className="card-img-top shadow-sm"
                    src={Slider2}
                    alt=""
                  />
                  <div className="card-bodys">
                    <h6 className="card-title mt-3">Blue Neightbourihood</h6>
                    <p className="lead nameSliderHuman">Troy Sivan</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ float: "left" }}>
                <div className="card mb-2">
                  <img
                    className="card-img-top shadow-sm"
                    src={Slider3}
                    alt=""
                  />
                  <div className="card-bodys">
                    <h6 className="card-title mt-3">Star Boy</h6>
                    <p className="lead nameSliderHuman">The Weekend</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ float: "left" }}>
                <div className="card mb-2">
                  <img
                    className="card-img-top shadow-sm"
                    src={Slider4}
                    alt=""
                  />
                  <div className="card-bodys">
                    <h6 className="card-title mt-3">Mirage</h6>
                    <p className="lead nameSliderHuman">Else Twin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderComponent;
