import { 
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from '../modules/rootReducer'
import rootEpic from '../modules/rootEpic'

const epicMiddleware = createEpicMiddleware(rootEpic)

export default () => {
  const composeEnhancers = process.env.NODE_ENV === 'production' 
    ? compose
    : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)

  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  )
}