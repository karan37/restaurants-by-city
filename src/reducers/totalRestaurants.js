import { GET_RESTAURANTS_OF_CITY_RESPONSE } from "../actions"

export default (state = 0, action) => {
    switch (action.type) {
        case GET_RESTAURANTS_OF_CITY_RESPONSE:
            const { total_entries = 0 } = action.data || {}
            return total_entries
        default:
            return state
    }
}