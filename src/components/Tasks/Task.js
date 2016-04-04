import React from 'react'
import ActionDelete from 'material-ui/lib/svg-icons/action/delete'
import IconButton from 'material-ui/lib/icon-button'
import ListItem from 'material-ui/lib/lists/list-item'
import Time from 'react-time'

type Props = {
  task: React.PropTypes.object,
  onDeleteTask: React.PropTypes.func,
  onCompleteTask: React.PropTypes.func
};
export class Task extends React.Component {
  props: Props;

  render () {
    var task = this.props.task
    var now = new Date().getTime()
    var date
    if (task.done) {
      date = <span>Done at <Time value={new Date(task.doneDate)} titleFormat='YYYY/MM/DD HH:mm' /> {(task.date > task.doneDate) ? 'ahead of' : 'instead of'} <Time value={new Date(task.date)} titleFormat='YYYY/MM/DD HH:mm' /></span>
    } else {
      date = <Time value={new Date(task.date)} titleFormat='YYYY/MM/DD HH:mm' relative />
    }
    return (
      <ListItem onTouchTap={this.handleCompleteTask} rightIconButton={
        <IconButton onTouchTap={this.handleDeleteTask}>
          <ActionDelete color='red'/>
        </IconButton>
      } style={{color: (!task.done && now > task.date || task.done && task.doneDate > task.date) ? 'red' : 'inherit', textDecoration: task.done ? 'line-through' : 'none'}} primaryText={task.name} secondaryText={date}/>
    )
  }

  handleDeleteTask = () => {
    this.props.onDeleteTask(this.props.task)
  }

  handleCompleteTask = () => {
    this.props.onCompleteTask(this.props.task)
  }
}

export default Task

