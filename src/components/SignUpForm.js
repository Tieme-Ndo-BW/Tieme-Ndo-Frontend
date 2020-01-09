import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "./photo-1552710307-537199cd41c0.jpeg";
import axios from "axios";
import { Route, Link } from "react-router-dom";

const Page = styled.div`
  height: 100vh;
  background-image: url(${img});
  opacity: 0.9;
`;
const H2 = styled.h2`
  opacity: 1;
`;

const SignUpForm = props => {
  const [member, setMember] = useState({
    FirstName: "",
    LastName: "",
    VillageName: "",
    LoanAmount: 0,
    CurrentAmount: 0,
    LoanInitiation: "",
    LoanDue: "",
    BagsOfMaize: 0,
    Goal: 0
  });

  useEffect(() => {
    axios
      .get(`https://lambda-tmb.herokuapp.com/api/clients`)
      .then(response =>
        // console.log("response", response.data)
        setMember(response.data)
      )
      .catch(error => console.log("error", error));
  }, []);
  console.log(member);
  // setMember({
  //   name: member.firstName,
  //   name: member.lastName,
  //   name: member.villageName,
  //   number: member.loanAmount,
  //   number: member.currentAmount,
  //   number: member.loanInitiation,
  //   date: member.loanDue,
  //   number: member.bagsOfMaize,
  //   number: member.goal

  // this makes your searchbar let you type
  const handleChanges = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
    console.log(e.target);
  };

  const submitForm = e => {
    e.preventDefault();
    axios
      .post(`https://lambda-tmb.herokuapp.com/api/clients`, member)
      .then(response => console.log("response", response))
      .catch(error => console.log("error", error));
  };
  console.log(member);
  // setMember({
  // console.log (member) to have form show up in console
  // console.log(member);
  //     e.preventDefault();
  //   props.memberUpdate(member);
  //   };

  //   console.log(member);

  return (
    <Page>
      <H2>Tieme Ndo Credit Extension Package (CEP)Agreement Form</H2>{" "}
      <div className="page">
        {/* <img src={img} alt="img" /> */}
        <form onSubmit={submitForm}>
          <label html="title">First Name</label>
          {member.name}
          <input
            onChange={e => handleChanges(e)}
            id="title"
            name="FirstName"
            type="text"
            placeholder="title"
            value={member.FirstName}
          />
          <label html="name">Last Name</label>
          <input
            onChange={handleChanges}
            id="title"
            name="LastName"
            type="text"
            placeholder="title"
            value={member.LastName}
          />
          <div>
            <label html="name">Village Name</label>
            <input
              onChange={handleChanges}
              id="title"
              name="VillageName"
              type="text"
              placeholder="title"
              value={member.VillageName}
            />
          </div>

          <label html="number">Loan Amount</label>
          <input
            onChange={handleChanges}
            id="title"
            name="LoanAmount"
            type="number"
            placeholder="title"
            value={member.LoanAmount}
          />
          <label html="number">Current Amount</label>
          <input
            onChange={handleChanges}
            id="title"
            name="CurrentAmount"
            type="number"
            placeholder="title"
            value={member.CurrentAmount}
          />

          {/* date  */}
          <label html="date">Loan Initiation Date</label>
          <input
            onChange={handleChanges}
            id="title"
            name="LoanInitiationDate"
            type="date"
            placeholder="title"
            value={member.LoanInitiation}
          />
          <label html="date">Loan Due Date</label>
          <input
            onChange={handleChanges}
            id="title"
            name="LoanDue"
            type="date"
            placeholder="title"
            value={member.LoanDue}
          />
          <label html="number">Bags of Maize</label>
          <input
            onChange={handleChanges}
            id="title"
            name="BagsOfMaize"
            type="number"
            placeholder="title"
            value={member.BagsOfMaize}
          />

          <label html="number">Goal</label>
          <input
            onChange={handleChanges}
            id="title"
            name="Goal"
            type="number"
            placeholder="title"
            value={member.Goal}
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
            <button type="submit">Make Member</button>

            {/* <button
              type="button"
              onClick={() =>
                props.member(
                  props.FirstName,
                  props.LastName,
                  props.VillageName,
                  props.LoanAmount,
                  props.CurrentAmount,
                  props.LoanInitiation,
                  props.LoanDue,
                  props.BagsOfMaize,
                  props.Goal
                )
              }
            >
              Make a Member!
            </button> */}
          </div>
        </form>
        <Link />
        <Route />
      </div>
    </Page>
  );
};

// ending form

export default SignUpForm;
