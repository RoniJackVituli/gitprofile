import React from "react";
import Container from "./components/UI/Container/Container";
import Home from "./components/Web/Home/Home";

import './App.scss';
import {
  BrowserRouter as Router,
  // Navigate,
  Route,
  Routes,
} from "react-router-dom";
import CreateProfile from "./components/Web/CreateProfile/CreateProfile";

function App() {
  return (
    <Router>
      <div className="App">

        <Container>
          <Routes>
            <Route path="/createProfile" element={<CreateProfile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
