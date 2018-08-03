import React from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import { bindActionCreators } from "redux";
import { connect } from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux";

import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom";
import { object, func } from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types";

import * as web3Actions from "../../redux/web3/web3Actions";

const FormItem = Form.Item;

class RegisterPage extends React.Component {
  static propTypes = {
    form: object.isRequired,
    web3Actions: func.isRequired
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      web3Actions: { register },
      form: { validateFields }
    } = this.props;

    validateFields((err, values) => {
      if (!err) {
        register(values);
        console.log("Received values of form: ", values); // eslint-disable-line
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator }
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <Link className="login-form-forgot" to="/register">
            Forgot password
          </Link>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  web3Actions: bindActionCreators(web3Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(RegisterPage));
