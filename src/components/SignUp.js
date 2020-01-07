import React from "react";

const SignUp = props => {
  console.log(props);
  return (
    <div>
      {props.members.map(data => (
        <div key={data.id}>
          <h1>{data.firstName}</h1>
          <h1>{data.lastName}</h1>
          <p>{data.villageName}</p>
          <p>{data.loanAmount}</p>
          <p>{data.currentAmount}</p>
          <p>{data.loanInitiation}</p>
          <p>{data.loanDue}</p>
          <p>{data.bagsOfMaize}</p>
          <p>{data.goal}</p>
        </div>
      ))}
    </div>
  );
};

export default SignUp;
