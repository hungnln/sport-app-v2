import { OPEN_MODAL } from "redux/actions/types/ModalType"

const initialState = {
    headingName: '',
    component: '',
    buttonName: ''
}

export default (state = initialState, action) => {
    switch (action.type) {

        case OPEN_MODAL:
            state.headingName = action.headingName
            state.buttonName = action.buttonName
            state.component = action.component
            return { ...state }

        default:
            return state
    }
}
