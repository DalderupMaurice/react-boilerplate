import React from "react";
import { Select, Form, Icon, Input, Button, Checkbox, Alert } from "antd";

import { Link } from "react-router-dom";
import { object } from "prop-types";

import { ROLES } from "../../../__utils__/Constants";

export default class RegisterPage extends React.Component {
  static propTypes = {
    form: object.isRequired,
    userActions: object.isRequired,
    user: object
  };

  static defaultProps = {
    user: {}
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      userActions: { register },
      form: { validateFields }
    } = this.props;

    validateFields((err, values) => {
      if (!err) {
        register(values);
      }
    });
  };

  render() {
    const {
      user: { errors, loading },
      form: { getFieldDecorator }
    } = this.props;

    return (
      <React.Fragment>
        {errors ? <Alert message={errors} type="error" showIcon /> : null}
        <br />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "Please input your username!" }]
            })(
              <Input
                disabled={loading}
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input your Password!" }]
            })(
              <Input
                disabled={loading}
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("role", {
              rules: [{ required: true, message: "Please select a role!" }]
            })(
              <Select
                disabled={loading}
                showSearch
                placeholder="Choose a role"
                optionFilterProp="children"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {Object.values(ROLES).map(role => (
                  <Select.Option key={`${role}-role-select`} value={role}>
                    {role}
                  </Select.Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <Link className="login-form-forgot" to="/register">
              Forgot password
            </Link>
            <Button disabled={loading} type="primary" htmlType="submit" className="login-form-button">
              Register
            </Button>
            Already an account? <Link to="/"> Sign in!</Link>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}
