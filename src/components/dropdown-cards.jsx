import React from 'react'
import { ArrowUp } from 'lucide-react'

export class DropdownCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  toggleOpen() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { data, index } = this.props
    const { open } = this.state

    return (
      <>
        <div
          className="faq__item"
          id={index}
        >
          <button
            className={`faq__question ${open ? 'faq__question--open' : ''}`}
            aria-expanded={open}
            aria-label="Toggle faq"
            onClick={this.toggleOpen.bind(this)}
          >
            {data.question}
            <ArrowUp className='faq__marker' />
          </button>
          <div className={`faq__answer ${open ? 'faq__answer--open' : ''}`}>
            {data.answer.map((item, index) => (
              <p id={index}>{item}</p>
            ))}
          </div>
        </div>
      </>
    )
  }
}
