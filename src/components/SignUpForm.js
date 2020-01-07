import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    age: ""
  });

  // this makes your searchbar let you type
  const handleChanges = event => {
    // event.preventDefault();
    // props.addNewMember(member);
    // setMember({ ...member, [event.target.name]: event.target.value })
    setMember({
      ...member,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = event => {
    // console.log (member) to have form show up in console
    // console.log(member);
    event.preventDefault();
    props.memberUpdate(member);
    // setMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label html="name">Name</label>
      <input
        onChange={handleChanges}
        id="title"
        name="name"
        type="text"
        placeholder="title"
        value={member.name}
      />
      <div>
        <label html="email">Email</label>
        <input
          onChange={handleChanges}
          id="title"
          name="email"
          type="text"
          placeholder="title"
          value={member.email}
        />
      </div>

      <label html="role">Age</label>
      <input
        onChange={handleChanges}
        id="title"
        name="role"
        type="text"
        placeholder="title"
        value={member.age}
      />

      {/* Start radio Buttons */}
      {/* <div>
        <input type="radio" id="title" name="done" value="done" />
        <label for="button">Done</label>
      </div> */}

      <div>
        <h3>
          <label html="Gender">Gender</label>
        </h3>
      </div>
      <div>
        <input type="radio" id="title" name="name" value="scheduled" />
        <label for="button">Female</label>
      </div>

      <div>
        <input type="radio" id="title" name="name" value="ignored" />
        <label for="button">Male</label>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

// ending form

export default Form;
