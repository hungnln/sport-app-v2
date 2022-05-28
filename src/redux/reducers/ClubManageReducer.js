import { GET_LIST_CLUB } from "redux/actions/types/ClubManageType"

const initialState = {
    listClub: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_LIST_CLUB:
            state.listClub = action.listClub
            return { ...state, }

        default:
            return state
    }
}
