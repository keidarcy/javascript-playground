import React from 'react'

const Select = ({ error, name, label, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <select {...rest} name={name} className="custom-select">
        <option value="" />
        {options.map((o) => (
          <option key={o._id} value={o._id}>
            {o.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  )
}

export default Select
