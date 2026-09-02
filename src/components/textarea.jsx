
export function Textarea({ placeholder = '', value, onChange, required = false, rows = 4, ...rest }) {
  const props = {
    placeholder,
    className: 'form-control',
    rows,
    ...rest,
  }
  if (value !== undefined) props.value = value
  if (onChange) props.onChange = onChange
  if (required) props.required = true

  return <textarea {...props}></textarea>
}