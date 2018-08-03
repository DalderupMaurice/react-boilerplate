import { notification } from "antd";
import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  openNotification = (title, message) => {
    const args = {
      message: title,
      description: message,
      duration: 5
    };
    notification.open(args);
  };

  render() {
    return <div>Home</div>;
  }
}

export default HomePage;
