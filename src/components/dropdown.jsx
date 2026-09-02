import React from 'react'

export class Dropdown extends React.Component {
  get options() { return this.props.options || [] }
  get required() { return this.props.required || false }

  onSelectChange(e) {
    if (this.props.onSelect) this.props.onSelect(e.target.value)
  }

  render() {
    return (
      <div className="contact-form__select">
        <select
          name={this.props.name}
          className="form-control"
          onChange={this.onSelectChange.bind(this)}
          defaultValue=""
          {...(this.required ? { required: true } : {})}
        >
          <option value="" disabled>
           {this.props.label || "Select an Option"}
          </option>
          {this.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )
  }
}
