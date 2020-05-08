import React from "react";

// const divStyle = {
//     display: "inline",
//     color: "green"

// };

const searchStyle = {
    width: "20%"
};

function SearchForm(props) {
    console.log("searchFromProps: ", props)
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
          className="form-control"
          placeholder="Search Employees"
          id="search"
        />
        
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;