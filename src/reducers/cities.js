import { GET_CITIES_RESPONSE } from "../actions"

export default (state = [], action) => {
    switch (action.type) {
        case GET_CITIES_RESPONSE:
            const { cities } = action
            return cities
        default:
            return state
    }
}