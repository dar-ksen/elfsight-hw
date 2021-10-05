import React, { useState, useEffect } from "react";
import CharacterList from "../character-list";
import Filter from "../filter";
import Header from "../header";
import Pagination from "../pagination";
import CharacterModal from "../character-modal";
import Boundry from "../boundary";
import Footer from "../footer";
import CharacterService from "../../service/character-service";

import { useModali } from "modali";

import useDebounce from "../../hooks/useDebounce";

import "./app.css";

const characterService = new CharacterService();

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });

  const debounceFilters = useDebounce(filters, 500);

  const [currentPage, setCurrentPage] = useState(1);

  const [modal, toggleModal] = useModali({
    animated: true,
    title: "Person detail",
  });

  const [activePerson, setActivePerson] = useState(undefined);

  const onFilterChange = (key, value) => {
    setCurrentPage(1);
    setFilters({ ...filters, [key]: value });
  };

  const onPersonHandler = (id) => {
    setActivePerson(id);
    toggleModal();
  };

  useEffect(() => {
    setLoading(true);
    characterService
      .getFiltersCharacter(debounceFilters, currentPage)
      .then((data) => {
        setData(data);
        setLoading(false);
        setError('');
    })
    .catch((error) => {
      console.error(error);
      setData({});
      setError(error.status);
    });
  }, [debounceFilters, currentPage]);

  return (
    <div className="app">
      <Header title="Frontend Engineer Home Task" {...data.info} />
      <div className="container layout">
        <aside className="sidebar">
          <Filter onFilterChange={onFilterChange} filters={filters} />
        </aside>
        <main className="main">
          <Boundry hasError={error} isLoading={loading}>
            <CharacterList
              characters={data.results}
              onPersonHandler={onPersonHandler}
            />
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              {...data.info}
            />
          </Boundry>
        </main>
      </div>
      <Footer />
      <CharacterModal settings={modal} activePerson={activePerson} />
    </div>
  );
}

export default App;
