import React, { Component } from "react";
import { Button } from "antd";

import AuthService from "../../services/AuthService";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.auth = new AuthService();
  }

  handleSignIn = () => {
    window.location = "http://localhost:3000/login";
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleSignIn}>
          Sign in
        </Button>
      </div>
    );
  }
}

LoginPage.propTypes = {};

export default LoginPage;
