import React from 'react'
import ListItem from 'material-ui/List/ListItem'
import TextField from 'material-ui/TextField'
import TimePicker from 'material-ui/TimePicker'
import FlatButton from 'material-ui/FlatButton'

type Props = {
  onAddTask: React.PropTypes.func
};
export class NewTask extends React.Component {
  props: Props;

  constructor (props) {
    super(props)
    this.state = {newTaskDate: new Date(), newTaskText: ''}
  }

  render () {
    return (<ListItem>
      <TextField id='newTask' style={{width: '80%'}} onChange={this.handleTextChange} onKeyDown={this.handleKeyDown} value={this.state.newTaskText}/>
      <TimePicker onChange={this.handleDateChange} style={{display: 'inline-block', width: '10%'}} textFieldStyle={{width: '100%'}}
        value={this.state.newTaskDate}
        format='24hr'
      />
      <FlatButton onTouchTap={this.handleAddTask} label='Add' style={{width: '10%', display: 'inline-block'}} primary/>
    </ListItem>)
  }

  handleAddTask = () => {
    this.props.onAddTask({name: this.state.newTaskText, date: this.state.newTaskDate.getTime()})
    this.setState({newTaskText: ''})
  }

  handleTextChange = (e) => {
    this.setState({newTaskText: e.target.value})
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleAddTask()
    }
  }

  handleDateChange = (e, date) => {
    this.setState({newTaskDate: date})
  }
}

export default NewTask

