import React, { useContext } from "react";
import { SearchParamContext } from "./SearchBar";
import style from '../styles/Tag.module.css';

export function Tag(props) {
    const { keyword, setKeyword } = useContext(SearchParamContext);

    function onClickHandler(event) {
        setKeyword(event.target.innerText);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return <p className={style.Tag} onClick={onClickHandler}>{props.tag}</p>;
}

export function Tags(props) {
    const tags = props.tags;
    const addAnd = tag => {
        const tagElement = <Tag tag={tag}></Tag>
        if (tags.length > 1 && tags.indexOf(tag) === tags.length - 1) {
            return <span>และ {tagElement}</span>;
        }
        else {
            return <span>{tagElement} </span>;
        }
    }
    
    return <p className={style.Tags}>หมวด: {tags.map(addAnd)}</p>;
}