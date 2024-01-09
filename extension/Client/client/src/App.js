import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar";
import { Main } from "./components/Main";

 


function App() {
  return (
    <div className="App">
    <NavBar />
    <Main />
    </div>
  );
}

export default App;
