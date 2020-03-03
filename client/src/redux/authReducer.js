const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

let initialState = {
  email: "",
  password: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return({
        ...state,
        email: action.newEmail
      });
    case UPDATE_PASSWORD:
      return({
        ...state,
        password: action.newPassword
      });
    default: return state;
  }
};

export const updateEmailAC = newEmail =>
  ({type: UPDATE_EMAIL, newEmail});
export const updatePasswordAC = newPassword =>
  ({type: UPDATE_PASSWORD, newPassword});


export default authReducer;

