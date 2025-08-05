// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import { registerSW } from 'virtual:pwa-register';
import DummyList from './page/DummyList.tsx';

registerSW();

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/data' element={<DummyList />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
  ,
)
