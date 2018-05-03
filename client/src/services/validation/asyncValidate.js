import { post } from '../ajax'

const asyncValidate = ({ iban }) => {
  return new Promise((resolve, reject) => {
    post('/', { iban }).then(function ({ response }) {
      const { valid } = response

      if (valid) {
        resolve()
      } else {
        reject({ iban: 'IBAN should be valid' })
      }
    }, function (error) {
      const message = error.response ? error.response.message : error.message
      reject({ iban: message })
    })
  })
}

export default asyncValidate