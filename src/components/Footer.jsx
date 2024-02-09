import React from 'react';
import '../css/styleFooter.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>À propos de nous</h4>
            <ul>
              <li><Link to="#">Qui sommes-nous</Link></li>
              <li><Link to="#">Nos services</Link></li>
              <li><Link to="#">Politique de confidentialité</Link></li>
              <li><Link to="#">Programme d'affiliation</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Aide à l'achat de voiture</h4>
            <ul>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Livraison</Link></li>
              <li><Link to="#">Retours</Link></li>
              <li><Link to="#">Statut de la commande</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Nos Voitures</h4>
            <ul>
                <li><Link to="#">Voitures</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <Link to="#"><i className="fab fa-facebook-f"></i></Link>
              <Link to="#"><i className="fab fa-twitter"></i></Link>
              <Link to="#"><i className="fab fa-instagram"></i></Link>
              <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
