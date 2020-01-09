import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

// import Bubbles from "./Bubbles";
// import ColorList from "./ColorList";

const ClientPage = () => {
  const [clientList, setClientList] = useState([]);
  
  useEffect(() => {
    axiosWithAuth()
      .get('https://lambda-tmb.herokuapp.com/api/clients')
      .then(response => setClientList(response.data))
      .catch(error => console.log(error.response, 'no client, client page'))
  })

  return (
    <>
      Client Page
    </>
  );
};
export default ClientPage;