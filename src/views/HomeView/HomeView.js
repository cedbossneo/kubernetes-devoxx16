import React from 'react'
import Tasks from 'containers/Tasks'
import Paper from 'material-ui/Paper'

export class HomeView extends React.Component {
  render () {
    return (
      <div style={{margin: '50px'}}>
        <Paper>
          <Tasks/>
        </Paper>
      </div>
    )
  }
}

export default HomeView
