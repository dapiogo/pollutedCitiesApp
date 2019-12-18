import React from 'react';
import logoImg from "../../assets/img/logo.png";
import style from './Header.module.scss';

const Header = () => (
    <div className={style.wrapper}>
        <a href="/">
            <img src={logoImg} alt="logo"/>
            <h1>The most polluted cities</h1>
        </a>
        <p>Your check 10 most polluted cities in Poland, Germany, Spain or France</p>
    </div>
);

export default Header;