import React from "react";

const Form = (props) => {
  return (
    <div>
      <form action="">
        <p>
          <label>First Name</label>
          <input type="text" name="firstName" />
        </p>
        <p>
          <label>Lasat Name</label>
          <input type="text" name="lastName" />
        </p>
        <p>
          <label>Sport</label>
          <input type="text" name="sport" />
        </p>
        <p>
          <label>Team</label>
          <input type="text" name="team" />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
