import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import './App.css'; 

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


