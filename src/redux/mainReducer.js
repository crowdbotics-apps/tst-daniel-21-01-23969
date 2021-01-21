import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView4195094Reducer from '../features/CalendarView4195094/redux/reducers';
import Dashboard19195089Reducer from '../features/Dashboard19195089/redux/reducers'
import Dashboard210195088Reducer from '../features/Dashboard210195088/redux/reducers'
import SignIn122195076Reducer from '../features/SignIn122195076/redux/reducers'
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
CalendarView4195094: CalendarView4195094Reducer,
Dashboard19195089: Dashboard19195089Reducer,
Dashboard210195088: Dashboard210195088Reducer,
SignIn122195076: SignIn122195076Reducer,
SignIn223195075: SignIn223195075Reducer,
SignIn425195073: SignIn425195073Reducer,
SignIn526195072: SignIn526195072Reducer,
SignUp127195071: SignUp127195071Reducer,
SignUp228195070: SignUp228195070Reducer,

});