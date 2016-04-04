import React, { PropTypes } from 'react'
import '../../styles/core.scss'
import AppBar from 'material-ui/lib/app-bar'

export class CoreLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div>
        <AppBar title='TodoMVC - Redux - RethinkDB on Kubernetes' showMenuIconButton={false} />
        {this.props.children}
      </div>
    )
  }
}

export default CoreLayout
