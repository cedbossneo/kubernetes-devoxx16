import React from 'react'
import ListItem from 'material-ui/lib/lists/list-item'
import TextField from 'material-ui/lib/text-field'
import TimePicker from 'material-ui/lib/time-picker'

type Props = {
  onAddTask: React.PropTypes.func
};
export class NewTask extends React.Component {
  props: Props;

  constructor (props) {
    super(props)
    this.state = {newTaskDate: new Date()}
  }

  render () {
    return (<ListItem>
      <TextField id='newTask' style={{width: '90%'}} onKeyDown={this.handleAddTask}/>
      <TimePicker onChange={this.handleDateChange} style={{display: 'inline-block', width: '10%'}} textFieldStyle={{width: '100%'}}
        value={this.state.newTaskDate}
        format='24hr'
      />
    </ListItem>)
  }

  handleAddTask = (e) => {
    if (e.keyCode === 13) {
      this.props.onAddTask({name: e.target.value, date: this.state.newTaskDate.getTime()})
      e.target.value = ''
    }
  }

  handleDateChange = (e, date) => {
    this.setState({newTaskDate: date})
  }
}

export default NewTask

