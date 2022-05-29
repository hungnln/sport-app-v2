import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk'
import UserManageReducer from './reducers/UserManageReducer';
import { reducer as toastrReducer } from 'react-redux-toastr'
import ClubManageReducer from './reducers/ClubManageReducer';
import PlayerManageReducer from './reducers/PlayerManageReducer';
import TournamentManageReducer from './reducers/TournamentManageReducer';
import ModalReducer from './reducers/ModalReducer';
import StadiumManageReducer from './reducers/StadiumManageReducer';

const rootReducer = combineReducers({
    UserManageReducer,
    ClubManageReducer,
    PlayerManageReducer,
    TournamentManageReducer,
    ModalReducer,
    StadiumManageReducer,
    toastr: toastrReducer,

});
let middleWare = applyMiddleware(reduxThunk)
let composeCustom = compose(middleWare,
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
        ? a => a
        : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
)
export const store = createStore(rootReducer, composeCustom);