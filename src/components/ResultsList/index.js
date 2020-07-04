import React from "react"
import { connect } from "react-redux"
import { fetchMore } from "../../actions"

import "./ResultsList.scss"

const Restaurant = ({ restaurant }) => {
    const { name, address, price, image_url, phone } = restaurant
    console.log({ restaurant })
    const priceRating = () => {
        let stringBuilder = ""
        for (let i = 1; i <= 4; i++) {
            stringBuilder = stringBuilder + "$"
        }
        return stringBuilder
    }
    return (
        <div className="restaurant">
            <div className="cardBody">
                <img src={image_url} alt={`Image of ${name} restaurant`} />
                <div className="info">
                    <b>{name}</b>
                    <p aria-label="Address"> {address}</p>
                    <p aria-label="Phone number"> {phone}</p>
                    <p aria-label={`Price rating: ${price} out of 4`}>{priceRating()}</p>
                </div>
            </div>
        </div>
    )
}

const ResultsList = ({ restaurants, totalRestaurants, fetchMore, refineText, fetchingMore }) => {
    const onScroll = e => {
        const scrollNearEnd = e.target.scrollHeight - Math.floor(e.target.offsetHeight + e.target.scrollTop) < 100
        if (scrollNearEnd && restaurants.length < totalRestaurants && !fetchingMore) {
            fetchMore()
        }
    }
    const filterRestaurants = restaurants.filter(({ name, address, area }) => {
        const refineTextToLowerCase = refineText.toLowerCase()
        return name.toLowerCase().includes(refineTextToLowerCase) ||
            address.toLowerCase().includes(refineTextToLowerCase) ||
            area.toLowerCase().includes(refineTextToLowerCase)
    })
    return (
        <div className="resultsList" onScroll={onScroll}>
            {filterRestaurants.map((restaurant, i) => (<Restaurant key={i} restaurant={restaurant} />))}
        </div>
    )
}

const mapStateToProps = ({ restaurants, totalRestaurants, selectedCity, refineText, fetchingMore }) => ({ restaurants, totalRestaurants, selectedCity, refineText, fetchingMore })

export default connect(mapStateToProps, { fetchMore })(ResultsList)