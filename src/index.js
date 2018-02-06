import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const theme = {
  primaryColor: '#0b5596',
  secondaryColor: '#0b5495',
  primaryFontColor: '#FFF',
  primaryGrey: '#dbdedf',
  secondaryGrey: '#70797e'
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
