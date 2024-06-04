import React from 'react';
import ReactDOM from 'react-dom';
import App from '/src/App.jsx';
import './index.css'; 

const jsonData = {
    "documento": "03110567-7",
    "nombres": "Jaime Roberto",
    "apellidos": "Climaco Navarrete",
    "tarjeta": "2346570012456",
    "tipo": "GOLD",
    "telefono": "987654321",
    "poligono": {
                  "type": "FeatureCollection",
                  "properties": 
                  {
                    "tyoe": "name" ,
                    "properties": 
                    {
                      "name": "EPSG:4326"
                    }
                  },
                  "features": [
                    
                  ]
    }

};

console.log('Rendering CardResult with jsonData:', jsonData);

ReactDOM.render(
    <React.StrictMode>
        <App />
        {/*<CardResult jsonData={jsonData} />*/}
    </React.StrictMode>,
    document.getElementById('root')
);
console.log('ReactDOM.render called');

