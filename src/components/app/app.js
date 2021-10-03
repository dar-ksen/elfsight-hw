import CharacterList from '../character-list';
import Filter from '../filter';
import Header from '../header';

import './App.css';

function App() {
  return (
      <>
        <Header title="Frontend Engineer Home Task" />
        <div className="container py-5">
            <Filter />
            <CharacterList/>
        </div>

      </>
  );
}

export default App;