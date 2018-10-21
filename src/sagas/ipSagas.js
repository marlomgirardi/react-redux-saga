import axios from 'axios'
import { put } from 'redux-saga/effects'
import { loadDataSuccess } from '../actions'

function* getIP() {
  const response = yield axios.get('https://httpbin.org/ip')
  yield put(loadDataSuccess(response.data.origin))
}

export default getIP
