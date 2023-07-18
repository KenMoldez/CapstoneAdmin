import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Route, Routes } from "react-router-dom";
import NavigationBar from "./Navbar";
import AdminPage from "./Admin";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      {/* <TEST /> */}
      <Routes>
        <Route exact path="/Admin" element={<AdminPage />} />
        <Route exact path="/AdLogin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
