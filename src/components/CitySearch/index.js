import React, { useEffect, useState } from "react"

import { connect } from "react-redux"
import { getCities } from "../../actions"

import "./CitySearch.scss"

const CitySearch = ({ cities, getCities }) => {
    useEffect(() => {
        getCities()
    }, [getCities]);

    const [searchText, setSearchText] = useState("")
    const filterCities = cities.filter(city => {
        return city.toLowerCase().includes(searchText.toLowerCase())
    })
    return (
        <div className="citySearch">
            <label></label>
            <input className="citySearch__input" onChange={e => {setSearchText(e.target.value)}} placeholder="Enter City Name"></input>
            <ul className="citySearch__results">
                {filterCities.map((city, i) => (<li key={i}>{city}</li>))}
            </ul>
        </div>
    )
}

const mapStateToProps = ({ cities }) => ({ cities })
export default connect(mapStateToProps, { getCities })(CitySearch)