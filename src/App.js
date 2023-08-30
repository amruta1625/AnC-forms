import React from 'react';
import Header from "./components/Header";
import "./App.css"
import Template from "./components/Template";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formheader from './components/Formheader';
import Centeredtabs from './components/Tabs';
import Question_form from './components/Question_form';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/form/:id" element={<FormPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

function FormPage() {
  return (
    <div>
      <Formheader />
      <Centeredtabs/>
      <Question_form/>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Header />
      <Template />
      <Homepage />
    </div>
  );
}

export default App;
