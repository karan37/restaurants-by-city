import { FETCH_MORE_REQUEST, FETCH_MORE_RESPONSE } from "../actions"

export default (state = false, action) => {
    switch (action.type) {
        case FETCH_MORE_REQUEST:
            return true
        case FETCH_MORE_RESPONSE:
            return false
        default:
            return state
    }
}