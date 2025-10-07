import React from 'react'

export default function Input({ label, type, ...props }) {
  return (
    <div className="form__group">
      <label htmlFor={label} className="form__label">{label}</label>
      <input
        className='form__input'
        type={type}
        id={label}
        name={label}
        placeholder={label}
        {...props}
        required
      />
    </div>
  )
}
