import React from 'react';
import style from './Form.module.css';
import 'materialize-css';

const Form = (props) => {

  const updateEmailValue = (e) => {
    let emailValue = e.target.value;
    props.updateEmailValue(emailValue);
  };

  const updatePasswordValue = (e) => {
    let passwordValue = e.target.value;
    props.updatePasswordValue(passwordValue);
  };

  return(
    <div id={style.form} className="z-depth-4">
      <h1>Auth</h1>
      <div className="input-field">
        <input onChange={updateEmailValue} id="email" type="text" className=""/>
        <label htmlFor="email">E-mail</label>
      </div>
      <div className="input-field">
        <input onChange={updatePasswordValue} id="password" type="password" className=""/>
        <label htmlFor="password">Password</label>
      </div>
      <button onClick={() => props.sendAuthData()} className="waves-effect waves-light btn">SEND</button>
    </div>
  );
};

export default Form;