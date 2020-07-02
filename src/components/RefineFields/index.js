import React from "react"
import { connect } from "react-redux"
import { setRefineText } from "../../actions"

import "./RefineFields.scss"

const RefineFields = ({ cities, setRefineText }) => {
    const onInputChange = e => {
        setRefineText(e.target.value)
    }
    return (
        <div className="refineFields">
           <input onChange={onInputChange} aria-label="filter text" placeholder="Enter text to refine results"></input>
        </div>
    )
}

export default connect(null, { setRefineText })(RefineFields)