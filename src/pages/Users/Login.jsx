import { Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import {loginFormValidator} from '../../components/Places/helper'
import MyTextInput from '../../components/Places/MyTextInput'
import './Login.css'

export default function Login() {
  // Showing login page by default

  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <Formik
      initialValues={{ email: '', password: ''}}
      validate={loginFormValidator}
      onSubmit={handleSubmit}
    >
      <Form>
        <MyTextInput label="Email" name="email" type="text" placeholder="Enter email" />
        <MyTextInput label="Password" name="password" type="password" placeholder="Enter password" />

        <div className="col-12 ms-5 mt-3">
          <button type="submit" className="btn btn-success"> Submit </button>
        </div>
        <div className="col-12 ms-5 mt-3">
          <Link type="button" className="btn btn-success" to="/signup"> Switch to Signup </Link>
        </div>
      </Form>
    </Formik>
  )
}