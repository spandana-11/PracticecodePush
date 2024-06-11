import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Cartcontex from './Components/Cartcontex';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cartcontex>
    
    <App />
    </Cartcontex>
  </React.StrictMode>
);



