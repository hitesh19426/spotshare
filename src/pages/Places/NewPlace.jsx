import React from 'react'
import { Form, Formik } from 'formik';

import MyTextInput from '../../components/Places/MyTextInput';
import placeValidator from '../../components/Places/validators';

function FormikForm(props) {
  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <Formik
      initialValues={{ title: '', description: '', address: '' }}
      validate={placeValidator}
      onSubmit={handleSubmit}
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
