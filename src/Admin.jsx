import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "./config/firebase";

const AdminPage = (props) => {
  const [bookings, setBookings] = useState([...props?.books]);
  const [count, setCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const [spin, setSpin] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const updateStatusDone = async (event) => {
    setSpin(" ");
    const xDoc = doc(db, "bookings", event.target.value);
    try {
      await updateDoc(xDoc, { status: "Done" });
      await props.getBookings();
      // setCount(count + 1);
    } catch (err) {
      console.log(err);
    }
    setSpin("");
  };

  const updateStatusCan = async (event) => {
    setSpin(" ");
    const xDoc = doc(db, "bookings", event.target.value);
    try {
      await updateDoc(xDoc, { status: "Cancelled" });
      await props.getBookings();
    } catch (err) {
      console.log(err);
    }
    setSpin("");
  };

  const filteredBookings = selectedDate
    ? bookings.filter(
        (booking) => booking.date === selectedDate.toISOString().slice(0, 10)
      )
    : bookings;

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 800);
    setBookings(props.books);
  }, [count]);

  return (
    <div className="admin-page">
      <nav className="admin-navbar">
        <h1 className="admin-title">Admin Page</h1>
        {/* Navigation buttons or links */}
      </nav>
      <Container className="mt-3">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a date"
          className="form-control mb-3"
        />
        <Table striped bordered hover className="booking-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Destination Booked</th>
              <th>Date Booked</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.location}</td>
                <td>{booking.date}</td>
                <td>{booking.billout}</td>
                <td>{booking.status}</td>
                <td>
                  {spin ? (
                    <>
                      <div className="d-grid">
                        {" "}
                        <Button variant="danger" size="sm" disabled="disabled">
                          Loading
                        </Button>{" "}
                        <Button variant="danger" size="sm" disabled="disabled">
                          Loading
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="d-grid">
                        {" "}
                        <Button
                          variant="primary"
                          size="sm"
                          value={booking.id}
                          onClick={updateStatusDone}
                        >
                          Done
                        </Button>
                      </div>
                      <div className="d-grid">
                        {" "}
                        <Button
                          variant="danger"
                          size="sm"
                          value={booking.id}
                          onClick={updateStatusCan}
                        >
                          Cancelled
                        </Button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AdminPage;
