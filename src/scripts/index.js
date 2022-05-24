import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './components/hero';
import './components/app-bar';
import './components/feedback';
import App from './views/app';
import './utils/skip-to-content';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.header'),
  content: document.querySelector('#mainContent'),
  navLink: document.querySelector('.nav'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
