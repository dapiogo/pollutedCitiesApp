import React from 'react';
import { translation } from "../../assets/translation/translation";
import logoImg from "../../assets/img/logo.png";
import style from './Header.module.scss';

const Header = () => (
    <div className={style.wrapper}>
        <a href="/">
            <img src={logoImg} alt="logo"/>
            <h1>{translation.title}</h1>
        </a>
        <p>{translation.app_description}</p>
    </div>
);

export default Header;