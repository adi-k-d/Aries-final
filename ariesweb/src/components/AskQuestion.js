import { useState } from "react"
import React from "react"

function AskQuestion() {
  const [inputs, setInputs] = useState({})
  const [myDoctor, setMyDoctor] = useState("Madhumita Mazumdar")

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs, myDoctor)
  }

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = src

      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const payRazorpay = async (amount) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

    if (!res) {
      alert("no")
      return
    }

    const options = {
      key: "rzp_test_wkvegiM9Q60sJT", // Enter the Key ID generated from the Dashboard
      amount: "49900", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Aries Online",
      description: "Paying ",
      image: "https://example.com/your_logo",

      handler: function (response) {
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
        alert("successful")
      },
      prefill: {
        name: "Aries Online Clinic",
        email: "rondeep2013@gmail.com",
        contact: "7002616393",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Brief Description of you problem:
        <input
          type="text"
          name="desc"
          value={inputs.desc || ""}
          onChange={handleChange}
        />
      </label>
      <label>Rs 499</label>
      <select>
        <option value="mdm" selected>
          Madhumita Mazumdar
        </option>
        <option value="kkd">Kishore Kumar Das</option>
      </select>
      <button onClick={() => payRazorpay(499)}>Pay</button>

      <input type="submit" />
    </form>
  )
}

export default AskQuestion
