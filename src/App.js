import React, { useState } from 'react';
import { RoutesComponents } from './assets/data/data';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = () => {

  let [color, setColor] = useState('white');

  return (
    <div style={{ backgroundColor: color, minHeight: '100vh' }}>
      <Header color={color} setColor={setColor} />
      <Routes>
        {RoutesComponents.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer color={color} setColor={setColor} />
    </div>
  );
};

export default App;