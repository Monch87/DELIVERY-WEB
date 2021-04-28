import axios from 'axios'

class CocktailService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g',
        })
    }

    getCocktails = () => this.api.get('')
}

export default CocktailService
