import React, { useEffect } from "react";
import Container from "./components/UI/Container/Container";
import Home from "./components/Web/Home/Home";
import ReactGA from "react-ga";
import "./App.scss";
import {
  BrowserRouter as Router,
  // Navigate,
  Route,
  Routes,
} from "react-router-dom";
import CreateProfile from "./components/Web/CreateProfile/CreateProfile";

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS;

ReactGA.initialize(TRACKING_ID!);

function App() {
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])
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
