import React, { useState, useEffect } from "react";

const SignUpForm = props => {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    villageName: "",
    loanAmount: "",
    currentAmount: "",
    loanInitiation: "",
    loanDue: "",
    bagsOfMaize: "",
    goal: ""
  });

  useEffect(() => {
    setMember({
      name: member.firstName,
      name: member.lastName
    });
  }, []);
  // this makes your searchbar let you type
  const handleChanges = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    // console.log (member) to have form show up in console
    // console.log(member);
    e.preventDefault();
    props.memberUpdate(member);
    // setMember({ name: "", email: "", role: "" });
  };

  console.log(member);

  return (
    <form onSubmit={submitForm}>
      <label html="title">First Name</label>
      {member.name}
      <input
        onChange={e => handleChanges(e)}
        id="title"
        name="firstName"
        type="text"
        placeholder="title"
        value={member.firstName}
      />
      <label html="name">Last Name</label>
      <input
        onChange={handleChanges}
        id="title"
        name="lastName"
        type="text"
        placeholder="title"
        value={member.lastName}
      />
      <div>
        <label html="name">Village Name</label>
        <input
          onChange={handleChanges}
          id="title"
          name="villageName"
          type="text"
          placeholder="title"
          value={member.villageName}
        />
      </div>

      <label html="number">Loan Amount</label>
      <input
        onChange={handleChanges}
        id="title"
        name="loanAmount"
        type="number"
        placeholder="title"
        value={member.loanAmount}
      />
      <label html="number">Current Amount</label>
      <input
        onChange={handleChanges}
        id="title"
        name="currentAmount"
        type="number"
        placeholder="title"
        value={member.currentAmount}
      />

      {/* date  */}
      <label html="role">Loan Initiation Date</label>
      <input
        onChange={handleChanges}
        id="title"
        name="loanInitiationDate"
        type="date"
        placeholder="title"
        value={member.loanInitiation}
      />
      <label html="role">Loan Due Date</label>
      <input
        onChange={handleChanges}
        id="title"
        name="loanDue"
        type="date"
        placeholder="title"
        value={member.loanDue}
      />
      <label html="role">Bags of Maize</label>
      <input
        onChange={handleChanges}
        id="title"
        name="bagsOfMaize"
        type="number"
        placeholder="title"
        value={member.bagsOfMaize}
      />

      <label html="role">Goal</label>
      <input
        onChange={handleChanges}
        id="title"
        name="goal"
        type="number"
        placeholder="title"
        value={member.goal}
      />

      {/* Start radio Buttons */}

      {/* <div>
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
      </div> */}

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

// ending form

export default SignUpForm;
