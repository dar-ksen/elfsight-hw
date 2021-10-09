import PropTypes from "prop-types";
import CharacterItem from "../character-item";
import "./character-list.css";

const CharacterList = ({ characters = [], onPersonHandler }) => {
  const list = characters.map((character) => {
    const { id, ...props } = character;
    return (
      <CharacterItem key={id}
        {...props}
        onPersonHandler={() => onPersonHandler(character)}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">{list}</div>
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array,
  onPersonHandler: PropTypes.func,
};

CharacterList.defaultProps = {
  characters: [],
  onPersonHandler: () => {},
};

export default CharacterList;
