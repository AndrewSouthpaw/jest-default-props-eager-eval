import React from 'react'
import moment from 'moment'

export class Date extends React.Component {
  render() {
    return (<p>Date!</p>)
  }
}

Date.defaultProps = {
  startDate: moment.utc('1950-01-01'),
}
