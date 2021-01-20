import { combineReducers } from 'redux';
// import cakeReducer from './cake/cakeReducer';
// import iceCreamReducer from './iceCream/iceCreamReducer';
import basicReducer from './basic/reducer';
import userReducer from './user/reducer';

// 將多個 reducer 函數最為 value 的 object，合併為一個 reducer
const rootReducer = combineReducers({
  basic: basicReducer,
  user: userReducer,
  // cake: cakeReducer,
  // iceCream: iceCreamReducer,
});

export default rootReducer;
