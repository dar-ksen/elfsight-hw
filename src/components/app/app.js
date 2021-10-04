import React, { useState, useEffect } from "react";
import CharacterList from "../character-list";
import Filter from "../filter";
import Header from "../header";
import Pagination from "../pagination";
import CharacterModal from "../character-modal";

import "./App.css";

function App() {
    const urlResurse = "https://rickandmortyapi.com/api/character";

    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [filters, setFilters] = useState({
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [activePerson, setActivePerson] = useState(1);

    const onFilterChange = (key, value) => {
        setCurrentPage(1);
        setFilters({...filters, [key]:value});
    }
    
    const onPersonHandler = (id) => {
        setActivePerson(id);
        setIsOpenModal(true)
    }

    useEffect(() => {
        const fetchCharacters = (urlResurse, filters = {}, currentPage = 1 ) => {
          let filterAddres = `/?page=${currentPage}`;
          for (const filter in filters) {
            if (filters[filter] !== '') {
              filterAddres += `&${filter}=${filters[filter]}`;
            }
          };
      
          const url = `${urlResurse}${filterAddres}`;
      
          fetch(url)
            .then((res) => {
              if (!res.ok) {
                throw Error(`is not ok: ` + res.status);
              }
              return res.json()
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
              setError(true);
            });
        };
    
        fetchCharacters(urlResurse, filters, currentPage)
    }, [filters, currentPage]);

    // if (error) {
    //     return <div>error</div>
    // };

    return (
        <>
            <Header title="Frontend Engineer Home Task" {...data.info}/>
            <div className="container py-5">
                <Filter onFilterChange={onFilterChange} filters={filters} />
                <CharacterList characters = {data.results} onPersonHandler = {onPersonHandler} />
                <Pagination currentPage = {currentPage} setCurrentPage={setCurrentPage} {...data.info}/>
            </div>
        </>
    );
}

export default App;
