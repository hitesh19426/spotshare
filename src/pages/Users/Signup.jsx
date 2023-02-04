import { Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { signupFormValidator } from '../../components/Places/helper'
import MyTextInput from '../../components/Places/MyTextInput'

export default function Signup() {
  // Showing login page by default

  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <Formik
      initialValues={{ name:'', email: '', password: ''}}
      validate={signupFormValidator}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <MyTextInput label="Name" name="name" type="text" placeholder="Enter Name" />
        <MyTextInput label="Email" name="email" type="text" placeholder="Enter email" />
        <MyTextInput label="Password" name="password" type="password" placeholder="Enter password" />

        <div className="col-12 ms-5 mt-3">
          <button type="submit" className="btn btn-success"> Submit </button>
        </div>
        <div className="col-12 ms-5 mt-3">
          <Link type="button" className="btn btn-success" to="/login"> Switch to Login </Link>
        </div>
      </Form>
    </Formik>
  )
}
