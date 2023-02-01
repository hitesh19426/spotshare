import { Form, Formik, useField } from 'formik';
import React from 'react'
import './NewPlace.css'

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 15) {
    errors.title = "Must be 15 characters or less";
  }

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length > 20) {
    errors.description = "Must be 20 characters or less";
  }

  if (!values.address) {
    errors.address = "Required";
  }
  // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.address)) {
  //   errors.address = 'Invalid address address';
  // }

  return errors;
}

function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="col-md-4 ms-5 mt-3">
      <label htmlFor={props.id || props.name} className="form-label"> {label} </label>
      <input
        {...field}
        {...props}
        className={`form-control ${meta.touched ? (meta.error ? 'is-invalid' : 'is-valid') : null}`}
      />
      {meta.error && meta.touched ?
        <div className="invalid-feedback"> {meta.error} </div>
        : <div className="valid-feedback"> Looks good! </div>
      }
    </div>
  )
}

function FormikForm(props) {
  return (
    <Formik
      initialValues={{ title: '', description: '', address: '' }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <MyTextInput label="Title" name="title" type="text" placeholder="Enter title" />
        <MyTextInput label="Description" name="description" type="text" placeholder="Enter description" />
        <MyTextInput label="Address" name="address" type="text" placeholder="Enter Address" />

        <div className="col-12 ms-5 mt-3">
          <button type="submit"> Submit </button>
        </div>
      </Form>
    </Formik>
  )
}

export default function NewPlace() {
  return (
      <FormikForm />
  )
}
