import React from 'react'
import { Card } from '../components/card'


export class Cards extends React.Component {
  get height() { return this.props.height }
  get data() { return this.props.data !== undefined ? this.props.data : {} }
  get link() { return this.props.link === undefined ? false : this.props.link }
  get darker() { return this.props.darker === undefined ? false : this.props.darker }

  render() {
    if (this.link === true) {
      return (
        <div className="card-grid">
        {this.data.map((item, index) => {
          return <Card
            key={index}
            title={item.title}
            desc={item.desc}
            height={this.height}
            link={true}
            linkText={item.text}
            linkUrl={item.url}
            darker={this.darker}
          ></Card>
        })}
        </div>
      )
    } else {
      return (
        <div className="card-grid">
        {this.data.map((item, index) => {
          return <Card
            key={index}
            title={item.title}
            desc={item.desc}
            height={this.height}
            darker={this.darker}
          ></Card>
        })}
        </div>
      )
    }
  }
}
