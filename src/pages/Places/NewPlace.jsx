import { Form, Formik } from 'formik';
import React from 'react'
import './NewPlace.css'
import MyTextInput from '../../components/Places/MyTextInput';
import validate from '../../components/Places/helper';

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

        {/* TODO: If you have time, then disable button if there are errors */}
        <div className="col-12 ms-5 mt-3">
          <button type="submit" className="btn btn-success"> Submit </button>
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
