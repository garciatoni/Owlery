import style from './Set.module.scss';

export const Set = ({name, icon_svg_uri}) => {

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
    <div className={style.set}>
        <img src={icon_svg_uri} alt={name} />
        {/* <span>{name}</span> */}
    </div>
  )
}
