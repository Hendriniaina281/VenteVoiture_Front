import React from 'react';
import Annonce from './Annonce';
import Footer from './Footer';
import Menu from './Menu';

function Accueil() {
    return (
        <div>
            <Menu/>
            <Annonce/>
            <Footer/>
        </div>
        
    );
}

export default Accueil;
