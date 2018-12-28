import React from "react";

import { Form, Icon, Input, Button, Checkbox, Alert } from "antd";
import { Link } from "react-router-dom";
import { object } from "prop-types";
import bip32 from "bip32";
import bip39 from "bip39";
import Wallet from "../../../services/Wallet";

import "./LoginPage.scss";

const FormItem = Form.Item;

export default class LoginPage extends React.Component {
  static propTypes = {
    userActions: object.isRequired,
    user: object.isRequired,
    form: object.isRequired
  };

  state = {
    mnemonic: null
  };

  componentDidMount() {
    // Generate bip39 Mnemonic - 256-bits entropy (24-word long mnemonic)
    const mnemonic = bip39.generateMnemonic(256);
    this.setState({ mnemonic });
    // const ethWallet1 = rootWallet.getEthWallet(1);
    // const ethWallet2 = rootWallet.getEthWallet(2);
    // const neoWallet1 = rootWallet.getNeoWallet(1);
    // const neoWallet2 = rootWallet.getNeoWallet(2);
  }

  componentWillReceiveProps(prevProps, nextProps) {
    console.log("prev", prevProps);
    console.log("next", nextProps);
  }

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

    const { mnemonic } = this.state;

    return (
      <React.Fragment>
        <h5 style={{ fontSize: "14px", textAlign: "center", margin: "auto" }}>
          mnemonic: <br /> <br /> {mnemonic}
        </h5>

        <br />

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
