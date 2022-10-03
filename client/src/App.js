import React from "react";
import { Route, Routes } from 'react-router-dom';

import Sidebar from "./components/Sidebar";
import Requests from "./pages/Requests";
import NotFound from "./pages/NotFound";

import './App.css'

const App = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Requests />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
