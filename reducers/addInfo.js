import * as types from '../actions/actionTypes';

const initialState = {
  name: 'Enter your name',
  surname: 'Enter your surname'
};

export default function addInfo(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_NAME:
      return {
        ...state,
        name: state.name
      };
    case types.ADD_SURNAME:
      return {
        ...state,
        surname: state.surname
      };
    default:
      return state;
  }
}