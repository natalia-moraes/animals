import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import { UseStorage } from "./UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UseStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route 
              path="conta/*" 
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Footer />
        </UseStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
