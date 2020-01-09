// import useState

import React, { useState } from "react";
import login from "./components/login";
import "./App.css";
import { Route, Link } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import SignUp from "./components/SignUp";

// useState needs empty array
// list of members("") array of objects

function App() {
  const [members, setMember] = useState([
    {
      // id: 1,
      // firstName: "skye ",
      // lastName: "sajous"
    }
  ]);

  // MemberUpdate?
  const memberUpdate = card => {
    const member = {
      id: Date.now(),
      firstName: card.FirstName,
      lastName: card.LastName,
      villageName: card.VillageName,
      loanAmount: card.LoanAmount,
      currentAmount: card.CurrentAmount,
      loanInitiation: card.LoanInitiation,
      loanDue: card.DueDate,
      bageOfMaize: card.BagsOfMaize,
      goal: card.Goal
    };
    setMember([...members, member]);
  };

  return (
    <div className="App">
      {/* <SignUpForm memberUpdate={memberUpdate} /> */}
      {/* <SignUp members={members} /> */}
      {/* <Link to={"/login"}>Already A Member?</Link> */}
      {/* <Link to={"/signupform"}>New Here?</Link> */}
      {/* <Route path="/" component={login} /> */}
      <Route exact path={`/signupform`} component={SignUpForm} />
      <Route exact path="/login" component={login} />
    </div>
  );
}

//

//   /* step 1 */
//   <div className="App">
//     <Form members={members} />
//     <Member team={members} />
//   </div>
// );

export default App;
