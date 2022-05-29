import { toastr } from "react-redux-toastr";
import { http } from "utils/setting";
import { GET_LIST_TOURNAMENTS } from "./types/TournamentManageType";

export const getListTournamentsAction = (PageNumber) => {
    return async dispatch => {
        try {
            let result = await http.get(`/api/tournaments?PageNumber=${PageNumber}`)
            if (result.data.statusCode === 200) {
                toastr.success('Load tournaments success')
                dispatch({
                    type: GET_LIST_TOURNAMENTS,
                    listTournaments: result.data.result,
                    pagination: result.data.pagination
                });
            }
        } catch (error) {
            console.log({ error });
            toastr.error('Tournament not found')
        }
    }
}
export const createNewTournamentAction = (data) => {
    return async dispatch => {
        try {
            let result = await http.post('/api/tournaments', data)
            if (result.data.statusCode === 200) {
                toastr.success('Create new tournament success')
                dispatch(getListTournamentsAction())
                $(`#myModal`).modal('hide')
            }
        } catch (error) {
            console.log({ error });
            toastr.error('cant create player')
        }
    }
}
export const updateTournamentAction = (tournamentID, data) => {
    return async dispatch => {
        try {
            let result = await http.put(`/api/tournaments/${tournamentID}`, data)
            if (result.data.statusCode === 200) {
                toastr.success('Update tournament success')
                dispatch(getListTournamentsAction())
                $(`#myModal`).modal('hide')
                // message('Login Success', SUCCESS).then((value) => { history.goBack(); });
            }
        } catch (error) {
            console.log({ error });
            toastr.error('cant update not found')
            // message(error.response.data.content, WARNING)
        }
    }
}
export const deleteTournamentAction = (tournamentID) => {
    return async dispatch => {
        try {
            let result = await http.delete(`/api/tournaments/${tournamentID}`)
            toastr.success('Delete tournament success')
            dispatch(getListTournamentsAction())
            $(`#myModal`).modal('hide')

            // message('Login Success', SUCCESS).then((value) => { history.goBack(); });
        } catch (error) {
            toastr.error(error.response.data.Message)
            $(`#myModal`).modal('hide')
            // message(error.response.data.content, WARNING)
        }
    }
}