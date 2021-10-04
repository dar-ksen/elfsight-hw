import './character-item.css';

const CharacterItem = ({image, name, species, location, onPersonHandler}) => {
    return (
        <div onClick={onPersonHandler} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ minWidth: "200px" }}>
                <img className="card-img-top" src={image} alt="character" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Species: {species}</p>
                    <p className="card-text">Location: {location.name}</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;