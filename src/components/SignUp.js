import React from "react";

const SignUp = props => {
  console.log(props);
  return (
    <div>
      {props.members.map(data => (
        <div key={data.id}>
          <h1>{data.name}</h1>
          <p>{data.email}</p>
          <p>{data.age}</p>
        </div>
      ))}
    </div>
  );
};

export default SignUp;
