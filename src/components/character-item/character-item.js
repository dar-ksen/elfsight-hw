import './character-item.css';

const CharacterItem = ({image, name, onPersonHandler}) => {
    const onClick = (evt) => {
        evt.preventDefault();
        onPersonHandler();
    };

    return (
        <div onClick={onClick} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="character-item">
                <img className="character-item__img card-img-bottom" src={image} alt="character" />
                <div className="character-item__content">
                    <h5 className="character-item__title">{name}</h5>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;