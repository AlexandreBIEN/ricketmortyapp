import '../styles/App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Single from '../pages/Single';

// Router
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Affiche la page home quand l'url est autre chose que /home ou /details */}
        <Route path="*" element={<Home />}/>
        {/* Affiche la page home quand l'url est /home */}
        <Route path="/home" element={<Home />}/>
        {/* Affiche la page details quand l'url est /details avec l'id du personnage */}
        <Route path="/details/:id" element={<Single />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
