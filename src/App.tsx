import React from 'react';
import './App.scss';
import Survey from './components/survey/Survey';
import logo from './assets/images/crossbuilders.svg'
import { Link, Route, Routes } from 'react-router-dom';
import SurveyResults from './components/survey-results/SurveyResults';

function App() {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <img src={logo} />
          <nav className="header-placeholder">
            <ul>
              <li>
                <Link to="/survey" >Survey</Link>
              </li>
              <li>
                <Link to="results" >Results</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='*' element={<Survey></Survey>}></Route>
          <Route path='/survey' element={<Survey></Survey>}></Route>
          <Route path='/results' element={<SurveyResults></SurveyResults>}></Route>
        </Routes>
      </main>
      <footer>
      </footer>
    </React.Fragment>
  );
}

export default App;
