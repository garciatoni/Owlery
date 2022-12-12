import { useDispatch, useSelector } from 'react-redux'
import scryfallApiUrl from '../api/scryfallApi.js'
import { setCardsSet } from '../store';

export const useGetCards = () => {
    const dispatch = useDispatch();

    const getCardsFromSet = async (id) => {
        const dataQuery = `?include_extras=true&include_variations=true&order=set&q=e:${id}&unique=prints`
        try {
            const {data} = await scryfallApiUrl.get('/cards/search' + dataQuery);
            dispatch(setCardsSet(data.data));
        }
        catch (error) {
            console.log(error);
        }
    }

    return{
        getCardsFromSet
    }
}