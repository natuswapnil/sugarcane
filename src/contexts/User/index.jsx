import React from "react"
import { reducer, initialState } from "./reducer"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import dataService from '../../services/data-service'
let store = createStore(reducer, initialState, applyMiddleware(dataService))

export const UserContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

export const UserProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}