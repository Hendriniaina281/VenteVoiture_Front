import React from 'react';
import '../css/styleAnnonce.css';
import '../css/fonts/fontawesome-all.min.css';
import { useLocation } from 'react-router-dom';
import ResultSearching from './ResultSearch';

function Searching()  {
    const location = useLocation();
    const { result } = location.state;

    return (
        <div className="annonce">
            {result.map((listAnnonce) => (
                <ResultSearching key={listAnnonce.id} titre={listAnnonce.titre} src={listAnnonce.image} id={listAnnonce.id} categorie={listAnnonce.categorie} prop={listAnnonce.prop}/>
            ))}
        </div>       
    );
}
export default Searching;
