import React from 'react';
import "react-multi-carousel/lib/styles.css";
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
