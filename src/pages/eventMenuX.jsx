import React from 'react'
import { EventMenu } from './eventMenu'

const ITEM_OVERRIDES = []

export class EventMenuX extends React.Component {
  render() {
    return <EventMenu title="Event Menu" itemOverrides={ITEM_OVERRIDES} />
  }
}
