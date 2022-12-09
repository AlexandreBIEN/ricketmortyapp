import '../styles/App.css';
import '../styles/App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Single from '../pages/Single';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/details/:id" element={<Single />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
