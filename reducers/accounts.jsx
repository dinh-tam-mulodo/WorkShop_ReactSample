//Import Action Constants
import { ALL_ACCTS,ADD_ACC,DEL_ACC } from '../constants/index';

//What the initial State of our App Will be
const initialState = [];

/*
Here is the structure of our App:
[{Name:"Account Name",Id:"001XXXXXXXXXXXXXXX"},...]
*/

//Reducer function
export function accts(state = initialState, action) {
  switch (action.type) {
  case ALL_ACCTS:
  //Return the Accouts we receive from Salesforce
    state = action.accts;
    return state;
  case ADD_ACC:
  //Return the new Accouts we receive from Salesforce
    state = action.accts;
    return state;
  case DEL_ACC:
  //Return the new Accouts we delete an account from Salesforce
    state = action.accts;
    return state;
  default:
    return state
  }
}
