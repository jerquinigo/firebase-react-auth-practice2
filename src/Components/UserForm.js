import React, { Component } from "react";
import { auth } from "../firebase";

class FirebaseForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onLogInSubmit = () => {
    auth
      .doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        console.log(res, "the res");
      });
    // if (this.state.email && this.state.password) {
    //   firebase.doSignInWithEmailAndPassword(
    //     this.state.email,
    //     this.state.password
    //   );
    // }
  };

  onCreateUserSubmit = () => {
    auth
      .doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        console.log(res);
      });
    // if (this.state.email && this.state.password) {
    //   firebase
    //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //     .then(res => {
    //       debugger;
    //     });
    // }
  };

  onSignOutSubmit = () => {
    auth.doSignOut().then(() => {
      console.log("you are logged out");
    });
    // if (this.state.email && this.state.password) {
    //   firebase.doSignOut();
    // }
  };

  displayForm = () => {
    return (
      <div>
        <div className="container">
          <div className="row">
            <input
              className="input-field col s12 m12"
              type="text"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
            />
          </div>

          <div className="row">
            <input
              className="input-field col s12 m12"
              type="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <button className="btn" onClick={this.onCreateUserSubmit}>
            Signup
          </button>
          <button className="btn" onClick={this.onLogInSubmit}>
            Login
          </button>
          <button className="btn" onClick={this.onSignOutSubmit}>
            Logout
          </button>
        </div>
      </div>
    );
  };

  render() {
    console.log(this.state, "the current state");
    console.log(auth, "the current auth");

    return (
      <div>
        the form
        {this.displayForm()}
      </div>
    );
  }
}

export default FirebaseForm;
