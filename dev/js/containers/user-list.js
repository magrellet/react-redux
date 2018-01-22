import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {

    listOfUsers(){
        return this.props.users.map((user) => {
            return (<li key={user.id}>{user.fname} {user.lname}</li>);

        })
    }    

    render(){
        return(
            <ul>
                {this.listOfUsers()}
            </ul>
        );
    }

}

//take the store(part of the store) and pass to the component as a props
function mapStateToProps(state){
    return{
        users: state.users
    };
    
}

//export default UserList;
export default connect(mapStateToProps)(UserList);