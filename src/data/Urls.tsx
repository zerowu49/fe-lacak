const internal = false
let baseurl
if (internal) {
    baseurl = 'http://192.168.18.33:3000/api/'
  } else {
    baseurl = 'http://localhost:3000/api/'
  }

export const productList = baseurl + 'supplies'
export const productAdd = baseurl + 'add-supply'
export const productHistory = baseurl + 'supply-history/'
export const productTransfer = baseurl + 'transfer-supply'
export const registerUser = baseurl + 'register-user'
export const agentList = baseurl + 'users'
export const confirm = baseurl + 'confirm'

