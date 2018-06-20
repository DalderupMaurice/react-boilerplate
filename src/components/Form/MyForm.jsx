import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button } from "antd";

import "./MyForm.css";

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class MyForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleSubmit(values);
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const valueError = isFieldTouched("value") && getFieldError("value");

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
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
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            {this.props.btnText}
          </Button>
        </FormItem>
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
