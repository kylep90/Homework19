import React, { Component } from "react";
import DataTable from "./DataTable";
// import Nav from "./Nav";
import API from "../utils/API";
import SearchResults from "./SearchResults";

class DataArea extends Component {
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }

    headings = [
        "Image", "Name", "Phone", "Email", "DOB"
    ]

    handleSort = heading => {}

    handleSearchChange = event => {}

    async componentDidMount() {
        console.log("hola")
        // API.getUsers().then(results => {
        //     console.log(results);
        //     this.setState({
        //         users:results.data.results,
        //         filteredUsers: results.data.results
        //     });
        // });
        const url = "https://randomuser.me/api/?results=200&nat=gb";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({users : data.results});

    }
    render(){
        return (
            <>
            {/* <Nav handleSearchChange={this.handleSearchChange} /> */}
            <div className="data-area">
            
    <div>{this.state.users[0].gender}</div>
    {/* <div>{this.state.users[0].name.first}</div> */}
    <div>{this.state.users[0].email}</div>
    

                {/* <p>{this.state.users[0]}</p> */}
                <DataTable
                headings={this.headings}
                users={this.state.filteredUsers}
                handleSort={this.handleSort}
                />
            </div>
            </>//???
        );
        
    }
}

export default DataArea;