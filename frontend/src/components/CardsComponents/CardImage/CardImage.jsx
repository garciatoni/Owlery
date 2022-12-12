import style from './CardImage.module.scss';

export const CardImage = ({image_uris, card_faces}) => {
    
    return (
        <div className={style.cardImage}>

        {
        image_uris && <img className={style.image} src={image_uris.normal} alt="" />
        }
        
        {
        card_faces && (
            <>
                <img className={style.front} src={card_faces[0].image_uris.normal} alt="" />
                <img className={style.back} src={card_faces[1].image_uris.normal} alt="" />
            </>
        )
        }
        </div>
    )
}


