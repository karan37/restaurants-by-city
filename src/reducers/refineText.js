import { SET_REFINE_TEXT } from "../actions"

export default (state = "", action) => {
    switch (action.type) {
        case SET_REFINE_TEXT:
            const { text } = action
            return text
        default:
            return state
    }
}