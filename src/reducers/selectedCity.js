import { SET_CITY } from "../actions"

export default (state = "", action) => {
    switch (action.type) {
        case SET_CITY:
            const { city } = action
            return city
        default:
            return state
    }
}