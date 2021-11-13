import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
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
        console.log( document.getElementsByTagName("html")[0])
    }

    return (
        <div>
        <header>
          <span id="theme-toggle" className="theme-toggle" onClick = {toggleTheme}></span>
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
