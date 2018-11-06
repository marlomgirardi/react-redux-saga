import axios from 'axios'
import { takeLatest } from 'redux-saga/effects'
import getIP from './ipSagas'
import getUA from './uaSagas'

function* index() {
  yield [
    takeLatest('LOAD_DATA_REQUEST', getIP, axios),
    takeLatest('LOAD_DATA_UA_REQUEST', getUA, axios)
  ]
}

export default index
