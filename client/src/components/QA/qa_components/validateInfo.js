export default function validateInfo(values) {
  let errors = {};
    if (!values.name.trim()) {
      errors.name = "Nickname required"
    } else if (values.name.length >= 60) {
      errors.name = "Nickname needs to be shorter than 60 characters"
    }

    //email
    if(!values.email) {
      errors.email = "Email required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email address is invalid"
    }

    if(!values.body) {
      errors.body = 'Input required'
    }
    return errors
}

