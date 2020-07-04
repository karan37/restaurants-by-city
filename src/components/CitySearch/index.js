import React, { useEffect } from "react"

import { connect } from "react-redux"
import { getCities, setCity, getRestaurantsOfCity } from "../../actions"

import "./CitySearch.scss"

const CitySearch = ({ cities, getCities, getRestaurantsOfCity, setCity }) => {
    useEffect(() => {
        getCities()
    }, [getCities]);

    const onSelectChange = e => {
        setCity(e.target.value)
        getRestaurantsOfCity(e.target.value)
    }
    return (
        <div className="citySearch">
            <label>Select city :</label>
            &nbsp;
            <select className="citySearch__results" onChange={onSelectChange} aria-label="Select city from dropdown">
                <option className="blueBtn" key={0} value={""}>Choose city from dropdown</option>
                {cities.map((city, i) => (<option key={i+1} value={city}>{city}</option>))}
            </select>
        </div>
    )
}

const mapStateToProps = ({ cities }) => ({ cities })
export default connect(mapStateToProps, { getCities, setCity, getRestaurantsOfCity })(CitySearch)