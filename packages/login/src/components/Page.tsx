import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Page = () => {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/profile')
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome!</h1>

      <form onSubmit={handleSubmit}>
        <p>login</p>

        <input />

        <p>password</p>

        <input />

        <p>
          <button type="submit">Ok</button>
        </p>
      </form>
    </div>
  )
}
