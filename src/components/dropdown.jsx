

export function Dropdown({ options = [], onSelect, name, label, required = false }) {
  return (
    <div className="contact-form__select">
      <select
        name={name}
        className="form-control"
        onChange={(e) => onSelect && onSelect(e.target.value)}
        defaultValue=""
        {...(required ? { required: true } : {})}
      >
        <option value="" disabled>
         {label || "Select an Option"}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}