import axios from 'axios';

const ROOT_URL = process.env.API_URI || 'http://opentable.herokuapp.com/api/';
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
            console.log(response.data)
            dispatch({ type: GET_CITIES_RESPONSE, cities })
        } catch (e) {
            console.log(e)
            dispatch({ type: GET_CITIES_RESPONSE, cities: null })
        }
    }
}