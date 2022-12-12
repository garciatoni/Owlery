import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {useGetSets} from '../../../hooks'

import { SetIcon } from '../SetIcon/SetIcon.jsx'



import style from './AllSets.module.scss';
export const AllSets = () => {
    const {getAllSets} = useGetSets();
    
    const { allSets } = useSelector(state => state.sets);


    useEffect(() => {
        !allSets && getAllSets();
    }, [])





    return (
        <div className={style.allSets}>
        {
        allSets && (
            allSets?.map( (set, id) =>( ['core', 'expansion', 'masters', 'funny'].includes(set.set_type) && <SetIcon key={id} {...set} /> ))
        )
        }
        </div>
    )
}
