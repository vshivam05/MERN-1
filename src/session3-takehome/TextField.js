import { useState } from "react";

export default function InputField(props) {
  let { id, displayText } = props;

  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id} className="form-label">
        {displayText}:
      </label>
      <input
        type="text"
        name={id}
        id={id}
        className="form-control"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
