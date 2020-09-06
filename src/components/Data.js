import React, {Component} from 'react';
import "../assets/style.css"

class Data extends Component {
   state = {
    loading : true,
    users : []
}; 

async componentDidMount(){
    const url = "https://randomuser.me/api/?results=20&nat=gb";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    this.setState({users : data.results})
    console.log(this.state.users);
}
render (){
    return (
        <div>
            <table>
            <tr>
                <th>Name</th>
                <th>Picture</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Date of Birth</th>

            </tr>
            
                {this.state.users.map(user => (
                <tr key={user.login.uuid}>
                
                    
                    <td><img src={user.picture.thumbnail} alt="pic"></img></td>
                    <td>{user.name.first} {user.name.last}</td>
                    <td>{user.email}</td>
                    <td>{user.cell}</td>
                    <td>{user.dob.date}</td>
                
                </tr>))}
                
            
            </table>
            
            
        </div>
        
           

    );
}
}
export default Data;