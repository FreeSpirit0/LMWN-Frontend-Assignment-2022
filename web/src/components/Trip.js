import React, { useContext } from 'react';
import { TruncateText } from './common/TruncateText';
import { Tags } from './Tag';
import { useTrips } from '../hooks/useTrips';
import { SearchParamContext } from './SearchBar';
import style from '../styles/TripCard.module.css';

export function TripCard(props) {
    const { title, url, description, photos, tags } = props;
    const [mainPhoto, ...subPhotos] = photos;

    return (
            <div className={style.Card}>
                <div className={style.MainImageContainer}>
                    <img src={mainPhoto}></img>
                </div>
                <div className={style.ContentWrapper}>
                    <div className={style.TripHeader}>
                        <h1><a href={url}>{title}</a></h1>
                    </div>
                    <div className={style.TripInformation}>
                        <TruncateText text={description} 
                        readMore={<a href={url}>อ่านต่อ...</a>}>
                        </TruncateText>
                        <Tags tags={tags}></Tags>
                    </div>
                    <div className={style.SubImageContainer}>
                        {subPhotos.map(photo => <img src={photo}></img>)}
                    </div>
                </div>
            </div>
        )    
};

export function Trips() {
    const { keyword, setKeyword } = useContext(SearchParamContext);
    const trips = useTrips(keyword);

    return <div>{trips.map(trip => <TripCard {...trip}/>)}</div>;
};