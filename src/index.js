import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import APManager from './Pages/raul';
import Aps from './Pages/aps'
import PViewer from './Pages/paathiviewer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import PBetween from './Pages/paathBetween';
import Schedule from './Pages/Schedule';
import { CheckboxProvider } from './Components/CheckboxContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <CheckboxProvider>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<APManager/>}></Route>
        <Route path='/aps' element={<Aps/>}></Route>
        <Route path='/pts' element={<PViewer/>}></Route> 
        <Route path='/aps/gndj' element={<PBetween/>}></Route>
        <Route path='/aps/gndj/gnp' element={<App/>}></Route>
        <Route path='/aps/gndj/schedule' element={<Schedule/>}></Route>
      </Routes>
    </BrowserRouter>
    </CheckboxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
