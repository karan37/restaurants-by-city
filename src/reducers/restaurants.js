import { GET_RESTAURANTS_OF_CITY_RESPONSE, FETCH_MORE_RESPONSE } from "../actions"

export default (state = [], action) => {
    switch (action.type) {
        case GET_RESTAURANTS_OF_CITY_RESPONSE:
            const { restaurants = [] } = action.data || {}
            return restaurants
        case FETCH_MORE_RESPONSE:
            const { restaurants: nextPageRestaurants } = action.data
            return [...state, ...nextPageRestaurants]
        default:
            return state
    }
}