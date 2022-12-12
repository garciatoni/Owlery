import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetCards } from '../../../hooks';
import { CardImage } from '../../../components';

import RED from '../../../assets/RED.svg' 
import BLUE from '../../../assets/BLUE.svg' 
import BLACK from '../../../assets/BLACK.svg' 
import WHITE from '../../../assets/WHITE.svg' 
import GREEN from '../../../assets/GREEN.svg' 

import style from './Set.module.scss';
export const Set = () => {
  const { getCardsFromSet } = useGetCards();
  const { id } = useParams();
  
  const { currentSet, cardsSet } = useSelector(state=> state.sets);

  console.log(cardsSet);

  useEffect(() => {
    getCardsFromSet(id);
    
  }, []);


  return (
    <div className={style.setPage}>

    <div className={style.menu}>
      <div className={style.menuColors}>
        <img src={WHITE} alt="Red icon" />
        <img src={BLUE} alt="Blue icon" />
        <img src={BLACK} alt="Red icon" />
        <img src={RED} alt="Red icon" />
        <img src={GREEN} alt="Red icon" />
      </div>

      <img className={style.setIcon} src={currentSet.icon} alt={currentSet.name} />
      
      <div className={style.menuColors}>
        <img src={WHITE} alt="Red icon" />
        <img src={BLUE} alt="Blue icon" />
        <img src={BLACK} alt="Red icon" />
        <img src={RED} alt="Red icon" />
        <img src={GREEN} alt="Red icon" />
      </div>
    </div>
    
    <div className={style.cards}>
    {
      cardsSet && 
        cardsSet.map((card, index) => <CardImage key={index} {...card} />)
    }
    </div>

    </div>
  )
}
