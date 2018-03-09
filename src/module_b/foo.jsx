import React from 'react'
import moment from 'moment'
import { Button } from '../module_a'

export class Foo extends React.Component {
  render() {
    return (
      <div>
        {moment()}
        <Button />
      </div>
    )
  }
}
