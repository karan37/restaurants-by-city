import axios from 'axios';

const ROOT_URL = process.env.API_URI || 'https://opentable.herokuapp.com/api/';
axios.defaults.baseURL = ROOT_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const GET_CITIES_REQUEST = "GET_CITIES_REQUEST"
export const GET_CITIES_RESPONSE = "GET_CITIES_RESPONSE"

export const getCities = () => {
    return async dispatch => {
        dispatch({ type: GET_CITIES_REQUEST })
        let response
        try {
            response = await axios.get(`/cities`)
            const { cities } = response.data
            dispatch({ type: GET_CITIES_RESPONSE, cities })
        } catch (e) {
            console.log(e)
            dispatch({ type: GET_CITIES_RESPONSE, cities: null })
        }
    }
}

export const SET_CITY = "SET_CITY"
export const SET_REFINE_TEXT = "SET_REFINE_TEXT"

export const setCity = city => ({
    type: SET_CITY,
    city
})

export const setRefineText = text => ({
    type: SET_REFINE_TEXT,
    text
})

export const GET_RESTAURANTS_OF_CITY_REQUEST = "GET_RESTAURANTS_OF_CITY_REQUEST"
export const GET_RESTAURANTS_OF_CITY_RESPONSE = "GET_RESTAURANTS_OF_CITY_RESPONSE"

export const getRestaurantsOfCity = city => {
    return async dispatch => {
        dispatch({ type: GET_RESTAURANTS_OF_CITY_REQUEST })
        let response
        try {
            response = await axios.get(`/restaurants?city=${city}`)
            const { data } = response
            dispatch({ type: GET_RESTAURANTS_OF_CITY_RESPONSE, data })
        } catch (e) {
            console.log(e)
            dispatch({ type: GET_RESTAURANTS_OF_CITY_RESPONSE, data: null })
        }
    }
}

export const FETCH_MORE_REQUEST = "FETCH_MORE_REQUEST"
export const FETCH_MORE_RESPONSE = "FETCH_MORE_RESPONSE"

export const fetchMore = () => {
    return async (dispatch, getState) => {
        const { selectedCity: city, restaurants } = getState()
        dispatch({ type: FETCH_MORE_REQUEST })
        const page = (restaurants.length / 25) + 1
        let response
        try {
            response = await axios.get(`/restaurants?city=${city}&page=${page}`)
            const { data } = response
            dispatch({ type: FETCH_MORE_RESPONSE, data })
        } catch (e) {
            console.log(e)
            dispatch({ type: FETCH_MORE_RESPONSE, data: null })
        }
    }
}