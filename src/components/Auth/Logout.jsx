import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { object } from "prop-types";

import * as userActions from "../../redux/users/userActions";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  static propTypes = {
    userActions: object.isRequired,
  };

  constructor(props) {
    super(props);

    console.log(props);
  };


  componentDidMount = () => {
    const {
      userActions: { logout }
    } = this.props;
    logout();
  };

  render() {
    const { user } = this.props;
    console.log("qpwoeipq", user);
    // return user ? null : <Redirect to="/" />;
    return (<div>logout</div>);
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
