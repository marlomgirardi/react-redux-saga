import React from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios'
import reducers from './reducers/index'

import Info from './Info'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

function* ola() {
  console.log('Hello from saga')
  const dados = yield axios.get('http://httpbin.org/ip')
}

sagaMiddleware.run(ola)

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Info />
      </div>
    </Provider>
  )
}

export default App
