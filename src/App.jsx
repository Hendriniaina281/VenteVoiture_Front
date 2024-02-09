import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Annonce from './components/Annonce';
import "./App.css";
import Accueil from "./components/Accueil";
import Favorite from "./components/Favorite";
import Search from "./components/Search";
import Chat from "./components/Chat";
import Connecting from "./components/Connecting";
import ResultatRecherche from "./components/ResultatRecherche";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Accueil/>} />  
        <Route path="/annonce" element={<Annonce/>} />
        <Route path="/favoris" element={<Favorite/>} />  
        <Route path="/recherche" element={<Search/>} />    
        <Route path="/chat/:prop" element={<Chat/>} />   
        <Route path="/connect" element={<Connecting/>} />  
        <Route path="/result" element={<ResultatRecherche/>} />    
      </Routes>
    </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);