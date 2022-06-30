import './index.css'
import { loggerMiddleware } from './middleware/loggerMiddleware'
import { createStore, applyMiddleware } from 'redux'

const middleware = applyMiddleware(loggerMiddleware)

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENTER':
      return state + action.payload;
    case 'DECREMENTER':
      return state - action.payload;
    default:
      return state;
  }
}

const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log("etat courant", store.getState())
})


store.dispatch({
  type: 'INCREMENTER',
  payload: 1
})

store.dispatch({
  type: 'INCREMENTER',
  payload: 1
})

store.dispatch({
  type: 'DECREMENTER',
  payload: 2
})