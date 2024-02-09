import React from 'react';

function ListDetail(props) {
    return (
        <div>
            <p>Description: {props.descri}</p>
            <p>Categorie: {props.categorie}</p>
            <p>Marque: {props.marque}</p>
            <p>Prix: {props.prix}</p>
        </div>
    );
}

export default ListDetail;
