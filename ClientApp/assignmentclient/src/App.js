import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

import StudentsView from "./views/Students/StudentsView";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
