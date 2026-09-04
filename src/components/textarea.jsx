import React from 'react'

export class Textarea extends React.Component {
  render() {
    const { label, placeholder = '', value, onChange, required = false, rows = 4, name, ...rest } = this.props
    const id = `field-${name}`
    const props = {
      id,
      name,
      placeholder,
      className: 'form-control',
      rows,
      'aria-required': required,
      ...rest,
    }
    if (value !== undefined) props.value = value
    if (onChange) props.onChange = onChange
    if (required) props.required = true

    return (
      <div className="form-field">
        <label className="form-field__label" htmlFor={id}>
          {label}
          {required && <span className="form-field__required" aria-hidden="true"> *</span>}
        </label>
        <textarea {...props}></textarea>
      </div>
    )
  }
}
