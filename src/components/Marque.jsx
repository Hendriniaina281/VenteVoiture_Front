import React,{ useState, useEffect } from 'react';
import '../css/styleAnnonce.css';
import '../css/fonts/fontawesome-all.min.css';

    const Marque = ({ onMarqueChange }) => {
    const [marque, setMarque] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://webservice-production-4a2c.up.railway.app/marques/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const datas = await response.json();
        
                if (response.ok) {
                    setMarque(datas.data);
                } else {
                    alert(datas.message);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    });

    const recupValue = (event) => {
        const selectedValue = event.target.value;
        onMarqueChange(selectedValue)
    };

    return (
        <div>
            <p>Marque:</p>
            <select id='dropdown' className='form-input-size' required onChange={recupValue}>
            <option>Choisir</option>
                {marque.map((listM) => (
                    <option value={listM.nom}>{listM.nom}</option>
                ))};
                
            </select>
        </div>
    );
}

export default Marque;
