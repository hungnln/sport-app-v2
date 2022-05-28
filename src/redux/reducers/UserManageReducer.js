import { LOGIN } from "../actions/types/UserManageType";

let user = {};
// if (localStorage.getItem(USER_LOGIN)) {
//     user = JSON.parse(localStorage.getItem(USER_LOGIN));
// }

const initialState = {
    userLogin: { role: "admin" }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case LOGIN:
            return { ...state }

        default:
            return state
    }
}
