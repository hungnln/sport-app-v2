import { history } from "index";
import { toastr } from "react-redux-toastr";
import { http } from "utils/setting";
import { CREATE_NEW_PLAYER, GET_LIST_PLAYERS } from "./types/PlayerManageType";

export const getListPlayersAction = (PageNumber) => {
    return async dispatch => {
        try {
            let result = await http.get(`/api/players?PageNumber=${PageNumber}`)
            if (result.data.statusCode === 200) {
                toastr.success('Load players success')
                dispatch({
                    type: GET_LIST_PLAYERS,
                    listPlayers: result.data.result,
                    pagination: result.data.pagination
                });
            }
        } catch (error) {
            console.log({ error });
            toastr.error('Player not found')
        }
    }
}
export const createNewPlayerAction = (data) => {
    return async dispatch => {
        try {
            let result = await http.post('/api/players', data)
            if (result.data.statusCode === 200) {
                toastr.success('Create new player success')
                dispatch(getListPlayersAction())
                $(`#createPlayerModal`).modal('hide')
            }
        } catch (error) {
            console.log({ error });
            toastr.error('cant create player')
        }
    }
}
export const updatePlayer = (playerID, data) => {
    return async dispatch => {
        try {
            let result = await http.put(`/api/players/${playerID}`, data)
            if (result.data.statusCode === 200) {
                toastr.success('Update player success')
                dispatch(getListPlayersAction())
                $(`#updatePlayerModal${playerID}`).modal('hide')
                // message('Login Success', SUCCESS).then((value) => { history.goBack(); });
            }
        } catch (error) {
            console.log({ error });
            toastr.error('cant update not found')
            // message(error.response.data.content, WARNING)
        }
    }
}
export const deletePlayerAction = (playerID) => {
    return async dispatch => {
        try {
            let result = await http.delete(`/api/players/${playerID}`)
            toastr.success('Delete player success')
            dispatch(getListPlayersAction())
            $(`#deletePlayerModal${playerID}`).modal('hide')
            // message('Login Success', SUCCESS).then((value) => { history.goBack(); });
        } catch (error) {
            toastr.error(error.response.data.Message)
            $(`#deletePlayerModal${playerID}`).modal('hide')
            // message(error.response.data.content, WARNING)
        }
    }
}