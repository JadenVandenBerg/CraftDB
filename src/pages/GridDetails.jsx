import { useParams } from 'react-router-dom';
import gunData from '../data/gunData.json';

function GridDetails() {
  const { id } = useParams();
  const item = gunData.find((g) => g.id === parseInt(id));

  if (!item) return <div>Gun not found</div>;

  return (
    <div className="container" style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{item.gun_name} - {item.skin}</h1>
      <img 
        src={item.img} 
        alt={`${item.gun_name} skin`} 
        style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1rem' }} 
      />

      <p><strong>Type:</strong> {item.type}</p>
      <p><strong>Craft:</strong> {item.craft}</p>

      <h3>Stickers:</h3>
      <ul>
        {item.stickers.map((s, index) => (
          <li key={index}>
            {s.quantity}x <strong>{s.name}</strong> ({s.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GridDetails;
