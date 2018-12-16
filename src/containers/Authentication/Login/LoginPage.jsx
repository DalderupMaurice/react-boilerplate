import React from "react";

import { Form, Icon, Input, Button, Checkbox, Alert } from "antd";
import { Link } from "react-router-dom";
import { object } from "prop-types";

import "./LoginPage.scss";

const FormItem = Form.Item;

export default class LoginPage extends React.Component {
  static propTypes = {
    userActions: object.isRequired,
    user: object.isRequired,
    form: object.isRequired
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      userActions: { login },
      form: { validateFields }
    } = this.props;

    validateFields((err, values) => {
      if (!err) {
        login(values);
      }
    });
  };

  render() {
    const {
      user: { loading, errors },
      form: { getFieldDecorator }
    } = this.props;

    return (
      <React.Fragment>
        {errors ? <Alert message={errors} type="error" showIcon /> : null}
        <br />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                disabled={loading}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                disabled={loading}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
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
            <Link className="login-form-forgot" to="/login">
              Forgot password
            </Link>
            <Button
              disabled={loading}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </FormItem>
        </Form>
      </React.Fragment>
    );
  }
}
