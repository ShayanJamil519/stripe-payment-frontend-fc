import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='payment__container'>
        <Link to={"/"} style={
            {
                textAlign: 'left',
                color: 'white',
                fontSize: '20px',
                padding: '10px',
            }
        } >Home</Link>
        <h1>Your payment is successful</h1>
        </div>
  )
}

export default Success