import { put, call } from 'redux-saga/effects'
import { loadDataUASuccess } from '../actions'

function* getUA(axios) {
  const response = yield call(
    axios.get,
    'https://httpbin.org/user-agent'
  )
  yield put(loadDataUASuccess(response.data['user-agent']))
}

export default getUA
