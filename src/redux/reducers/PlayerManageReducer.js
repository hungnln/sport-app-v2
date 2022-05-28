import { UPDATE_MODAL_PLAYER } from "redux/actions/types/PlayerManageType"
import { GET_LIST_PLAYERS } from "redux/actions/types/PlayerManageType"

const initialState = {
    listPlayers: [],
    pagination: {},
    modalPlayer: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_PLAYERS:
            state.listPlayers = action.listPlayers
            state.pagination = action.pagination
            return { ...state }
        case UPDATE_MODAL_PLAYER:
            state.modalPlayer = action.modalPlayer
            return { ...state }
        default:
            return state
    }
}
