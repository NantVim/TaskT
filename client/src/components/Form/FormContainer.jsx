import React from "react";
import Form from "./Form";
import {connect} from "react-redux";
import {updateEmailAC, updatePasswordAC} from "../../redux/authReducer";
import {user} from "../../api/api";

let mapStateToProps = state => {
  return {
    email: state.authReducer.email,
    password: state.authReducer.password
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateEmailValue: newEmail => dispatch(updateEmailAC(newEmail)),
    updatePasswordValue: newPassword => dispatch(updatePasswordAC(newPassword)),
    sendAuthData: () => user.auth()
  }
};

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;