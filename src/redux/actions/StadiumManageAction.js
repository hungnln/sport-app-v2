import { toastr } from "react-redux-toastr";
import { http } from "utils/setting";
import { GET_LIST_STADIUMS } from "./types/StadiumManageType";

export const getListStadiumsAction = (PageNumber) => {
    return async dispatch => {
        try {
            let result = await http.get(`/api/stadiums?PageNumber=${PageNumber}`)
            if (result.data.statusCode === 200) {
                toastr.success('Load stadium success')
                dispatch({
                    type: GET_LIST_STADIUMS,
                    listStadiums: result.data.result,
                    pagination: result.data.pagination
                });
            }
        } catch (error) {
            console.log({ error });
            toastr.error('Stadium not found')
        }
    }
}
export const createNewStadiumAction = (data) => {
    return async dispatch => {
        try {
            let result = await http.post('/api/stadiums', data)
            if (result.data.statusCode === 200) {
                toastr.success('Create new stadium success')
                dispatch(getListStadiumsAction())
                $(`#myModal`).modal('hide')
            }
        } catch (error) {
            console.log({ error });
            toastr.error('cant create stadium')
        }
    }
}
export const updateStadiumAction = (stadiumID, data) => {
    return async dispatch => {
        try {
            let result = await http.put(`/api/stadiums/${stadiumID}`, data)
            if (result.data.statusCode === 200) {
                toastr.success('Update stadium success')
                dispatch(getListStadiumsAction())
                $(`#myModal`).modal('hide')
            }
        } catch (error) {
            console.log({ error });
            toastr.error('cant update not found')
        }
    }
}
export const deleteStdiumAction = (stadiumID) => {
    return async dispatch => {
        try {
            let result = await http.delete(`/api/stadiums/${stadiumID}`)
            toastr.success('Delete stadium success')
            dispatch(getListStadiumsAction())
            $(`#myModal`).modal('hide')
        } catch (error) {
            $(`#myModal`).modal('hide')
            toastr.error(error.response.data.Message)
        }
    }
}