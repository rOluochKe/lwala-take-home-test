import React from "react";
import { Route, Routes } from 'react-router-dom';

import Sidebar from "./components/Sidebar";
import Requests from "./pages/Requests";
import NotFound from "./pages/NotFound";
import Commodities from "./pages/Commodities";

import './App.css'

const App = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Requests />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/commodities" element={<Commodities />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
