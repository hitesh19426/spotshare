import { useFormik } from 'formik';
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
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.address)) {
    errors.address = 'Invalid address address';
  }

  return errors;
}

function FormikForm(props) {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      address: '',
    },
    validate: validate,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    }
  });

  return (
    <>

      <form className="" onSubmit={formik.handleSubmit} >

        <div className="col-md-4 ms-5 mt-3">
          <label htmlFor="title" className="form-label"> Title </label>
          <input id="title"
            name="title"
            type="text"
            {...formik.getFieldProps("title")}
            className={`form-control ${formik.touched.title ? (formik.errors.title ? 'is-invalid' : 'is-valid') : null}`}
            required
          />
          {formik.errors.title && formik.touched.title ?
            <div className="invalid-feedback">
              {formik.errors.title}
              Please provide a valid title.
            </div> :
            <div className="valid-feedback">
              Looks good!
            </div>
          }
        </div>

        <div className="col-md-4 ms-5 mt-3">
          <label htmlFor="description" className="form-label"> Description </label>
          <input id="description"
            name="description"
            type="textarea"
            {...formik.getFieldProps("description")}
            className={`form-control ${formik.touched.description ? (formik.errors.description ? 'is-invalid' : 'is-valid') : null}`}
            required
          />
          {formik.errors.description && formik.touched.description ?
            <div className="invalid-feedback">
              {formik.errors.description}
              Please provide a valid description.
            </div> :
            <div className="valid-feedback">
              Looks good!
            </div>
          }
        </div>

        <div className="col-md-4 ms-5 mt-3">
          <label htmlFor="address" className="form-label"> Address </label>
          <input
            id="address"
            name="address"
            type="text"
            {...formik.getFieldProps("address")}
            className={`form-control ${formik.touched.address ? (formik.errors.address ? 'is-invalid' : 'is-valid') : null}`}
            required
          />
          {formik.errors.address && formik.touched.address ?
            <div className="invalid-feedback">
              {formik.errors.address}
              Please provide a valid address.
            </div> :
            <div className="valid-feedback">
              Looks good!
            </div>
          }
        </div>

        <div className="col-12 ms-5 mt-3">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>

      </form>

    </>
  )
}

export default function NewPlace() {
  return (
    <>
      <FormikForm />
    </>
  )
}
