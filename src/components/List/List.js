import React from "react";

const List = ({cities}) => {
    console.log(cities.length)
    return (
        <>
        { cities.map(el => <p>{el.city}</p>) }
        </>
    )
}



export default List;