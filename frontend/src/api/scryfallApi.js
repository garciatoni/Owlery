import axios from 'axios';
// import { getEnvVariables } from '../helpers';

// const { SCRYFALL_API_URL } = getEnvVariables();

// console.log(SCRYFALL_API_URL)

const scryfallApi = axios.create({
    baseURL: "https://api.scryfall.com",
})

// cards/search   ?q=jace

export default scryfallApi;