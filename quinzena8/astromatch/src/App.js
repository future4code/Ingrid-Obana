
import React, {useState} from 'react';
import './App.css';
import MainPage from './Pages/MainPage';
import MatchesPage from './Pages/MatchesPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState("mainPage")

  const renderPage = () => {
    if(currentPage === 'mainPage'){
      return (
        <MainPage changePage={changePage}/>
      )
    } else if (currentPage ==='matchesPage')
      return <MatchesPage changePage={changePage}/>
  };

  const changePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <h1>AstroMatch</h1>
      {renderPage()}
      
    </div>
  );
}

export default App;
