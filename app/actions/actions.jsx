export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

//ToggleShowCompleted action generator
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}
export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

//ToggleTodo takes id
export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
