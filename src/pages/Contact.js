import React from 'react';
import '../CSS/App.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="box">
      <form id="contact" onSubmit={handleSubmit}>
        <h3>Quick Contact</h3>
        <h4>Contact us today, and get a reply within 24 hours!</h4>
        <fieldset>
          <input placeholder="Your name" type="text" tabIndex={1} autoFocus />
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address" type="email" tabIndex={2} autoFocus />
        </fieldset>
        <fieldset>
          <input placeholder="Your Phone Number" type="tel" tabIndex={3} />
        </fieldset>
        <fieldset>
          <input placeholder="Your Web Site starts with http://" type="url" tabIndex={4} autoComplete='on' />
        </fieldset>
        <fieldset>
          <textarea placeholder="Type your Message Here...." tabIndex={5} defaultValue={""} />
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
