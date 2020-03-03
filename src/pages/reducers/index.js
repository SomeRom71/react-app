import { combineReducers } from 'redux'
import { weatherReducer } from './weatherReducer'
import { todoReducer } from './todoReducer'

export const rootReducer = combineReducers({
  weather: weatherReducer,
  todo: todoReducer,
})
