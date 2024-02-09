import React,{useState} from 'react';
import '../css/styleAnnonce.css';
import '../css/fonts/fontawesome-all.min.css';
import Details from './Details';
import Contact from './Login';
import Popup from 'reactjs-popup';

function ListAnnonce(props) {
    const [isFavorite, setIsFavorite] = useState(false);
    const token = sessionStorage.getItem("token");
    const [showPopup, setShowPopup] = useState(false);

    const handleFavoriteClick = () => {
      if (token == null) {
        setShowPopup(true);
      } else {
        setIsFavorite(!isFavorite);
        addFavorite(props.id);
      }
    };

    const addFavorite = async (id) => {
      try {
          const response = await fetch(`https://webservice-production-4a2c.up.railway.app/annonces/addFavoris/`+id, {
              method: 'PUT',
              headers: {
                'Authorization' : 'Bearer ' + token,
                'Content-Type': 'application/json'
              },
          });
          console.log("nety le");
         await response.text();
        
      } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
      }
      };

    return (
        <div className={`card ${isFavorite ? 'favorite' : ''}`}>
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
            
            <div className='arrow' onClick={handleFavoriteClick}>
              <i id='test' className={`far fa-heart card-icon ${isFavorite ? 'favorite-icon' : ''}`} />

              {token == null && (
                <Popup
                    open={showPopup}
                    position="right center"
                    onClose={() => setShowPopup(false)}
                >
                    Veuillez vous connecter.
                </Popup>
            )}
            </div>
          </div>
        </div>
    );
}

export default ListAnnonce;
