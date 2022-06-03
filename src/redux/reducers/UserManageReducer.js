import { USER_LOGIN } from "utils/setting";
import { LOGIN } from "../actions/types/UserManageType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin1: user,
    userLogin: { role: "admin" },
    userInformation: {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case LOGIN:
            const { userInformation } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(userInformation));
            return { ...state, userLogin1: userInformation }

        default:
            return state
    }
}
