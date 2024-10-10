import React from 'react';
import './App.scss';
import Survey from './components/survey/Survey';
import logo from './assets/images/crossbuilders.svg'

function App() {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <img src={logo} />
          <div className="header-placeholder">
            <ul>
              <li>
                <a >Survey</a>
              </li>
              <li>
                <a>Results</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <Survey></Survey>
      </main>
      <footer>
      </footer>
    </React.Fragment>
  );
}

export default App;
