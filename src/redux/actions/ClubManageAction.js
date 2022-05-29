import { toastr } from "react-redux-toastr";
import { http } from "utils/setting";
import { GET_LIST_CLUB } from "./types/ClubManageType";

export const getListCLubsAction = (PageNumber) => {
    return async dispatch => {
        try {
            let result = await http.get(`/api/clubs?PageNumber=${PageNumber}`)
            if (result.data.statusCode === 200) {
                toastr.success('Load club success')
                dispatch({
                    type: GET_LIST_CLUB,
                    listClubs: result.data.result,
                    pagination: result.data.pagination
                });
            }
        } catch (error) {
            console.log({ error });
            toastr.error('Clubs not found')
        }
    }
}
export const createNewClubAction = (data) => {
    return async dispatch => {
        try {
            let result = await http.post('/api/clubs', data)
            if (result.data.statusCode === 200) {
                toastr.success('Create new club success')
                dispatch(getListCLubsAction())
                $(`#myModal`).modal('hide')
            }
        } catch (error) {
            console.log({ error });
            toastr.error('cant create club')
        }
    }
}
export const updateClubAction = (clubID, data) => {
    return async dispatch => {
        try {
            let result = await http.put(`/api/clubs/${clubID}`, data)
            if (result.data.statusCode === 200) {
                toastr.success('Update player success')
                dispatch(getListCLubsAction())
                $(`#myModal`).modal('hide')
            }
        } catch (error) {
            console.log({ error });
            toastr.error('cant update not found')
        }
    }
}
export const deleteClubAction = (clubID) => {
    return async dispatch => {
        try {
            let result = await http.delete(`/api/clubs/${clubID}`)
            toastr.success('Delete club success')
            dispatch(getListCLubsAction())
            $(`#myModal`).modal('hide')
        } catch (error) {
            toastr.error(error.response.data.Message)
            $(`#myModal`).modal('hide')
        }
    }
}