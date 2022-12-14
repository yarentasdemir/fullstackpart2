import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import { CartProvider } from './contextSample/CartContext';

//bütün düğüm buarada yönetiliyor.

// önce boş sayfa yüklemesi oluyor, daha sonra jsler çalışıyor.
const root = ReactDOM.createRoot(document.getElementById('root'));

//roota ekleme yap:
root.render(
  <BrowserRouter>
  <CartProvider>
  <App></App>
  </CartProvider>
  </BrowserRouter>


);

