import React,{ useState } from 'react';
import '../css/styleMessage.css';

function Message(props) {
    const token = sessionStorage.getItem('token');
	const [message, setMessage] = useState(null);
	const id = {
		iduser: props.prop
	}

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(message);
		var chat = document.createElement('div');
		chat.classList.add("message", "parker"); 
		chat.append(message);
		var content = document.getElementById("chat");
		content.append(chat);
		var input = document.getElementById("input");
		input.value="";

		const user = await fetchUser(); 

		const ret = await fetchData();
		
		const v = JSON.parse(JSON.stringify(ret));
		const res = JSON.parse(JSON.stringify(v.data));
		console.log("VVVV "+JSON.stringify(v.data));

		for (let i = 0; i < res.length; i++) {
			const data = {
				to: res[i]['token'],
				message: message,
				sender: user
			};
			console.log(JSON.stringify(data));
			await fetchNotif(data);
		}	
    };

	const fetchNotif = async (data) => {
		try {
		    const response = await fetch(`https://webservice-production-4a2c.up.railway.app/notification/send`, {
		        method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body:JSON.stringify(data),
		    });
			 await response.text();
			
		} catch (error) {
		    console.error('Erreur lors de la récupération des données:', error);
		}
    };

    const fetchUser = async () => {
		try {
		    const response = await fetch(`https://webservice-production-4a2c.up.railway.app/utilisateurs/getNameUser`, {
		        method: 'GET',
				headers: {
					'Authorization' : 'Bearer ' + token,
					'Content-Type': 'application/json'
				},
		    });

		    const datas = await response.text();
			return datas;
		} catch (error) {
		    console.error('Erreur lors de la récupération des données:', error);
		}
    };

    
	const fetchData = async () => {
		try {
		    const response = await fetch(`https://webservice-production-4a2c.up.railway.app/peripherique/getByIdUser`, {
		        method: 'POST',
				body: JSON.stringify(id),
				headers: {
					'Authorization' : 'Bearer ' + token,
					'Content-Type': 'application/json'
				},
		    });

		    const datas = await response.json();
			
			console.log("datas "+JSON.stringify(id));
			return datas;
		} catch (error) {
		    console.error('Erreur lors de la récupération des données:', error);
		}
    };
	
	return (
		<div className="chat">
		  	<div className="contact bar">
				<div><i id='test' className={`far fa-user`} /></div>
				<div className="name">
			  		Tony Stark
				</div>
		  	</div>

		  	<div className="messages" id="chat">
			</div>

		  	<div className="input">
				<i className="fas fa-camera"></i><i className="far fa-laugh-beafa fam"></i><input id="input" placeholder="Type your message here!" type="text" onChange={(e) => setMessage(e.target.value)} value={message}/>
				<i onClick={handleSubmit} className="far fa-paper-plane"></i>
		  	</div>
		<div>
      	
    </div>
		</div>
	)
};

export default Message;
