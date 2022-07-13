import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/saved-news" element={<SavedNews />}/> 
        </Routes>
    </div>
  );
}

export default App;
