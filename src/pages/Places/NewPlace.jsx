import { useFormik } from 'formik';
import React, { useState } from 'react'
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
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
            onChange={formik.handleChange}
            value={formik.values.description}
            onBlur={formik.handleBlur}
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
            onChange={formik.handleChange}
            value={formik.values.address}
            onBlur={formik.handleBlur}
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(title, description, address);
  }


  return (
    <>
      <FormikForm />

      <form className="was-validated" onSubmit={handleSubmit}>

        <div className="col-md-4 ms-5 mt-3">
          <label htmlFor="title" className="form-label"> Title </label>
          <input type="text" className="form-control" id="title" value={title} onChange={handleTitleChange} required />
          <div className="valid-feedback">
            Looks good!
          </div>
          <div className="invalid-feedback">
            Please provide a valid title.
          </div>
        </div>

        <div className="col-md-4 ms-5 mt-3">
          <label htmlFor="description" className="form-label"> Description </label>
          <input type="textarea" className="form-control" id="description" value={description} onChange={handleDescriptionChange} required />
          <div className="valid-feedback">
            Looks good!
          </div>
          <div className="invalid-feedback">
            Please provide a valid description.
          </div>
        </div>

        <div className="col-md-4 ms-5 mt-3">
          <label htmlFor="address" className="form-label"> Address </label>
          <input type="text" className="form-control" id="address" value={address} onChange={handleAddressChange} required />
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>

        <div className="col-12 ms-5 mt-3">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </>
  )
}
