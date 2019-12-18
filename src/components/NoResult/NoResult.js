import React from "react";
import NoResultImg from "../../assets/img/noresultfound.png";
import style from './NoResult.module.scss';

const NoResult = () => <div className={style.wrapper}><img src={NoResultImg} alt="NoResult"/></div>;
export default NoResult;