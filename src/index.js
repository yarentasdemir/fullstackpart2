import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//bütün düğüm buarada yönetiliyor.
// önce boş sayfa yüklemesi oluyor, daha sonra jsler çalışıyor.
const root = ReactDOM.createRoot(document.getElementById('root'));

//roota ekleme yap:
root.render(
  <App></App>

);

