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

  it('Should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.toggleShowCompleted()
    expect(res).toEqual(action)
  })

  it('Should generate add Todo action', () =>{
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    }
    var res = actions.addTodo(action.text)
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