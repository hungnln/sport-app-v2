import { GET_LIST_TOURNAMENTS } from "redux/actions/types/TournamentManageType"

const initialState = {
    listTournaments: [],
    pagination: {},
    modalTournament: {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_LIST_TOURNAMENTS:
            state.listTournaments = action.listTournaments
            state.pagination = action.pagination
            return { ...state, ...payload }

        default:
            return state
    }
}
