import { useDispatch, useSelector } from 'react-redux'
import scryfallApiUrl from '../api/scryfallApi.js'
import { setAllSets } from '../store/sets/setsSlice.js';

export const useGetSets = () => {
    const dispatch = useDispatch();

    const getAllSets = async () => {
        try {
            const {data} = await scryfallApiUrl.get('/sets');
            dispatch(setAllSets(data.data));
        }
        catch (error) {
            console.log(error);
        }
    }
    
    const getSet = async (code) => {
        try {
            const {data} = await scryfallApiUrl.get(`/sets/${code}`);
        }
        catch (error) {
            console.log(error);
        }
    }

    return{

        getAllSets,
        getSet

    }
}