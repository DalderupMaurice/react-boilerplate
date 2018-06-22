import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button } from "antd";

import "./MyForm.scss";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class MyForm extends Component {
  async componentDidMount() {
    const {
      form: { validateFields }
    } = this.props;
    // To disabled submit button at the beginning.
    await validateFields();
  }

  validateBeforeSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields },
      handleSubmit
    } = this.props;
    validateFields((err, values) => {
      if (!err) {
        handleSubmit(values);
      }
    });
  };

  render() {
    const {
      form: {
        getFieldDecorator,
        getFieldsError,
        getFieldError,
        isFieldTouched
      },
      btnText
    } = this.props;

    // Only show error after a field is touched.
    const valueError = isFieldTouched("value") && getFieldError("value");

    return (
      <Form layout="inline" onSubmit={this.validateBeforeSubmit}>
        <Form.Item
          validateStatus={valueError ? "error" : ""}
          help={valueError || ""}
        >
          {getFieldDecorator("value", {
            rules: [{ required: true, message: "Please input a value!" }]
          })(
            <Input
              prefix={<Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Value"
            />
          )}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            {btnText}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

MyForm.propTypes = {
  form: PropTypes.object.isRequired,
  btnText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Form.create()(MyForm);
