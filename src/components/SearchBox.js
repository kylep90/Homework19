import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm() {
 
var search;

function updateSearch(event) {
  console.log(event.target.value)
  search=event.target.value;
}

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Search Directory:</label>
        <input type="text" value={search} onChange={updateSearch}
        //   value={props.search}
        //   onChange={props.handleInputChange}
          // name="breed"
          // list="breeds"
          
          // className="form-control"
          // placeholder="Type in a name or number to start"
          // id="breed"
        />
        {/* <datalist id="breeds"> */}
          {/* {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))} */}
        {/* </datalist> */}
        {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success"> */}
          {/* Search */}
        {/* </button> */}
      </div>
    </form>
  );
}

export default SearchForm;