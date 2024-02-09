import React from 'react';
import '../css/styleRecherche.css';
import Categorie from './Categorie';
import Marque from './Marque';
import { useNavigate } from 'react-router-dom';

function Recherche() {
    let selectedCategorie = '';
    let selectedMarque = '';
    let prixMin = '';
    let prixMax = '';

    const navigate = useNavigate(); 

    const handleCategoryChange = (category) => {
        selectedCategorie = category;
    };

    const handleMarqueChange = (marque) => {
        selectedMarque = marque;
    };

    const handlePrixMinChange = (event) => {
        prixMin = event.target.value;
    };

    const handlePrixMaxChange = (event) => {
        prixMax = event.target.value;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            "categorie": selectedCategorie,
            "marque": selectedMarque
        };

        const result = await fetchData(data, prixMin, prixMax);

        navigate('/result', { state: { result } }); 
    };

    const fetchData = async (data, min, max) => {
        try {
            const str = 'https://webservice-production-4a2c.up.railway.app/annonces/search?min=' + min + '&max=' + max;
            const response = await fetch(str, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const datas = await response.json();

            if (response.ok) {
                return datas.data
            } else {
                alert(datas.message + "   " + JSON.stringify(data));
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    return (
        <div className="search">
            <form id='survey-form' onSubmit={handleSubmit}>
                <div className='form-input'>
                    <Categorie onCategoryChange={handleCategoryChange} />
                </div>

                <div className='form-input'>
                    <Marque onMarqueChange={handleMarqueChange} />
                </div>

                <div className='form-input'>
                    <p>Prix entre : <input type="text" className='form-input-size' onChange={handlePrixMinChange} /> et <input type="text" className='form-input-size' onChange={handlePrixMaxChange} /></p>
                </div>

                <div className='form-input'>
                    <button type='submit' id='submit'>Valider</button>
                </div>
            </form>
        </div>
    );
}

export default Recherche;
