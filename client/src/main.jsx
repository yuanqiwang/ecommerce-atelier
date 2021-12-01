import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import App from './app.jsx';

const Main = () => {

  const toggleTheme = () => {
     const htmlTag = document.getElementsByTagName("html")[0]
        if (htmlTag.hasAttribute("data-theme")) {
            htmlTag.removeAttribute("data-theme")
            return
        }
        htmlTag.setAttribute("data-theme", "dark")
    }

    return (
        <div>
        <header>
          <div className = "logo-name" id = "logo-name">cinquante-sept</div>
          <div className = "logo-name-layer">57</div>
          <div id="search">
            <input id="search-input" placeholder="Search..."/>
            <button id="search-button"><i className="fa fa-search"></i></button>
          </div>
        </header>
        <span id="theme-toggle" className="theme-toggle" onClick = {toggleTheme}></span>
        <main>
          <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/product/:pid" element={<App />} />
            </Routes>
          </HashRouter>
        </main>
        <footer>
        <div className ='copyright'>
        2021 Cinquante-Sept Copyright@KetchUp Team
        </div>
        </footer>
        </div>
    )

}

ReactDOM.render(<Main />, document.getElementById('app'));
