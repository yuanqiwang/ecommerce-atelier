import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom';
import App from './app.jsx';
import Logo from './Logo.svg';

const Main = () => {

    return (
        <div>
        <header>
          <Logo className="logo"/>
        </header>
        <main>
          <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/product/:pid" element={<App />} />
            </Routes>
          </BrowserRouter>
        </main>
        <footer>
        </footer>
        </div>
    )

}

ReactDOM.render(<Main />, document.getElementById('app'));
