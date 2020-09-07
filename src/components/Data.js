import React, {Component} from 'react';
import "../assets/style.css"
class Data extends Component {
   state = {
    loading : true,
    users : []
}; 

sortFunction() {
    var list = this.state.users
    console.log(list)
    list.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
    console.log(list)
    // console.log(users)
    // var list = []
    // users.map(first =>(
    //     list.push(first.name.first)
    // ));
    // console.log(list)
    // list.sort();
    // console.log(list)
}

// function ActionLink() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }
// }

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
                <th>Name<button onClick={this.sortFunction()}>Sort</button></th>
                <th>Picture</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Date of Birth</th>

            </tr>
            
                {this.state.users.map(user => (
                <tr key={user.login.uuid}>
                
                    <td>{user.name.first} {user.name.last}</td>
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