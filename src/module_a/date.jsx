import React from 'react'
import moment from 'moment'

export class Date extends React.Component {
  static defaultProps = {
    foo: console.log('hello I am going to evaluate'),
    startDate: moment.utc('1950-01-01'),
  }

  render() {
    return (<p>Date!</p>)
  }
}
