import { put, call } from 'redux-saga/effects'
import { loadDataSuccess } from '../actions'

function* getIP(axios) {
  const response = yield call(axios.get, 'https://httpbin.org/ip')
  yield put(loadDataSuccess(response.data.origin))
}

export default getIP
