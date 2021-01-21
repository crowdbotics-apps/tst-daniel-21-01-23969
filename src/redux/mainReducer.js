import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn223195075Reducer from '../features/SignIn223195075/redux/reducers'
import SignIn425195073Reducer from '../features/SignIn425195073/redux/reducers'
import SignIn526195072Reducer from '../features/SignIn526195072/redux/reducers'
import SignUp127195071Reducer from '../features/SignUp127195071/redux/reducers'
import SignUp228195070Reducer from '../features/SignUp228195070/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn223195075: SignIn223195075Reducer,
SignIn425195073: SignIn425195073Reducer,
SignIn526195072: SignIn526195072Reducer,
SignUp127195071: SignUp127195071Reducer,
SignUp228195070: SignUp228195070Reducer,

});