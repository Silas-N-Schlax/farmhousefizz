import React from 'react'
import { EventMenu } from './eventMenu'

const TITLE = "Event Menu"
const NOTE = "Order at the trailer • Cash, card & tap accepted"
const ITEM_OVERRIDES = []

export class EventMenuX extends React.Component {
  render() {
    return <EventMenu title={TITLE} note={NOTE} itemOverrides={ITEM_OVERRIDES} />
  }
}
