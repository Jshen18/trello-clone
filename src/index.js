import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import history from './history';
import router from './router';
import routes from './routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const theme = {
  primaryColor: '#0b5596',
  secondaryColor: '#0c5ea6',
  primaryFontColor: '#FFF',
  primaryGrey: '#dbdedf',
  secondaryGrey: '#70797e',
  borderGrey: '#d6dadc',
  baseFontSize: '14px'
}

const container = document.getElementById('root');

function renderComponent(component) {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      { component } 
    </ThemeProvider>,
    container
  );
}

function render(location) {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error })
    .then(renderComponent));
}

render(history.location);
history.listen(render);
registerServiceWorker();