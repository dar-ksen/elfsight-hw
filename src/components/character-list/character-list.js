import { Fragment } from 'react';
import CharacterItem from '../character-item';
import './character-list.css';

const CharacterList = ({characters = [], onPersonHandler}) => {
    
    const list = characters.map((character) => {
        const {id, ...props} = character;
        return(
            <Fragment key={id} >
                <CharacterItem {...props} onPersonHandler={() => onPersonHandler(character)} />
            </Fragment>
        )
    });


    return (
        <div className="container">
            <div className="row">
                {list}
            </div>
        </div>
    )
}

export default CharacterList;