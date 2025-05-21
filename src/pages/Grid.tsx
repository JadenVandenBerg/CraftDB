import { Link } from 'react-router-dom';

const items = [
    { id: 1, name: 'Word', gun: 1, img: './img/ak-47.png' },
    { id: 10, name: 'Craft', gun: 10, img: './img/ak-47.png' },
    { id: 23, name: 'AK-47', gun: 23, img: './img/ak-47.png' },
    { id: 4, name: 'AWP', gun: 4, img: './img/awp.png' },
    { id: 3, name: 'Desert Eagle', gun: 3, img: './img/deagle.png' },
    { id: 22, name: 'Dual Berettas', gun: 22, img: './img/dualies.png' },
    { id: 15, name: 'Famas', gun: 15, img: './img/famas.png' },
    { id: 20, name: 'Five SeveN', gun: 20, img: './img/fiveseven.png' },
    { id: 24, name: 'G3SG1', gun: 24, img: './img/g3sg1.png' },
    { id: 2, name: 'Galil-AR', gun: 2, img: './img/galil-ar.png' },
    { id: 6, name: 'Glock-18', gun: 6, img: './img/glock-18.png' },
    { id: 12, name: 'M4A1-S', gun: 12, img: './img/m4a1-s.png' },
    { id: 13, name: 'M4A4', gun: 13, img: './img/m4a4.png' },
    { id: 7, name: 'Mac-10', gun: 7, img: './img/mac-10.png' },
    { id: 11, name: 'MP7', gun: 11, img: './img/mp7.png' },
    { id: 9, name: 'MP9', gun: 9, img: './img/mp9.png' },
    { id: 17, name: 'Negev', gun: 17, img: './img/negev.png' },
    { id: 21, name: 'Nova', gun: 21, img: './img/nova.png' },
    { id: 19, name: 'P250', gun: 19, img: './img/p250.png' },
    { id: 16, name: 'R8 Revolver', gun: 16, img: './img/r8.png' },
    //{ id: 19, name: 'Sawed Off', gun: 19, img: './img/sawedoff.png' },
    { id: 18, name: 'SSG 08', gun: 18, img: './img/ssg08.png' },
    { id: 8, name: 'Tec-9', gun: 8, img: './img/tec-9.png' },
    { id: 5, name: 'USP-S', gun: 5, img: './img/usps.png' },
    { id: 25, name: 'XM1014', gun: 25, img: './img/xm1014.png' },
    { id: 14, name: 'Zeus x27', gun: 14, img: './img/zeus.png' },
];

function Grid() {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                padding: '1rem',
                width: '100vw',
                boxSizing: 'border-box',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            {items.map(item => (
                <Link
                    to={`/subpage/${item.gun}`}
                    key={item.id}
                    style={{
                        backgroundImage: item.img ? `url(${item.img})` : 'none',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat",
                        color: 'white',
                        padding: '1rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '150px',
                    }}
                    >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}

export default Grid;
