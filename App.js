import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

import { Login } from "./Components/assets/Login/login";
import { Register } from "./Components/assets/register";
function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
return(
  <div className="App">
  {
    currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
  }
</div>
);
}
export default App;
