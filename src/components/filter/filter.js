import './filter.css';

const Filter = ({filters = {}, onFilterChange}) => {
    return (
        <div className="row">
            <div className="col">
                <input value={filters.name} onChange = {(e) => {
                    onFilterChange('name', e.target.value)
                }} type='text'/>
            </div>
            <div className="col">
                <select className="form-select" onChange = {(e) => {
                    onFilterChange('status', e.target.value)
                    }} defaultValue={''} aria-label="Default select example">
                    <option value=""></option>
                    <option value="alive">alive</option>
                    <option value="dead">dead </option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className="col">
                <input value={filters.species} onChange = {(e) => {
                    onFilterChange('species', e.target.value)
                }} type='text'/>
            </div>
            <div className="col">
                <input value={filters.type} onChange = {(e) => {
                    onFilterChange('type', e.target.value)
                }} type='text'/>
            </div>
            <div className="col">
                <select className="form-select" onChange = {(e) => {
                    onFilterChange('gender', e.target.value)
                    }} defaultValue={''} aria-label="Default select example">
                    <option value=""></option>
                    <option value="female">female</option>
                    <option value="male">male </option>
                    <option value="genderless">genderless</option>
                    <option value="unknown">unknown</option>
                </select>

            </div>
        </div>
    )
}

export default Filter;
