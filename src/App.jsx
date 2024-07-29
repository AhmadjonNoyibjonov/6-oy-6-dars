import React from "react";
import "./App.css";
import Form2 from "./components/Form2/index";
import Api from "./components/Api/index";

function App() {
  return (
    <>
      <div className="container">
        <form className="form-box">
          <h2>Create An Account</h2>
          <p>Kindly fill the following details to create your account.</p>
          <input
            type="text"
            placeholder="Enter your full name"
            className="input-field"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Enter your username"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="input-field"
          />
          <textarea
            placeholder="Your Biography"
            className="input-field"
          ></textarea>
          <button type="submit" className="submit-button">
            CREATE ACCOUNT
          </button>
          <p className="footer-text">
            You will receive an email after setting up your account
          </p>
        </form>
      </div>
      <Form2></Form2>
      <Api></Api>
    </>
  );
}

export default App;
