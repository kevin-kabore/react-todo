var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();

    var todoString = this.refs.todoText.value

    if (todoString.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoString)
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function(){
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="What do you want to add?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
})

module.exports = AddTodo;
