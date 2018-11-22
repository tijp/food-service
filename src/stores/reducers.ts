import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';

import basketState from './basket/reducer';

const rootReducer = combineReducers({
  // form,
  basketState,
});

export default rootReducer;
