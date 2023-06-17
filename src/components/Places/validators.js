const placeValidator = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 30) {
    errors.title = "Must be 30 characters or less";
  }

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length > 100) {
    errors.description = "Must be 100 characters or less";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  return errors;
};

export const signupFormValidator = (values) => {
  const errors = {};

  if(!values.name){
    errors.name = "Required";
  }else if(values.name.length > 30){
    errors.name = "Must be 30 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (values.email.length > 30) {
    errors.email = "Must be 30 characters or less";
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Please enter a valid email address"
  }

  
  if (!values.password) {
    errors.password = "Required";
  }else if(values.password.length > 20){
    errors.password = "Must keep 20 or less characters";
  }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(values.password)){
    // errors.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:";
  }
  
  return errors;
};

export const loginFormValidator = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (values.email.length > 30) {
    errors.email = "Must be 30 characters or less";
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Please enter a valid email address"
  }

  
  if (!values.password) {
    errors.password = "Required";
  }else if(values.password.length > 30){
    errors.password = "Must keep 20 or less characters";
  }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(values.password)){
    // errors.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:";
  }
  
  return errors;
};


export default placeValidator;