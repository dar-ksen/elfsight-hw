export default class CharacterService {
  _apiBase = 'https://rickandmortyapi.com/api';


  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getCharacters = async () => {
    return await this.getResource(`/character/`);
  };

  getFiltersCharacter = async(filters = {}, currentPage = 1) => {
    const filterUrl = this.getFiltersCharacterUrl(filters);
    return await this.getResource(`/character/?page=${currentPage}${filterUrl}`);
  }

  getCharacter = async (id) => {
    return await this.getResource(`/character/${id}`);
  };
  
  getFiltersCharacterUrl = (filters = {}) => {
    let filterAddres = '';
      for (const filter in filters) {
        if (filters[filter] !== "") {
          filterAddres += `&${filter}=${filters[filter]}`;
        }
      }

      return filterAddres;
  }
}
