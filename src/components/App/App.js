import { Routes, Route } from "react-router-dom";

import Footer from "../Footer/Footer";
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/saved-news" element={<SavedNews />}/> 
        </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
