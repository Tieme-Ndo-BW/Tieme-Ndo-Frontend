import React from "react";

const SignUp = props => {
  console.log(props);
  return (
    <div>
      {props.members.map(data => (
        <div key={data.id}>
          <h1>{data.FirstName}</h1>
          <h1>{data.LastName}</h1>
          <p>{data.VillageName}</p>
          <p>{data.LoanAmount}</p>
          <p>{data.CurrentAmount}</p>
          <p>{data.LoanInitiation}</p>
          <p>{data.LoanDue}</p>
          <p>{data.BagsOfMaize}</p>
          <p>{data.Goal}</p>
        </div>
      ))}
    </div>
  );
};

export default SignUp;
