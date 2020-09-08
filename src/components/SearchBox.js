import React from "react";
// import "./style.css";
// import data from "./Data"

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {


var search;

// function updateSearch(event) {
//   console.log(event.target.value)
//   search=event.target.value;
  
// }

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Search Directory:</label>
        <input type="text" value={search} onChange={(event)=>props.setSearchValue(event.target.value)}/>
        
      </div>
    </form>
  );
}

export default SearchForm;