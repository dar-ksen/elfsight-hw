import Input from "../input";
import Select from "../select";
import "./filter.css";

const Filter = ({ filters = {}, onFilterChange }) => {
  return (
    <div className="filter container mb-5">
      <h5 className="filter__title">Filters</h5>
      <div className="filter__content">
        <Input
          containerClass="filter__item"
          value={filters.name}
          name="name"
          onFilterChange={onFilterChange}
          type="text"
        />
        <Select
          containerClass="filter__item"
          label="Choose status:"
          name="status"
          onFilterChange={onFilterChange}
          values={["alive", "dead", "unknown"]}
        />
        <Input
          containerClass="filter__item"
          value={filters.species}
          label="Species:"
          name="species"
          onFilterChange={onFilterChange}
          type="text"
        />

        <Input
          containerClass="filter__item"
          value={filters.type}
          label="Type:"
          name="type"
          onFilterChange={onFilterChange}
          type="text"
        />

        <Select
          containerClass="filter__item"
          label="Gender:"
          name="gender"
          onFilterChange={onFilterChange}
          values={["female", "male", "genderless", "unknown"]}
        />
      </div>
    </div>
  );
};

export default Filter;
