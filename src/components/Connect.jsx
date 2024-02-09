import React, { useState, useEffect } from 'react';
import '../css/styleAnnonce.css';
import '../css/fonts/fontawesome-all.min.css';
import '../css/styleLogin.css';

const Connect = () => {
    const [email, setEmail] = useState('grace@gmail.com');
    const [password, setPassword] = useState('456');
    const [redirect, setRedirect] = useState(false)
    const token = sessionStorage.getItem("token");

    useEffect(() => {
        if (redirect) {
            setRedirect(false);
            console.log("tafiditra "+token);
            window.location.href = '/';
			
        }
    }, [redirect,token]);
                                                                 
    if (token) {
		console.log("tokenina");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('email', email);
        data.append('mdp', password);

        const utilisateurs = {
            "email":email,
            "mdp":password
        }
        console.log(JSON.stringify(utilisateurs));
        console.log("mail  "+email+"  pass: "+password);


        try {
            const response = await fetch('https://webservice-production-4a2c.up.railway.app/utilisateurs/login', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(utilisateurs)
            });
            const responseData = await response.json();
            
            if (response.ok) {
                sessionStorage.setItem('token', responseData.data);
                setRedirect(true);
                
            } else {
                console.log(responseData.message);
                alert("tsy nety "+responseData.message);
            }
        } catch (error) {
            console.error('Erreur pendant la requête:', error);
            alert('Une erreur s\'est produite.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="annonce">
                <div className="main">
			        <p className="sign">Login</p>
                    <input className="un" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Username" />
                    <input className="pass" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <button className="submit">Sign in</button>
		        </div>
            </div>
        </form>   
    );
};

export default Connect;
