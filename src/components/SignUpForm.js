import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "./photo-1552710307-537199cd41c0.jpeg";
import axios from "axios";
import { Route, Link } from "react-router-dom";

const Page = styled.div`
  height: 100vh;
  background-image: url(${img});
  opacity: 0.9;
  position:relative
  align-items: center;
  // background-color: blue;
  
`;
const H2 = styled.h2`
  opacity: 1;
  background-color: #0066cc;
  border-radius: 12px;
  border: 3px solid #e3e3e3;
`;

const Form = styled.form`
  opacity: 1;
  background-color: #0066cc;

  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  border: 3px solid #e3e3e3;
`;

const Links = styled.h3`
  color: white;
  text-decoration: none;
  // font-size: 16px;
`;

const Labels = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
  font-family: Arial;
  font-size: 18px;
`;

const Button = styled.button`
  // width: 123%;
  // padding: 17px;
  box-shadow: -11px -13px 12px -14px #e6e6e6;
  background: linear-gradient(to bottom, #c0caf0 5%, #3820e6 100%);
  background-color: #c0caf0;
  border-radius: 15px;
  border: 3px solid #e3e3e3;
  display: inline-block;
  cursor: pointer;
  color: #1a101a;
  font-family: Arial;
  font-size: 16px;
  padding: 14px 76px;
  text-decoration: none;
  margin-top: 25px;
`;

const SignUpForm = props => {
  const [member, setMember] = useState({
    FirstName: "",
    LastName: "",
    VillageName: "",
    LoanAmount: 0,
    CurrentAmount: 0,
    LoanInitiation: "",
    DueDate: "",
    BagsOfMaize: 0,
    Goal: 0
  });

  useEffect(() => {
    axios
      .get(`https://lambda-tmb.herokuapp.com/api/clients`)
      .then(
        response => console.log("response", response.data)
        // setMember(response.data)
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
        <Form onSubmit={submitForm}>
          <Labels>
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
          </Labels>
          <Labels>
            <label html="name">Last Name</label>

            <input
              onChange={handleChanges}
              id="title"
              name="LastName"
              type="text"
              placeholder="title"
              value={member.LastName}
            />
          </Labels>
          <Labels>
            <label html="name">Village Name</label>
            <input
              onChange={handleChanges}
              id="title"
              name="VillageName"
              type="text"
              placeholder="title"
              value={member.VillageName}
            />
          </Labels>
          <Labels>
            <label html="number">Loan Amount</label>
            <input
              onChange={handleChanges}
              id="title"
              name="LoanAmount"
              type="number"
              placeholder="title"
              value={member.LoanAmount}
            />
          </Labels>
          <Labels>
            <label html="number">Current Amount</label>
            <input
              onChange={handleChanges}
              id="title"
              name="CurrentAmount"
              type="number"
              placeholder="title"
              value={member.CurrentAmount}
            />
          </Labels>
          <Labels>
            {/* date  */}
            <label html="date">Loan Initiation Date</label>
            <input
              onChange={handleChanges}
              id="title"
              name="LoanInitiation"
              type="date"
              placeholder="title"
              value={member.LoanInitiation}
            />
          </Labels>
          <Labels>
            <label html="date">Loan Due Date</label>
            <input
              onChange={handleChanges}
              id="title"
              name="DueDate"
              type="date"
              placeholder="title"
              value={member.DueDate}
            />
          </Labels>
          <Labels>
            <label html="number">Bags of Maize</label>
            <input
              onChange={handleChanges}
              id="title"
              name="BagsOfMaize"
              type="number"
              placeholder="title"
              value={member.BagsOfMaize}
            />
          </Labels>
          <Labels>
            <label html="number">Goal</label>
            <input
              onChange={handleChanges}
              id="title"
              name="Goal"
              type="number"
              placeholder="title"
              value={member.Goal}
            />
          </Labels>

          <div>
            <Button type="submit">Make Member</Button>
          </div>
          <Links>
            <Link to={"/login"}>
              <h3>Already A Member?</h3>
            </Link>
          </Links>
          {/* <Link to={"/signupform"}>New Here?</Link> */}
          {/* <button>Already A Member?</button> */}
          {/* <Route /> */}
        </Form>
      </div>
    </Page>
  );
};

// ending form

export default SignUpForm;
