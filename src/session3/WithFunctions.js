/* Introducing Hooks transition
function WithFunctions(props) {
  const count = ???; // "count" state
  const setCount = ???; // a function to update "count" state

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };
  
  return (
    <div>
        <input
          type="number"
          name="name"
          value={count}
          onChange={handleCountChange}
        />
      </div>
  );
}
*/

/* useState hook demo */
import React, { useState } from "react";

function WithFunctions(props) {
  const [count, setCount] = useState(0);

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        name="name"
        value={count}
        onChange={handleCountChange}
      />
    </div>
  );
}

/* Curious Cats question
function WithFunctions(props) {
  let count = 0;

  const handleCountChange = (e) => {
    count = e.target.value;
    console.log(count);
  };

  return (
    <div>
      <input
        type="number"
        name="name"
        value={count}
        onChange={handleCountChange}
      />
    </div>
  );
}
*/

/* Using multiple hooks in a component
function WithFunctions(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  const handleCountChange2 = (e) => {
    setCount2(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        name="name"
        value={count}
        onChange={handleCountChange}
      />
      <input
        type="number"
        name="name"
        value={count2}
        onChange={handleCountChange2}
      />
    </div>
  );
}
 */

export default WithFunctions;
