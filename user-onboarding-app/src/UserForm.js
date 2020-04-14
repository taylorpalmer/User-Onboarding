import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./UserForm.css";

const UserForm = props => {
  console.log("error", props.errors, "touched", props.touched);
  console.log(props.status);

  return (
    <div className="userform">
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" placeholder="Enter Name Here" />
        {props.touched.name && props.errors.name ? (
          <span className="error">{props.errors.name}</span>
        ) : null}
        <label htmlFor="email">email</label>
        <Field name="email" placeholder="Enter email Here" />
        {props.touched.email && props.errors.email ? (
          <span className="error">{props.errors.email}</span>
        ) : null}
        <label htmlFor="password">Password</label>
        <Field name="password" placeholder="Enter Password Here" />
        {props.touched.password && props.errors.password ? (
          <span className="error">{props.errors.password}</span>
        ) : null}
        <div className="tos-check">
          <label htmlFor="tos">Click After Reading Terms of Service</label>
          <Field name="tos" type="checkbox" />
        </div>
        {props.touched.tos && props.errors.tos ? (
          <span className="error">{props.errors.tos}</span>
        ) : null}
        <button type="submit">Add User</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: props => {
    console.log(props);
    return {
      name: props["name"] || "",
      email: props["email"] || "",
      password: props["password"] || "",
      tos: props["tos"] || false
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
    formikBag.props["addUser"]({
      ...values,
      id: Date.now()
    });
    formikBag.setStatus("form submitting");
    formikBag.resetForm();
  }
})(UserForm);
