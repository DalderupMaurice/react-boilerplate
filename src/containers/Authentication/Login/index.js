import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form } from "antd";

import LoginPage from "./LoginPage";
import * as userActions from "../../../redux/users/userActions";

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default compose(
  Form.create(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LoginPage);
