import React from 'react';
import MainLayout from './layout/MainLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout>
        <h1>Hello World</h1>
      </MainLayout>} />
    </Routes>
  );
}

export default App;