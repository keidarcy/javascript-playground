import React from 'react'

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      onChange={(e) => onChange(e.currentTarget.value)}
      value={value}
      placeholder="Search...."
      className="form-control my-3"
      type="text"
      name="query"
    />
  )
}

export default SearchBox
