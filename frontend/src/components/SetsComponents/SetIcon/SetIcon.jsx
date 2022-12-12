import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentSet } from '../../../store';

import style from './SetIcon.module.scss';

export const SetIcon = ({name, icon_svg_uri, code}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (id) => {
    const data = {
      name: name,
      icon: icon_svg_uri,
      code: code
    }
    dispatch(setCurrentSet(data))
    navigate(id)
  };

    // object: string;
    // id: string;
    // code: string;
    // tcgplayer_id?: number;
    // name: string;
    // uri: string;
    // scryfall_uri: string;
    // search_uri: string;
    // released_at: string;
    // set_type: string;
    // card_count: number;
    // digital: boolean;
    // nonfoil_only: boolean;
    // foil_only: boolean;
    // icon_svg_uri: string;
    // mtgo_code?: string;
    // parent_set_code?: string;
    // block_code?: string;
    // block?: string;


  return (
    <div className={style.set} onClick={()=>handleClick(code)}>
        <img src={icon_svg_uri} alt={name} />
        <span className={style.tooltip}>{name} {code}</span>
    </div>
  )
}
