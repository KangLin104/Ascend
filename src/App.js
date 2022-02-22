import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Membership from './pages/Membership.js'
import Committees from './pages/Committees.js'
import MainPage from './pages/MainPage.js'

const App =() => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="membership" element={<Membership />} />
      <Route path="committees" element={<Committees />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
