import { useDispatch, useSelector } from 'react-redux'
import scryfallApiUrl from '../api/scryfallApi.js'
import { setAllSets } from '../store/sets/setsSlice.js';

export const useGetSets = () => {
    const dispatch = useDispatch();

    const getAllSets = async () => {
        try {
            const {data} = await scryfallApiUrl.get('/sets');
            console.log(data.data);
            dispatch(setAllSets(data.data));
            // return data.data;
        }
        catch (error) {
            console.log(error);
        }

    }

    return{

        getAllSets

    }
}