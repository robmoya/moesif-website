import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import '../scss/app.scss';
require('bootstrap-sass');

render(<App />,document.getElementById('root'),);
