import React from "react";
import "./Contactform.css";

function Contactform() {
  return (
    <>
      <div className="form">
        <form>
          <label>Your Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Subject</label>
          <input type="text" />
          <label>Messege</label>
          <textarea rows="6" placeholder="Type your messege here"></textarea>
          <button className="btn" style={{ marginTop: "10px" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contactform;
