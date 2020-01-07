// import useState

import React, { useState } from "react";

import "./App.css";

import SignUpForm from "./components/SignUpForm";
import SignUp from "./components/SignUp";

// useState needs empty array
// list of Teammembers("") array of objects
// object pair needs {role}
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
      firstName: card.firstName,
      lastName: card.lastName,
      villageName: card.villageName,
      loanAmount: card.loanAmount,
      currentAmount: card.currentAmount,
      loanInitiation: card.loanInitiation,
      loanDue: card.loanDue,
      bageOfMaize: card.bagsOfMaize,
      goal: card.goal
    };
    setMember([...members, member]);
  };

  return (
    <div className="App">
      <h2>Tieme Ndo Credit Extension Package (CEP)Agreement Form</h2>{" "}
      <SignUpForm memberUpdate={memberUpdate} />
      <SignUp members={members} />
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
