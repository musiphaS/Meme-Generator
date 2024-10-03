import React from 'react';
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"

const auth = getAuth();
const email = document.getElementById("email");
const password = document.getElementById("password");
const signUpBtn = document.getElementById("signup-btn");


const ContactForm = () => {
    const signUpButtonPressed = async (e) => {
        e.preventDefault();
        console.log('Sign up button pressed!');
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
          console.log('User credential:', userCredential);
        } catch (error) {
          console.error('Error:', error.message);
        }
      };

signUpBtn.addEventListener("click", signUpButtonPressed);
  return (
    <section id="contact">
      <h2 className="title">Get in Touch</h2>
      <div className="contact-container">
        <form className="contact-centre">
          <div className="contact-centre-title">
            <hr />
          </div>
          <div className="form-inputs">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-inputs"
              id="email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="contact-inputs"
              id="password"
              required
            />
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;