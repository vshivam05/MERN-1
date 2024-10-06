import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UseEffectNoCleanup(props) {
  const updateEmail = async () => {
    let res = await axios.get(`https://reqres.in/api/users/${props.userId}`);
    let email = res.data.data.email;
    console.log(email);
  };

  return (
    <div>
      <p>{props.msg}</p>
    </div>
  );
}
