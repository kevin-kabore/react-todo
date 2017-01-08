var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var TodoApp = require('TodoApp')

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  });

  it('should add Todo to the todos state on handleAddTodo', () => {
    var todoText = 'testText'
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []})
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

    //Expecct createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number')
  })

  it('it should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'example text',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);

    //expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number')
  });

  it('it should toggle todo completed from completed to incompleted', () => {
    var todoData = {
      id: 12,
      text: 'example text',
      completed: true,
      createdAt: 0,
      completedAt: 1000
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(12);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined)
  });
});
