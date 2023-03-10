import React, { useCallback, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'

import {loginFormValidator} from '../../components/Places/validators'
import MyTextInput from '../../components/Places/MyTextInput'
import { AuthContext } from '../../components/Users/AuthContext'

export default function Login() {
  // Showing login page by default
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const login = useCallback(async (values) => {
    await auth.login(values)
    navigate("/")
  }, [])

  return (
    <Formik
      initialValues={{ email: '', password: ''}}
      validate={loginFormValidator}
      onSubmit={login}
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
