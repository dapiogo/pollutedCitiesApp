import React from "react";
import searchImg from "../../assets/img/search.svg";
import errorImg from "../../assets/img/error.svg";
import style from './Form.module.scss';

const Form = ({onSubmit, onChange, onKeyDown, value, autocompleteList, error }) => (
    <div className={style.wrapper}>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search country"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={value}
            />
            <button><img src={error ? errorImg : searchImg} alt="search"/></button>
        </form>
        {autocompleteList}
    </div>
);

export default Form;
