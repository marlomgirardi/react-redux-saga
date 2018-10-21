import React from 'react'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers/index'
import indexSaga from './sagas/index'

import Info from './Info'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(indexSaga)

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
