import React , {useState} from 'react';
import style from './styles.module.css';

export default function SearchBar({searchList , searchInput , setSearchInput , placeholder}) {

    console.log(searchInput);
    
    return (
        <div className={style.searchCont}>
            <input className={style.inputCont} 
                onChange={e => setSearchInput(e.target.value)} 
                placeholder = {placeholder}
                />
            <div className={style.imgCont}>
                <img src='/searchIcon.png' className={style.searchImg}/>
            </div>
        </div>
    )
}