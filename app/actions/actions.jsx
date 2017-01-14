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

//ToggleTodo takes id
export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
