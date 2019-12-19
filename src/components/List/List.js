import React from "react";
import Item from "../Item/Item";
import style from './List.module.scss';

const List = ({cities,handleDescription, description }) => {
    return (
        <div className={style.wrapper}>
            <ul>
                {cities.map((data,index) => <Item key={index} {...data} handleDescription={handleDescription} description={description}/>) }
            </ul>
        </div>
    )
}



export default List;