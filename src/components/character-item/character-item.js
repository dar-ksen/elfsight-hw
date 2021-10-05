import PropTypes from "prop-types";
import "./character-item.css";

const CharacterItem = ({
  image,
  url,
  name,
  onPersonHandler,
  width,
  height,
}) => {
  const onClick = (evt) => {
    evt.preventDefault();
    onPersonHandler();
  };

  if (!image) {
    image = `https://via.placeholder.com/${width}x${height}`;
  }

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <a onClick={onClick} href={url} className="character-item">
        <img
          className="character-item__img card-img-bottom"
          src={image}
          alt={name}
          width={width}
          height={height}
        />
        <div className="character-item__content">
          <h5 className="character-item__title">{name}</h5>
        </div>
      </a>
    </div>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string,
  onPersonHandler: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};

Image.defaultProps = {
  name: "Person",
  onPersonHandler: () => {},
  width: 100,
  height: 100,
};

export default CharacterItem;
