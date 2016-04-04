import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import List from 'material-ui/lib/lists/list'
import Divider from 'material-ui/lib/divider'
import {actions} from 'redux/modules/tasks'
import Task from 'components/Tasks/Task'
import NewTask from 'components/Tasks/NewTask'

type Props = {
  tasks: React.PropTypes.array,
  addTask: React.PropTypes.func,
  deleteTask: React.PropTypes.func,
  completeTask: React.PropTypes.func
}
export class Tasks extends React.Component {
  props: Props;

  get tasks () {
    return this.props.tasks.map((task, index) => <Task onCompleteTask={this.props.completeTask} onDeleteTask={this.props.deleteTask} key={index} task={task} />)
  }

  render () {
    return (
      <List>
        {this.tasks}
        <Divider/>
        <NewTask onAddTask={this.props.addTask}/>
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {tasks: state.tasks}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks)
