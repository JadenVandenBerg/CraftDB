import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Grid from './pages/Grid';
import SubPage from './pages/SubPage';
import GridDetails from './pages/GridDetails';

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
            </nav>

            <Routes>
                <Route path="/" element={<Grid />} />
                <Route path="/grid" element={<Grid />} />
                <Route path="/subpage/:gunId" element={<SubPage />} />
                <Route path="/gridDetails/:id" element={<GridDetails />} />
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;
