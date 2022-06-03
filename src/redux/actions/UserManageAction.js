import { history } from "index";
import { toastr } from "react-redux-toastr";
import { http } from "utils/setting";
import { LOGIN } from "./types/UserManageType";

export const loginAction = () => {
    return async dispatch => {
        try {
            let result = await http.post('/api/login/firebase')
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LOGIN,
                    userInformation: result.data.result.account
                });
                history.push('/')

            }
        } catch (error) {
            console.log({ error });
            toastr.error('cant update not found')
        }
    }
}