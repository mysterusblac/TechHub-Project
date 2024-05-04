
export default function FilterComponent() {
    return (
        <div className="filter-container">
            <p className="hr-filter-text">Filters</p>
            <div className="filter-select">
                <select>
                    <option value="">Select Range</option>
                </select>
            </div>
            <div className="hr-filter-radio-group">
                <input type="radio" id="summary" name="summary" value="summary" />
                <label id="summary-label" for="summary">Summary</label>
                <input type="radio" id="branchWise" name="branchWise" value="branchWise" /> 
                <label for="branchWise">Branch Wise</label> 
            </div>
        </div>
    )
}