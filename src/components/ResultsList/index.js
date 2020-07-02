import React from "react"
import { connect } from "react-redux"
import { fetchMore } from "../../actions"

import "./ResultsList.scss"

const Restaurant = ({ name, address, area }) => (
    <div className="restaurant">
        <p>{name}</p>
        <p>{address}</p>
        <p>{area}</p>
    </div>
)

const ResultsList = ({ restaurants, totalRestaurants, fetchMore, refineText, selectedCity }) => {
    const onScroll = e => {
        const resultListElements = document.getElementsByClassName("restaurant")
        const lastElement = resultListElements[resultListElements.length - 1]
        if (lastElement && lastElement.getBoundingClientRect().bottom <= window.innerHeight && totalRestaurants > restaurants.length) {
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
        <div>
            {filterRestaurants.length ? `Showing ${filterRestaurants.length} results of total ${totalRestaurants}, in ${selectedCity}` : `No results to display`}

            <div className="resultsList" onScroll={onScroll}>
                {filterRestaurants.map(({ name, address, area }, i) => (<Restaurant key={i} name={name} address={address} area={area} />))}
            </div>
        </div>
    )
}

const mapStateToProps = ({ restaurants, totalRestaurants, selectedCity, refineText }) => ({ restaurants, totalRestaurants, selectedCity, refineText })

export default connect(mapStateToProps, { fetchMore })(ResultsList)