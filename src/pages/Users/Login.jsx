import { Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {loginFormValidator} from '../../components/Places/helper'
import MyTextInput from '../../components/Places/MyTextInput'
import { AuthContext } from '../../components/Users/AuthContext'
import './Login.css'

export default function Login() {
  // Showing login page by default
  const auth = useContext(AuthContext)

  return (
    <Formik
      initialValues={{ email: '', password: ''}}
      validate={loginFormValidator}
      onSubmit={auth.login}
    >
      <Form>
        <MyTextInput label="Email" name="email" type="text" placeholder="Enter email" />
        <MyTextInput label="Password" name="password" type="password" placeholder="Enter password" />

        <div className="col-12 ms-5 mt-3">
          <button type="submit" className="btn btn-success"> Login </button>
        </div>
        <div className="col-12 ms-5 mt-3">
          <Link type="button" className="btn btn-success" to="/signup"> Switch to Signup </Link>
        </div>
      </Form>
    </Formik>
  )
}
