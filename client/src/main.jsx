import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom';
import App from './app.jsx';

const Main = () => {


    return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/product/:pid" element={<App />} />
            </Routes>
          </BrowserRouter>
        </div>
    )

}

ReactDOM.render(<Main />, document.getElementById('app'));