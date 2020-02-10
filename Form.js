import React from "react";

// these take user inputted data
const Form = props => (
  <form onSubmit={props.getInfo}>
    <input type="text" name="leaveCity" placeholder="City..."/>
    <input type="text" name="leaveCountry" placeholder="Country..."/>
    <div>
    </div>
    <input type="text" name="city" placeholder="Destination city..."/>
    <input type="text" name="country" placeholder="Destination country..."/>
    <button>Search</button>
  </form>
);

export default Form;
