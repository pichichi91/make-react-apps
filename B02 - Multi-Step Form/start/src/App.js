import React from 'react';
import './App.css';
import { SignupForm } from "./components/SignupForm"

import { BrowserRouter as Router } from "react-router-dom"

export default function App() {
  return (
    <Router>
      <div className="app">
        <SignupForm />

      </div>
    </Router>
  )
}
