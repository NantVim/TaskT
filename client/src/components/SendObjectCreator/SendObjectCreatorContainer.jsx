import React from "react";
import {connect} from "react-redux";
import SendObjectCreator from "./SendObjectCreator";
import {changePropertyCountAC, changePropertyValueAC, getPropertyValueAC} from "../../redux/sendObjectCreatorReducer";
import {sendObject} from "../../api/api";

let mapStateToProps = state => {
  return {
    object: state.sendObjectCreatorReducer.object,
    propertyCount: state.sendObjectCreatorReducer.propertyCount
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    changePropertyCount: newCount =>
      dispatch(changePropertyCountAC(newCount)),
    changePropertyValue: (newPropertyValue, nameInput) =>
      dispatch(changePropertyValueAC(newPropertyValue, nameInput)),
    getPropertyValue: nameInput =>
      dispatch(getPropertyValueAC(nameInput)),
    sendObject
  }
};

const SendObjectCreatorContainer = connect(mapStateToProps, mapDispatchToProps)(SendObjectCreator);

export default SendObjectCreatorContainer;