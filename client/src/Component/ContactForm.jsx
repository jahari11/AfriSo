import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <div className="form-header">
            <h4>Contact Us</h4>
            <p>If you have any questions or encounter any issues with your order, please don't hesitate to reach out to us. Our team at Afri is here to assist you and ensure your experience is smooth and enjoyable. Your satisfaction is our top priority.</p>
        </div>
        <div className="form-container">
            <form action="">
                <div className="name">
                    <label for="name"></label>
                    <input type="text" placeholder='Name' name='name' required />
                </div>
                <div className="email">
                    <label for="email"></label>
                    <input type="text" placeholder='E-mail' name='email' required />
                </div>
                <div className="order">
                    <label for="order"></label>
                    <input type="text" placeholder='Order Number' name='order-number' />
                </div>
                <div className="message">
                    <label for=""></label>
                    <textarea name="message" id="message-input" cols="30" rows="5" placeholder='Your Message'></textarea>
                </div>
            </form>
            <div className="submit">
                <button>Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default ContactForm