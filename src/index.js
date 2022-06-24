import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavouritesContextProvider } from './store/favourites-context';
// Importing a browser router from react-router-dom


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      {/* Wrapping the app with a browser router*/}
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>
);
