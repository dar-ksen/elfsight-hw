import React, { useState, useEffect } from "react";
import CharacterList from "../character-list";
import Filter from "../filter";
import Header from "../header";
import Pagination from "../pagination";
import CharacterModal from "../character-modal";
import { useModali } from "modali";

import "./app.css";
import Boundry from "../boundary/";

function App() {
  const urlResurse = "https://rickandmortyapi.com/api/character";

  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  });

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
    const fetchCharacters = (urlResurse, filters = {}, currentPage = 1) => {
      let filterAddres = `/?page=${currentPage}`;
      for (const filter in filters) {
        if (filters[filter] !== "") {
          filterAddres += `&${filter}=${filters[filter]}`;
        }
      }

      const url = `${urlResurse}${filterAddres}`;

      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error(`is not ok: ` + res.status);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(false);
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
          setData({});
        });
    };

    setLoading(true);
    fetchCharacters(urlResurse, filters, currentPage);
  }, [filters, currentPage]);

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
      <CharacterModal settings={modal} activePerson={activePerson} />
    </div>
  );
}

export default App;
