import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./App.css";
import Login from "./components/Login/login";

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/build-resume" element={<Body />} />
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
