import React, {Component} from 'react';
import "../assets/style.css"
class Data extends Component {
    
    state = {
        loading : true,
        users : []
    }; 

sortFunction(type) {
    console.log("Button Clicked!")
    var list = this.state.users
    console.log(list)
    list.sort((a, b) => (a.name[type] > b.name[type]) ? 1 : -1)
    console.log(list)
    this.setState({users : list})
    this.render()
}


async componentDidMount(){
    const url = "https://randomuser.me/api/?results=200&nat=gb";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    this.setState({users : data.results})
    console.log(this.state.users);
    
}

render (){
    console.log(this.props.searchValue)
    return (
        <div>
            <table>
            <tr>
                <th>First Name <button onClick={() => this.sortFunction("first")}>Sort</button></th>
                <th>Last Name <button onClick={() => this.sortFunction("last")}>Sort</button></th>
                <th>Picture</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Date of Birth</th>

            </tr>
            
                 {(this.props.searchValue ? this.state.users.filter((user)=>user.name.first.toLowerCase().startsWith(this.props.searchValue)||user.name.last.toLowerCase().startsWith(this.props.searchValue)) : this.state.users).map(user => (
                <tr key={user.login.uuid}>
                
                    <td>{user.name.first}</td>
                    <td> {user.name.last}</td>
                    <td><img src={user.picture.thumbnail} alt="pic"></img></td>
                    
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