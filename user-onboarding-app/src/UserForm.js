import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = props => {
  console.log("error", props.errors, "touched", props.touched);
  console.log(props.status);

  return (
    <Form>
      <Field name="name" placeholder="Name" />
      <Field name="email" placeholder="email" />
      <Field name="password" placeholder="Password" />
      <Field name="tos" type="checkbox" />
      <button type="submit">Add User</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: props => {
    return {
      name: props.name || "",
      email: props.email || "",
      password: props.password || "",
      tos: props.tos || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter a Name"),
    email: Yup.string().email("Please enter a Valid Email"),
    password: Yup.string().min(8, "Must be at least 8 chars"),
    tos: Yup.boolean().oneOf([true], "Must read Terms of Service!")
  }),
  handleSubmit: (values, formikBag) => {
    console.log("values", values);
    console.log("bag", formikBag);
    formikBag.props.addUser({
      ...values,
      id: Date.now()
    });
    formikBag.setStatus("form submitting");
    formikBag.resetForm();
  }
})(UserForm);
