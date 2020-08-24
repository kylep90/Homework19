import React, {Component} from 'react';

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
            {this.state.users.map(user => (
                <div key={user.login.uuid}>
                    <img src={user.picture.thumbnail} alt="pic"></img><p>{user.name.first} {user.name.last} {user.email} {user.cell} {user.dob.date} </p>
                </div>
            ))}
        </div>
           

    );
}
}
export default Data;