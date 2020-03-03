const CHANGE_PROPERTY_COUNT = 'CHANGE_PROPERTY_COUNT';
const CHANGE_PROPERTY_VALUE = 'CHANGE_PROPERTY_VALUE';
const GET_PROPERTY_VALUE = 'GET_PROPERTY_VALUE';

let initialState = {
  "object": {
    "property-1": "",
    "property-2": "",
    "property-3": ""
  },
  "propertyCount": 3
};

const sendObjectCreatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROPERTY_COUNT:
      let propertiesValueObject = {};

      for (let i = 1; i <= +action.newCount; i++)
        propertiesValueObject["property-" + i] = "";

      return(
        {
          ...state,
          object: {...propertiesValueObject},
          propertyCount: +action.newCount
        }
      );
    case CHANGE_PROPERTY_VALUE:
      let obj = {...state.object};
      obj[action.nameInput] = action.newPropertyValue;
      return (
        {
          ...state,
          object: {
            ...obj
          }
        }
      );
    case GET_PROPERTY_VALUE:
      return state.object[action.nameInput];

    default: return({...state});
  }
};

export const changePropertyCountAC = newCount =>
  ({type: CHANGE_PROPERTY_COUNT, newCount});

export const changePropertyValueAC = (newPropertyValue, nameInput) =>
  ({type: CHANGE_PROPERTY_VALUE, newPropertyValue, nameInput});

export const getPropertyValueAC = nameInput =>
  ({type: GET_PROPERTY_VALUE, nameInput});

export default sendObjectCreatorReducer;