import React from "react";
import ProfilePhoto from "../images/2.png";
import MenuBar from "./MenuBar";
const Profile = () => {
  return (
    <>
      <div>
        <img
          className="shadow img-fluid mx-auto d-block mt-4"
          src={ProfilePhoto}
          alt=""
        />
        <h4 className="Nameprofile mt-3 text-center ">pouria rahimy</h4>
        <p className="lead fs-6 mr-5 text-center emailprofile">
          pouria.rahimy@gmail.com
        </p>
      </div>
      <div className="menu-pages">
        <MenuBar />
      </div>
    </>
  );
};

export default Profile;
