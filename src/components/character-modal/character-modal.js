import './character-modal.css';
import Modali from 'modali';

const CharacterModal = ({settings, activePerson}) => {
    return (
        <Modali.Modal {...settings}>
            Hi, active Person is {activePerson.name}
        </Modali.Modal>
    )
}

export default CharacterModal;