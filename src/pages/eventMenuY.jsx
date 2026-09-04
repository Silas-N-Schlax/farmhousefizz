import React from 'react'
import { EventMenu } from './eventMenu'

const TITLE = "Event Menu"
const NOTE = "Order at the tent • Cash, card & tap accepted"
const ITEM_OVERRIDES = []

export class EventMenuY extends React.Component {
  render() {
    return <EventMenu title={TITLE} note={NOTE} itemOverrides={ITEM_OVERRIDES} />
  }
}
