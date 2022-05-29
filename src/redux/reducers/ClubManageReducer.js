import { GET_LIST_CLUB } from "redux/actions/types/ClubManageType"

const initialState = {
    listClubs: [],
    pagination: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_LIST_CLUB:
            state.listClubs = action.listClubs
            state.pagination = action.pagination
            return { ...state }

        default:
            return state
    }
}
