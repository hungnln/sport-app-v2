import { GET_LIST_STADIUMS } from "redux/actions/types/StadiumManageType"

const initialState = {
    listStadiums: [],
    pagination: {},

}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_LIST_STADIUMS:
            state.listStadiums = action.listStadiums
            state.pagination = action.pagination
            return { ...state }

        default:
            return state
    }
}
