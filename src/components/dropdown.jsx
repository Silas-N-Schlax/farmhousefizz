

export function Dropdown({ options = [], onSelect, name, required = false }) {
  return (
    <div className="select-wrap">
      <select
        name={name}
        className="custom-dropdown"
        onChange={(e) => onSelect && onSelect(e.target.value)}
        defaultValue=""
        {...(required ? { required: true } : {})}
      >
        <option value="" disabled>
          Select an option
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