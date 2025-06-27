import { useParams, Link } from 'react-router-dom';
import gunData from '../data/gunData.json';

function Loadouts() {
  let { color } = useParams();
  if (color == null) {
    color = 'red';
  }

  const filteredGuns = gunData.filter(item => item.craft.includes(color));

  if (filteredGuns.length === 0) return <p>No items found for this color.</p>;

  return (
    <div style={{  
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '1rem', 
      padding: '1rem' 
    }}>
      {filteredGuns.map(item => (
        <Link 
            to={`/craft/${item.id}`} 
            key={item.id} 
            style={{ 
                display: 'block', 
                textAlign: 'center', 
                textDecoration: 'none', 
                color: 'white', 
                backgroundColor: '#222', 
                borderRadius: '8px', 
                padding: '0.5rem' 
            }}
            >
            <div 
                style={{ 
                width: '100%', 
                height: '150px', 
                borderRadius: '6px', 
                backgroundImage: `url(${item.img})`, 
                backgroundSize: 'contain', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }} 
                aria-label={item.gun_name}
            />
            <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                {item.gun_name} - {item.skin}
            </div>
        </Link>
      ))}
    </div>
  );
}

export default Loadouts;
