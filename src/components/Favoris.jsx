import React,{ useState, useEffect } from 'react';
import '../css/styleFavoris.css';
import '../css/fonts/fontawesome-all.min.css';
import ListFavoris from './ListFavoris';

  const Favoris = () => {
    const token = sessionStorage.getItem("token");
    const [favoris, setFavoris] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://webservice-production-4a2c.up.railway.app/annonces/getByFavoris', {
                    method: 'GET',
                    headers: {
                      'Authorization' : 'Bearer ' + token,
                      'Content-Type': 'application/json'
                    },
                });
                const datas = await response.json();
                //console.log(datas);
                if (response.ok) {
                    setFavoris(datas.data);
                    
                } else {
                   // alert("Vous devez vous connecter");
                }

                //console.log(datas);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    },[token]);

    if (!token) {
      return <div className='error'> <center> Vous devez vous connecter pour voir vos favoris. </center></div>;
    }

  return (
    <div className="annonce">
      {favoris.map((listF) => (
        <ListFavoris titre={listF.titre} src={listF.image} id={listF.id} categorie={listF.categorie} prop={listF.prop} />
      ))};
    </div>
    
  );
}

export default Favoris;
