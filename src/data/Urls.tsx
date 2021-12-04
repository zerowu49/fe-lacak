const internal = false
let baseurl
if (internal) {
    baseurl = 'http://192.168.18.33:3000/api/'
  } else {
    baseurl = 'http://localhost:3000/api/'
  }

export const productList = baseurl + 'supplies'
export const registerUser = baseurl + 'register-user'
export const agentList = baseurl + 'users'

