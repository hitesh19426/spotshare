import { Form, Formik } from 'formik'
import React, { useCallback, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { signupFormValidator } from '../../components/Places/validators'
import MyTextInput from '../../components/Places/MyTextInput'
import { AuthContext } from '../../components/Users/AuthContext'
import MyLoader from './../../components/MyLoader';

export default function Signup() {
  // Showing login page by default
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = useCallback(async (values) => {
    // auth.signup(values);
    console.log(values);
    const {name, email, password} = values;

    try{
      setIsLoading(true);

      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })
      console.log(response);

      const resp = await response.json();
      console.log(resp);

    }catch(err){
      console.log(err);
      setError(err.message || 'Something went wrong. Please try again.')
    }

    setIsLoading(false);

    navigate("/");
  }, [auth, navigate])

  return (
    <Formik
      initialValues={{ name:'', email: '', password: ''}}
      validate={signupFormValidator}
      onSubmit={signup}
    >
      <Form>
        <MyTextInput label="Name" name="name" type="text" placeholder="Enter Name" />
        <MyTextInput label="Email" name="email" type="text" placeholder="Enter email" />
        <MyTextInput label="Password" name="password" type="password" placeholder="Enter password" />

        <div className="col-12 ms-5 mt-3">
          <button type="submit" className="btn btn-success"> Sign Up </button>
        </div>
        <div className="col-12 ms-5 mt-3">
          <Link type="button" className="btn btn-success" to="/login"> Switch to Login </Link>
        </div>

        <div className="col-12 ms-5 mt-3">
          {isLoading && <MyLoader /> }
        </div>
        

      </Form>
    </Formik>
  )
}
