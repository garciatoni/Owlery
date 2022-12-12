import axios from 'axios';
// import { getEnvVariables } from '../helpers';

// const { SCRYFALL_API_URL } = getEnvVariables();

const scryfallApi = axios.create({
    baseURL: "https://api.scryfall.com",
})

// cards/search   ?q=jace

export default scryfallApi;