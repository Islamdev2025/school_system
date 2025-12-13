import React from "react";
import "./App.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SectionGo from "./components/sectionGo/SectionGo";

function App() {
  return (
    <div className="app">
        <Header />
        <SectionGo />
        <Footer />
    </div>
  );
};

export default App;