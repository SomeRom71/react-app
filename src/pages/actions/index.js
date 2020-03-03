export function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    payload: todo,
  }
}

export function deleteTodo(todoIndex) {
  return {
    type: 'DELETE_TODO',
    payload: todoIndex,
  }
}

export function changeTodo(value, index) {
  return {
    type: 'CHANGE_TODO',
    payload: {value, index},
  }
}

export function changeStateTodo(todoIndex) {
  return {
    type: 'CHANGE_STATE_TODO',
    payload: todoIndex,
  }
}

export function setWeather(weather) {
  return{
    type: "SET_WEATHER",
    payload: weather
  }
}

export function addCity(cityList){
  return {
    type: "ADD_CITY",
    payload: cityList
  }
}
