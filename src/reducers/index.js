import { combineReducers } from 'redux'
import cities from "./cities"
import restaurants from "./restaurants"
import totalRestaurants from "./totalRestaurants"
import selectedCity from "./selectedCity"
import refineText from "./refineText"

export default combineReducers({
    cities,
    restaurants,
    totalRestaurants,
    refineText,
    selectedCity
})