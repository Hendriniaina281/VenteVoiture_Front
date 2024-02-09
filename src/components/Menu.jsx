import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import '../css/styleHeader.css';

function Menu() {
    const token = sessionStorage.getItem("token");

    const handleDeco = () => {
        //alert("deco");
        deconnect();
    }   

    const deconnect = async () => {
        try {
            const response = await fetch(`https://webservice-production-4a2c.up.railway.app/utilisateurs/logout`, {
                method: 'POST',
                headers: {
                  'Authorization' : 'Bearer ' + token,
                  'Content-Type': 'application/json'
                },
            });
           
           await response.text();
           sessionStorage.removeItem("token");
           window.location.href = '/';
          
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    return (
    <div>
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id=""/>
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                
                <ul className="menu-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favoris">Favoris</Link></li>
                    <li><Link to="/recherche">Recherche</Link></li>
                    <li><Link to="/connect">SeConnecter</Link></li>
                    <li><i onClick={handleDeco} className='fas fa-power-off'/></li>
                </ul>
                
                <h1 className="logo">BizinaFiara</h1>
                
            </div>
        </nav>
    <Outlet/>
    </div>
  );
}

export default Menu;