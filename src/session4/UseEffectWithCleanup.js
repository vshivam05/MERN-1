import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UseEffectWithCleanup(props) {
  const updateEmail = async () => {
    let res = await axios.get(`https://reqres.in/api/users/${props.userId}`);
    let email = res.data.data.email;
    console.log(email);
  };

  useEffect(() => {
    updateEmail();

    return function () {
      console.log("Cleanup logic");
    };
  }, [props.userId]);

  return (
    <div>
      <p>{props.msg}</p>
    </div>
  );
}
