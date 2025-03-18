import React from 'react';

//Version 18+ de React
// import ReactDOM from 'react-dom/client';

//Version 17 de React
import {render} from 'react-dom';

import './index.css';
import App from './App';

//Version 17 de React
const root = document.getElementById('root');
render(<App/>, root)


//Version 18+ de React
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
