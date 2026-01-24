

export function Input({ type = 'text', placeholder = '', value, onChange, required = false, half = false, honeypot = false, ...rest }) {
  let inputClass = half ? 'custom-input half' : 'custom-input'
  if (honeypot) inputClass += ' honeypot'

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