import React from 'react';
import firebase from "../firebase";
 
class User extends React.Component {
    constructor() {
        super();
        this.state = {
         myLoginEmail: "",
         myName: "",
         emergencyContactName: "",
         emergencyContactNumber: ""
        };
      }
 
      addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        const userRef = db.collection("users").add({
          myLoginEmail: this.state.myLoginEmail,
          myName: this.state.myName,
          emergencyContactName: this.state.emergencyContactName,
          emergencyContactNumber: this.state.emergencyContactNumber
        });  
        this.setState({
            myLoginEmail: "",
            myName: "",
            emergencyContactName: "",
            emergencyContactNumber: ""
        });
      };
 
      updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      
 
  render() {
    return (
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="myLoginEmail"
            placeholder="My Login Email"
            onChange={this.updateInput}
            value={this.state.myLoginEmail}
          />
          <input
            type="text"
            name="myName"
            placeholder="My Name"
            onChange={this.updateInput}
            value={this.state.myName}
          />
          <input
            type="text"
            name="emergencyContactName"
            placeholder="My Contact's Name"
            onChange={this.updateInput}
            value={this.state.emergencyContactName}
          />
          <input
            type="text"
            name="emergencyContactNumber"
            placeholder="My Contact's Number"
            onChange={this.updateInput}
            value={this.state.emergencyContactNumber}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default User;