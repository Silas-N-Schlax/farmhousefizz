import React from 'react'

export class Input extends React.Component {
  render() {
    const { type = 'text', label, placeholder = '', value, onChange, required = false, half = false, honeypot = false, name, ...rest } = this.props
    const id = `field-${name}`
    let inputClass = half ? 'form-control form-control--half' : 'form-control'
    if (honeypot) inputClass += ' contact-form__honeypot'

    const props = {
      id,
      name,
      type,
      placeholder,
      className: inputClass,
      required,
      'aria-required': required,
      ...rest,
    }

    // only add controlled value/onChange when a value is explicitly provided
    if (value !== undefined) props.value = value
    if (onChange) props.onChange = onChange

    if (honeypot) {
      return (
        <input
          {...props}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      )
    }

    return (
      <div className={half ? 'form-field form-field--half' : 'form-field'}>
        <label className="form-field__label" htmlFor={id}>
          {label}
          {required && <span className="form-field__required" aria-hidden="true"> *</span>}
        </label>
        <input {...props} />
      </div>
    )
  }
}
