import React from "react";

const Search = () => {
  return (
    <>
      <div className="col-md-5 col-sm-12">
        <input
          className="searchSong"
          type="search"
          placeholder="Search For Song artist etc...."
        />
      </div>
      <div className="col-md-7 col-sm-12 d-flex justify-content-end advance">
        <button className="btn btn-danger">Upgrade Plan</button>
      </div>
    </>
  );
};
export default Search;
