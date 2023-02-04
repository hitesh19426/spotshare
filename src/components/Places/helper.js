const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 30) {
    errors.title = "Must be 20 characters or less";
  }

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length > 100) {
    errors.description = "Must be 20 characters or less";
  }

  if (!values.address) {
    errors.address = "Required";
  }
  // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.address)) {
  //   errors.address = 'Invalid address address';
  // }

  return errors;
};

export default validate;