import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {useGetSets} from '../../hooks'

import { Set } from './Set/Set.jsx'



import style from './AllSets.module.scss';
export const AllSets = () => {
    const {getAllSets} = useGetSets();
    
    const { allSets } = useSelector(state => state.sets);
    
    useEffect(() => {
        getAllSets();
    }, [])
    





    return (
        <div className={style.allSets}>
        {
        allSets && (
            allSets?.map( (set, id) =>( ['core', 'expansion', 'masters', 'funny'].includes(set.set_type) && <Set key={id} {...set} /> ))
        )
        }
        </div>
    )
}
