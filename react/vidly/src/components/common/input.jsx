import React from 'react'

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={label}>{label}</label>
        <input {...rest} className="form-control" name={name} />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  )
}

export default Input
