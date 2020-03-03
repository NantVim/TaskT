import React from "react";
import InputField from "../InputField/InputField";

const SendObjectCreator = props => {

  const inputRender = () => {
    let inputPack = [];
    for (let i = 1; i <= props.propertyCount; i++) {
      inputPack[i] =
        <InputField
          name={'property-'+i}
          type='text'
          updateInputValueMethod={props.changePropertyValue}
        />
    }
    return inputPack;
  };

  const changePropertyCount = e =>{
    let inputValue = e.target.value;
    props.changePropertyCount(inputValue);
  };

  return(
    <div className='send-object-wrapper'>
      <form action="#">
        <h2>Property count: {props.propertyCount}</h2>
        <p className="range-field">
          <input
            onChange={changePropertyCount}
            type="range"
            min="3"
            max="9"
            defaultValue='3'
          />
        </p>
      </form>

      <div className="form">
        {inputRender()}
        <button
          onClick={props.sendObject}
          className="waves-effect waves-light btn"
        >SEND OBJECT</button>
      </div>
    </div>
  );
};

export default SendObjectCreator;