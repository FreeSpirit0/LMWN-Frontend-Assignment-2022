import React from 'react';
import style from '../styles/LandingPage.module.css';
import { Trips } from '../components/Trip.js';
import { SearchBar } from '../components/SearchBar';
import { Error } from '../components/common/Error';

export function LandingPage() {

    return (
        <div className={style.LandingPage}>
            <header className={style.header}>
              <h1 className={style.title}>เที่ยวไหนดี</h1>
            </header>
            <body>
              <Error>
                <SearchBar>
                  <Trips></Trips>
                </SearchBar>
              </Error>
            </body>
        </div>
      );
}
