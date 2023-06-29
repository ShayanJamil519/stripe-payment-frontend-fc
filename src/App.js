import React, {  useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [amount, setAmount]=useState("")
 
  const handlePayment = async () => {

    if (amount === "") {
         alert('Please enter amount to pay')
         return
        }

    const payment = await axios.post(
      // 'http://localhost:5000/stripe-checkout',    // localhost:5000
      'https://precious-clam-kit.cyclic.app/stripe-checkout',   // deployed on cyclic
      {
        amount,
      }
    );

    const paymentUrl = payment.data.url;

    // Open the payment URL on the same page
    window.location.href = paymentUrl;
  };

  return (
    <div className="payment__container">
      <div className="pay">

      <label >Enter amount to pay !</label>
      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
      <button id="submitButton" onClick={handlePayment}>
        Place Order
      </button>
        </div>
    </div>
  );
}

export default App;

