import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Route, Routes } from "react-router-dom";
import NavigationBar from "./Navbar";
import AdminPage from "./Admin";
import Login from "./Login";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "./config/firebase";
import { useEffect, useState } from "react";

function App() {
  const dbRefbk = collection(db, "bookings");
  const [books, setBooks] = useState([]);

  const getBookings = async () => {
    try {
      const data = await getDocs(dbRefbk);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBooks(filteredData);
      console.log("booksgood");
      console.log(books);
    } catch (err) {
      if (auth.currentUser) {
        alert("cannot connect to firebase servers");
      }
      setBooks([]);
      console.error(err);
    }
  };
  useEffect(() => {
    console.log("app started");
    getBookings();
  }, []);

  return (
    <div className="App">
      <NavigationBar />

      {/* <TEST /> */}
      <Routes>
        <Route
          exact
          path="/Admin"
          element={
            <AdminPage key={books} books={books} getBookings={getBookings} />
          }
        />
        <Route
          exact
          path="/AdLogin"
          element={<Login getBookings={getBookings} />}
        />
        <Route
          exact
          path="/capstoneadmin"
          element={<Login getBookings={getBookings} />}
        />
      </Routes>
    </div>
  );
}

export default App;
