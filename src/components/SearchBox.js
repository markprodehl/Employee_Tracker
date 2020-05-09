import React from "react";

const searchStyle = {
    width: "20%"
};

function SearchBox(props) {
    // console.log("searchFromProps: ", props)
  return (
    <form>
        <br/>
      <div className="form-group">
        
        <input
        style={searchStyle}
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control border-success"
          placeholder="Search"
          id="search"
        />       
      </div>
    </form>
  );
}

export default SearchBox;