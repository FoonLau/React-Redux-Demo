export default value => {
  if (!value) {
    return 'Last name is required'
  } else if (!/^([a-z]+)+$/i.test(value)) {
    return 'Last name should contain only small and capital letters'
  }
}
