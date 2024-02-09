import React,{ useState, useEffect } from 'react';
import '../css/styleAnnonce.css';
import '../css/fonts/fontawesome-all.min.css';
import ListAnnonce from './ListAnnonce';

  const Annonce = () => {
    const [annonce, setAnnonce] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://webservice-production-4a2c.up.railway.app/annonces/nonvendues', {
                    method: 'GET',
                });
                const datas = await response.json();
                //console.log(datas);
                if (response.ok) {
                    setAnnonce(datas.data);
                    
                } else {
                    alert(datas.message);
                }

                //console.log(datas);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    });


  return (
    <div className="annonce">
      {annonce.map((listAnnonce) => (
        <ListAnnonce titre={listAnnonce.titre} src={listAnnonce.image} id={listAnnonce.id} categorie={listAnnonce.categorie} prop={listAnnonce.prop}/>
      ))};
    </div>
    
  );
};

export default Annonce;
