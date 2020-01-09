import React from "react";

import SignUpForm from "./SignUpForm";
import { Route, Link } from "react-router-dom";

export default function login() {
  return (
    <div>
      <h1> Welcome!!</h1>
      <Link to={"/signupform"}>New Here?</Link>
    </div>
  );
}
