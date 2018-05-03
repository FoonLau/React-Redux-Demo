export default value => {
  if (!value) {
    return 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Value should be a valid email'
  }
}
