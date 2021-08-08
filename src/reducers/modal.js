import {
    SET_ACTIVE_MODAL
} from '../actions/actionTypes'

const initialState = { active: false, url: '' }

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_MODAL: {
            const {active, url} = action.payload
            return {...state, active, url}
        }
        default:
            return state;
    }
}