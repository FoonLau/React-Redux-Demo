export default value => {
  if (!value) {
    return 'First name is required'
  } else if (!/^([a-z]+)+$/i.test(value)) {
    return 'First name should contain only small and capital letters'
  }
}
