var expect = require('expect')
var actions = require('actions')


describe('Actions', () => {
  it('Should generate searchText action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }
    var res = actions.setSearchText(action.searchText)
    expect(res).toEqual(action);
  })

  it('Should generate TOGGLE_SHOW_COMPLETED action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.toggleShowCompleted()
    expect(res).toEqual(action)
  })

  it('Should generate ADD_TODO action', () =>{
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    }
    var res = actions.addTodo(action.text)
    expect(res).toEqual(action)
  })

  it('Should generate ADD_TODOS action', () => {
    var todos = [{
      id: 15,
      text: 'Anything',
      completed: false,
      completedAt: undefined,
      createdAt: 1500
    }]
    var action = {
      type: 'ADD_TODOS',
      todos: todos
    }
    var res = actions.addTodos(todos);
    expect(res).toEqual(action)
  })

  it('Should generate toggleTodo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 2
    }
    var res = actions.toggleTodo(action.id)
    expect(res).toEqual(action)
  })
})
