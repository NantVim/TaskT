import React from "react";

const InputField = props => {

  const updateInputValue = e => {
    let inputValue = e.target.value;
    props.updateInputValueMethod(inputValue, props.name);
  };

  return(
    <div className="input-field">
      <input
        onChange={updateInputValue}
        id={props.name}
        type={props.type}
        value={props.value}
      />
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
};

export default InputField;