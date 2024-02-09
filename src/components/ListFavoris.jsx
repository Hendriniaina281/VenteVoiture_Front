import React from 'react';
import '../css/styleAnnonce.css';
import '../css/fonts/fontawesome-all.min.css';
import Details from './Details';
import Contact from './Login';

function ListFavoris(props) {
    return (
        <div className='card'>
          <div className='image'>
            <img src={props.src} alt='Voiture' />
          </div>

          <div className='content'>
            <h3>{props.categorie}</h3>
            <p>{props.titre}</p>

            <div className='detail'>
              <Details id={props.id}/>
            </div>

            <div className='contact'>
              <Contact prop={props.prop}/>
            </div>
          </div>
        </div>
    );
}

export default ListFavoris;
