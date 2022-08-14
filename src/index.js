import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
		<link rel="stylesheet" href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css" />
		<link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
		<link rel="stylesheet" href="https://unpkg.com/primeflex@2.0.0/primeflex.min.css" />

		<script src="https://unpkg.com/react/umd/react.production.min.js"></script>
		<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
		<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
		<script src="https://unpkg.com/react-transition-group@4.4.2/dist/react-transition-group.js"></script>
		<script src="https://unpkg.com/primereact/core/core.min.js"></script>
		<script src="https://unpkg.com/primereact/galleria/galleria.min.js"></script>
		<script src="https://unpkg.com/primereact/slider/slider.min.js"></script>

		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
