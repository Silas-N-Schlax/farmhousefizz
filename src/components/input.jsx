

export function Input({ type = 'text', placeholder = '', value, onChange, required = false, half = false, honeypot = false, ...rest }) {
  let inputClass = half ? 'form-control form-control--half' : 'form-control'
  if (honeypot) inputClass += ' contact-form__honeypot'

  const props = {
    type,
    placeholder,
    className: inputClass,
    required,
    ...rest,
  }

  // only add controlled value/onChange when a value is explicitly provided
  if (value !== undefined) props.value = value
  if (onChange) props.onChange = onChange

  return <input {...props} />
}