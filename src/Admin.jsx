import React, { useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AdminPage = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customerName: "John Doe",
      destination: "Sa puso mo",
      dateBooked: "2023-07-15",
      payment: 1500,
      status: "Reserved",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      destination: "Sa puso mo",
      dateBooked: "2023-07-16",
      payment: 2000,
      status: "Pending",
    },
    // Add more booking objects as needed
  ]);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const updateStatus = (index, newStatus) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking, i) =>
        i === index ? { ...booking, status: newStatus } : booking
      )
    );
  };

  const filteredBookings = selectedDate
    ? bookings.filter(
        (booking) =>
          booking.dateBooked === selectedDate.toISOString().slice(0, 10)
      )
    : bookings;

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{booking.customerName}</td>
                <td>{booking.destination}</td>
                <td>{booking.dateBooked}</td>
                <td>{booking.payment}</td>
                <td>{booking.status}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => updateStatus(index, "Done")}
                  >
                    Done
                  </Button>{" "}
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => updateStatus(index, "Pending")}
                  >
                    Pending
                  </Button>{" "}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => updateStatus(index, "Cancelled")}
                  >
                    Cancelled
                  </Button>
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
