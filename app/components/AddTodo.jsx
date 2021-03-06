var React = require('react');
var {connect} = require('react-redux')
var actions = require('actions');


export class AddTodo extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props
    var todoString = this.refs.todoText.value

    if (todoString.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoString))
    } else {
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="What do you want to add?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}


// export var AddTodo = React.createClass({
//   onSubmit: function(e){
//     e.preventDefault();
//     var {dispatch} = this.props
//     var todoString = this.refs.todoText.value
//
//     if (todoString.length > 0) {
//       this.refs.todoText.value = '';
//       dispatch(actions.startAddTodo(todoString))
//     } else {
//       this.refs.todoText.focus();
//     }
//   },
//   render: function(){
//     return (
//       <div className="container__footer">
//         <form ref="form" onSubmit={this.onSubmit}>
//           <input type="text" ref="todoText" placeholder="What do you want to add?"/>
//           <button className="button expanded">Add Todo</button>
//         </form>
//       </div>
//     )
//   }
// })

export default connect()(AddTodo)
