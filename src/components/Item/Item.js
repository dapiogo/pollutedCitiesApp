import React from "react";
import { translation } from "../../assets/translation/translation";
import style from "./Item.module.scss";
import arrowImg from "../../assets/img/arrow.svg";

const Item = ({parameter, value, unit, city, handleDescription, description}) => {
    const isOpend = description.city === city ? true : false; 
    return (
        <li className={style.wrapper}>
            <div className={style.container}>
                <div className={style.information}>
                    <div>
                        <div className={style.information__title}><h1>{city}</h1><p onClick={()=>handleDescription(city)}><img className={isOpend ? style.on : ''} src={arrowImg} alt="arrow"/></p></div>
                        <div className={style.information__value}><p><span>{parameter}:</span>{value}{unit}</p></div>
                    </div>
                </div>
                <div className={isOpend ? style.description : style.description_close}>
                <h4>{translation.description_city}</h4>
                    <p>{description.description}</p>
                </div>
            </div>
        </li>
    )
}

export default Item;