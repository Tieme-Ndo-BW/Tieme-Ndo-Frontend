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
    { id: 1, name: "skye sajous", email: "skyesajous@gmail.com", role: "owner" }
  ]);

  // MemberUpdate?
  const memberUpdate = card => {
    const member = {
      id: Date.now(),
      name: card.name,
      email: card.email,
      age: card.age
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
