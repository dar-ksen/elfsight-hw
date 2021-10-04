import "./character-modal.css";
import Modali from "modali";

const CharacterModal = ({ settings, activePerson }) => {

  if (!activePerson) {
    return null;
  }

  const { image, name, species, gender, status, location } = activePerson;

  return (
    <Modali.Modal {...settings}>
      <div className="modali-body-style row">
        <div className="col-lg-6 col-sm-12">
          <img className="img-fluid" src={image} alt={name} />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h5>{name}</h5>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Last known location: {location.name}</p>
        </div>
      </div>
    </Modali.Modal>
  );
};

export default CharacterModal;