import React, { useState } from "react";

export default function List(props) {
  const [checked, setChecked] = useState(false);

  const handleInputChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      {props.name}
      <input type="checkbox" onChange={handleInputChange} />
    </div>
  );
}
