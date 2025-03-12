import React from "react"
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
    <LoginPage></LoginPage>
    <HomePage></HomePage>
    </div>
  );
}

export default App;
