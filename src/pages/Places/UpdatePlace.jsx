import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import "./UpdatePlace.css";
import MyTextInput from '../../components/Places/MyTextInput';
import validate from '../../components/Places/helper';

export default function UpdatePlace(props) {
  const {pid} = useParams();
  const {getPlace} = props;
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const place = getPlace(pid);
    setPlace(place);
  }, [pid, getPlace]);
  
  if(place === null){
    return <div className="d-flex align-items-center">
      <div className="alert alert-warning" role="alert">
        <h4 className="alert-heading">User Error!!</h4>
        <p>No place with the given pid exist. Please do not break my system by trying access unknown place and do something else.</p>
      </div>
    </div>
  }

  return (
    <Formik
      initialValues={{ title: place.title, description: place.description, address: place.address }}
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
