import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { object } from "prop-types";

import * as userActions from "../../redux/users/userActions";

class Logout extends React.Component {
  static propTypes = {
    userActions: object.isRequired
  };

  componentDidMount = () => {
    const {
      userActions: { logout }
    } = this.props;
    logout();
  };

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Logout);
