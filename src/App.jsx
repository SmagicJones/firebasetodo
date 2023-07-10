import "./App.css";

import { Routes, Route } from 'react-router-dom';


import { Auth } from "./components/auth";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Dashboard/> }/>
      <Route path="/login" element={ <Auth />}/>
    </Routes>
    </>
  );
}

export default App;
