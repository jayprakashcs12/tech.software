import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { RoutesComponents } from './assets/data/data';

const App = () => {

  const [selectColor, setSelectColor] = useState('#99B898');

  return (
    <div style={{ backgroundColor: selectColor, minHeight: '100vh' }}>
      <Header selectColor={selectColor} setSelectColor={setSelectColor} />
      <Routes>
        {RoutesComponents.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer selectColor={selectColor} setSelectColor={setSelectColor} />
    </div>
  );
};

export default App;