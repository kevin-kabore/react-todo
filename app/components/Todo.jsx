var React = require('react')
var {connect} = require('react-redux')
var actions = require('actions')
var moment = require('moment')

export var Todo = React.createClass({
  render: function(){
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo'
    var renderDate = () => {
      var message = 'Created ';
      var timeStamp = createdAt;


      if (completed) {
        message = 'Completed ';
        timeStamp = completedAt

      };

      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a')
    };
    return (
      <div className={todoClassName} onClick={() => {
          // this.props.onToggle(id)
          dispatch(actions.startToggleTodo(id, !completed))
        }}>
        <div>
          <input type="checkbox" defaultChecked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo_subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
})

export default connect()(Todo);
