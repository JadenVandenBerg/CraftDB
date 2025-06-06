import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Grid from './pages/Grid';
import SubPage from './pages/SubPage';
import GridDetails from './pages/GridDetails';
import Loadouts from './pages/Loadouts';

import { useNavigate } from 'react-router-dom';

function ColorDropdown() {
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const color = e.target.value;
    if (color) {
      navigate(`/loadouts/${color}`);
    }
  };

  return (
    <select onChange={handleChange}
      style={{
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        marginRight: '1rem',
        outline: 'none',
        appearance: 'none',
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '0.9rem',
        padding: '0.5rem 1rem',
      }}>
      <option style={{  color: 'white', backgroundColor: '#e07e01', padding: '1rem', border: 'none', marginRight: '1rem' }}value="">Select Color</option>
      <option style={{  color: 'white', backgroundColor: '#e07e01', padding: '1rem', border: 'none', marginRight: '1rem' }}value="Red">Red</option>
      <option style={{  color: 'white', backgroundColor: '#e07e01', padding: '1rem', border: 'none', marginRight: '1rem' }}value="Blue">Blue</option>
      <option style={{  color: 'white', backgroundColor: '#e07e01', padding: '1rem', border: 'none', marginRight: '1rem' }}value="Black">Black</option>
      <option style={{  color: 'white', backgroundColor: '#e07e01', padding: '1rem', border: 'none', marginRight: '1rem' }}value="White">White</option>
      <option style={{  color: 'white', backgroundColor: '#e07e01', padding: '1rem', border: 'none', marginRight: '1rem' }}value="Orange">Orange</option>
      <option style={{  color: 'white', backgroundColor: '#e07e01', padding: '1rem', border: 'none', marginRight: '1rem' }}value="Yellow">Yellow</option>
      <option style={{  color: 'white', backgroundColor: '#e07e01', padding: '1rem', border: 'none', marginRight: '1rem' }}value="Green">Green</option>
    </select>
  );
}


function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Router>
            <nav style={{ backgroundColor: '#e07e01', padding: '1rem' }}>
                <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
                <ColorDropdown />
                <a
                    href="/Smokes/index.html"
                    style={{ color: 'white', marginRight: '1rem' }}
                >
                    Grenades 
                </a>
            </nav>

            <Routes>
                <Route path="/" element={<Grid />} />
                <Route path="/grid" element={<Grid />} />
                <Route path="/subpage/:gunId" element={<SubPage />} />
                <Route path="/gridDetails/:id" element={<GridDetails />} />
                <Route path="/loadouts/:color" element={<Loadouts />} />
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;
