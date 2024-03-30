import React, { useState } from 'react';
import flightData from '../data/flights.json';
import bookingData from '../data/bookings.json';
import CurrencyConverter from '../components/CurrencyConverter';
import { Typography } from '@mui/material';

const FlightBooking = ({ onBook }) => {

  const styles = {
    table: {
      borderCollapse: 'collapse',
      width: '94%',
      margin:'30px'
    },
    header: {
      background:'#0C0404',
      color:'#fff',
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    cell: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
    },
    alternateCell1: {
      backgroundColor: '#fff',
    },
    alternateCell2: {
      backgroundColor: '#F5F5F5',
    },
    input: {
      width: '50%',
      padding: '8px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    select: {
      width: '70%',
      padding: '8px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    button: {
      padding: '8px 12px',
      backgroundColor: '#0C0404',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
  }
};
  const [bookings, setBookings] = useState(bookingData);
  const [currencyData, setCurrencyData] = useState(
    flightData.map((flight) => ({
      flightId: flight.id,
      amount: 100, // Default amount in USD
      baseCurrency: 'USD',
    }))
  );

  const handleAmountChange = (event, flightId) => {
    const updatedCurrencyData = currencyData.map((data) =>
      data.flightId === flightId ? { ...data, amount: event.target.value } : data
    );
    setCurrencyData(updatedCurrencyData);
  };

  const handleCurrencyChange = (event, flightId) => {
    const updatedCurrencyData = currencyData.map((data) =>
      data.flightId === flightId ? { ...data, baseCurrency: event.target.value } : data
    );
    setCurrencyData(updatedCurrencyData);
  };

  const handleBooking = (flightId) => {
    const bookedFlight = flightData.find((flight) => flight.id === flightId);
    if (bookedFlight.available_seats > 0) {
      bookedFlight.available_seats -= 1;
      setBookings([...bookings, bookedFlight]);
      onBook(bookedFlight);
    }
  };

  return (
    <div>
      <Typography fontSize={30} fontWeight={600} mt={8} ml={4}>
        Search Results
      </Typography>
      <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.header}>Origin</th>
          <th style={styles.header}>Destination</th>
          <th style={styles.header}>Date</th>
          <th style={styles.header}>Direct</th>
          <th style={styles.header}>Available Seats</th>
          <th style={styles.header}>Ticket Fare</th>
          <th style={styles.header}>Base Currency</th>
          <th style={styles.header}>Currency Converter</th>
          <th style={styles.header}>Book Now</th>
        </tr>
      </thead>
      <tbody>
      
          {flightData.map((flight, index) => (
            <tr key={flight.id} style={index % 2 === 0 ? styles.alternateCell1 : styles.alternateCell2}>
              <td style={styles.cell}>{flight.origin}</td>
              <td style={styles.cell}>{flight.destination}</td>
              <td style={styles.cell}>{flight.date}</td>
              <td style={styles.cell}>{flight.direct ? 'Yes' : 'No'}</td>
              <td style={styles.cell}>{flight.available_seats}</td>
              <td style={styles.cell}>
                <input
                  type="number"
                  style={styles.input}
                  value={currencyData.find((data) => data.flightId === flight.id)?.amount}
                  onChange={(event) => handleAmountChange(event, flight.id)}
                />
              </td>
              <td style={styles.cell}>
                <select style={styles.select}
                  value={currencyData.find((data) => data.flightId === flight.id)?.baseCurrency}
                  onChange={(event) => handleCurrencyChange(event, flight.id)}
                >
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="USD">USD</option>
                  <option value="CAD">CAD</option>
                  <option value="IPY">IPY</option>
                  <option value="CNY">CNY</option>
                </select>
              </td>
              <td style={styles.cell}>
                <CurrencyConverter
                  baseCurrency={currencyData.find((data) => data.flightId === flight.id)?.baseCurrency}
                  amount={currencyData.find((data) => data.flightId === flight.id)?.amount}
                />
              </td>
              <td style={styles.cell}>
                <button style={styles.button} onClick={() => handleBooking(flight.id)}>Book Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightBooking;
