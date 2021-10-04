import Input from "../input";
import Select from "../select";
import "./filter.css";

const Filter = ({ filters = {}, onFilterChange }) => {
  return (
    <div className="container mb-5">
      <h5>Filters</h5>
      <Input
        value={filters.name}
        name="name"
        onFilterChange={onFilterChange}
        type="text"
      />
      <Select
        label="Choose status:"
        name="status"
        onFilterChange={onFilterChange}
        values={["alive", "dead", "unknown"]}
      />
      <Input
        value={filters.species}
        label="Species:"
        name="species"
        onFilterChange={onFilterChange}
        type="text"
      />

      <Input
        value={filters.type}
        label="Type:"
        name="type"
        onFilterChange={onFilterChange}
        type="text"
      />

      <Select
        label="Gender:"
        name="gender"
        onFilterChange={onFilterChange}
        values={["female", "male", "genderless", "unknown"]}
      />
    </div>
  );
};

export default Filter;
