import React, { useState, useEffect } from 'react';

const Categorie = ({ onCategoryChange }) => {
    const [categorie, setCategorie] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://webservice-production-4a2c.up.railway.app/categories/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const datas = await response.json();

                if (response.ok) {
                    setCategorie(datas.data);
                } else {
                    alert(datas.message);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);

    const recupValue = (event) => {
        const selectedValue = event.target.value;
        onCategoryChange(selectedValue)
    };

    return (
        <div>
            <p>Categorie:</p>
            <select id='dropdown' className='form-input-size' required onChange={recupValue}>
                <option>Choisir</option>
                {categorie.map((listC, index) => (
                    <option key={index} value={listC.nom}>{listC.nom}</option>
                ))}
            </select>
        </div>
    );
};

export default Categorie;
