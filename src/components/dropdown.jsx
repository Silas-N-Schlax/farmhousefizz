import React from 'react'

export class Dropdown extends React.Component {
  get options() { return this.props.options || [] }
  get required() { return this.props.required || false }

  onSelectChange(e) {
    if (this.props.onSelect) this.props.onSelect(e.target.value)
  }

  render() {
    const id = `field-${this.props.name}`
    return (
      <div className="form-field">
        <label className="form-field__label" htmlFor={id}>
          {this.props.label}
          {this.required && <span className="form-field__required" aria-hidden="true"> *</span>}
        </label>
        <div className="contact-form__select">
          <select
            id={id}
            name={this.props.name}
            className="form-control"
            onChange={this.onSelectChange.bind(this)}
            defaultValue=""
            aria-required={this.required}
            {...(this.required ? { required: true } : {})}
          >
            <option value="" disabled>
             Select an option&hellip;
            </option>
            {this.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}
