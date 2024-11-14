import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Container from './components/Container';

const App = () => (
    <Router>
        <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Добавим другие страницы позже */}
      </Routes>
      <Footer />
        </Container>
    </Router>
);

export default App;
