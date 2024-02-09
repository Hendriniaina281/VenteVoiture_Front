import React,{ useState, useEffect }  from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/stylePopUp.css';
import ListDetail from './ListDetail';

	const Details = (props) => {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://webservice-production-4a2c.up.railway.app/annonces/${props.id}`, {
                    method: 'GET',
                });
                const datas = await response.json();
               // console.log(datas);
                if (response.ok) {
                    setDetail(datas.data);
                    
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
		<div>
			<Popup trigger=
				{<button>Details</button>}
				position="right center">
				<div className='pop'>
					<ListDetail descri={detail.description} categorie={detail.categorie} marque={detail.marque} prix={detail.prix} id={detail.id}/>
				</div>
			</Popup>
		</div>
	);
	};

export default Details;
