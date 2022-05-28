import { toastr } from "react-redux-toastr";
import { http } from "utils/setting";
import { GET_LIST_CLUB } from "./types/ClubManageType";

export const getListCLubAction = (information) => {
    return async dispatch => {
        try {
            let result = await http.get('/api/clubs')
            if (result.data.statusCode === 200) {
                toastr.success('Load club success')
                dispatch({
                    type: GET_LIST_CLUB,
                    listClub: result.data.content
                });
                // message('Login Success', SUCCESS).then((value) => { history.goBack(); });
            }
        } catch (error) {
            console.log({ error });
            toastr.error('Clubs not found')
            // message(error.response.data.content, WARNING)
        }
    }
}