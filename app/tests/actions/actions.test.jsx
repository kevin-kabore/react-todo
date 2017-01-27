import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
var expect = require('expect')

import firebase, {firebaseRef} from 'app/firebase/'
var actions = require('actions')

var createMockStore = configureMockStore([thunk])

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
      todo: {
        id: '123',
        text: 'Some text',
        completed: false,
        createdAt: 12345
      }
    }
    var res = actions.addTodo(action.todo)
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

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      })
      done()
    }).catch(done)
  })

  it('Should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: {completed: false}
    }
    var res = actions.updateTodo(action.id, action.updates)
    expect(res).toEqual(action)
  })

  describe('Tests with firebase todos', () => {
    var testTodoRef;
    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push()

      testTodoRef.set({
        text: 'Something todo',
        completed: false,
        completedAt: 12344556
      }).then(() => done())
    })

    afterEach((done) => {
      testTodoRef.remove(() => done())
    })
    it('Should togge todo and update Todo action', (done) => {
      const store = createMockStore({})
      const action = actions.startToggleTodo(testTodoRef.key, true)

      store.dispatch(action).then(() => {
        const mockActions = store.getActions()

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        })

        expect(mockActions[0].updates).toInclude({
          completed: true
        })

        expect(mockActions[0].updates.completedAt).toExist()
        done()
      }, done)
    })
  })
})
