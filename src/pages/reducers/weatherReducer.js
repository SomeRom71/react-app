export const initialState = {
  weather: '',
  cityList: []
}

export function weatherReducer(state = initialState, action) {
  switch (action.type) {

    case 'SET_WEATHER':
      return {...state, weather: action.payload}

    case 'ADD_CITY':
      return {...state, cityList: action.payload}

    default:
      return state
  }
}
