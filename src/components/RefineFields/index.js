import React from "react"
import { connect } from "react-redux"
import { setRefineText } from "../../actions"

import "./RefineFields.scss"

const RefineFields = ({ setRefineText, selectedCity }) => {
    const onInputChange = e => {
        setRefineText(e.target.value)
    }
    return (
        <div className="refineFields">
            <label>Refine results :</label>
            &nbsp;
            <input disabled={selectedCity ? false : true} onChange={onInputChange} aria-label="filter text" placeholder="Enter text to refine results" />
        </div>
    )
}

const mapStateToProps = ({ selectedCity }) => ({ selectedCity })
export default connect(mapStateToProps, { setRefineText })(RefineFields)