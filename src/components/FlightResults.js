// src/components/FlightResults.js
import { Typography } from '@mui/material';
import React from 'react';

const FlightResults = ({ results }) => {
  const styles = {
    tableHeader: {
      background:'#0C0404',
      color:'#fff',
      border: '1px solid #dddddd',
      textAlign: 'left',
      padding: '8px',
    },
    tableData: {
      border: '1px solid #dddddd',
      textAlign: 'left',
      padding: '8px',
    },
  };
  return (
    <div>
      <Typography fontSize={30} fontWeight={600} mt={5} ml={4}>Search Results</Typography>
      <table style={{ borderCollapse: 'collapse', width: '94%',margin:'30px' }}>
  <thead>
    <tr>
      <th style={styles.tableHeader} >Origin</th>
      <th style={styles.tableHeader}>Destination</th>
      <th  style={styles.tableHeader}>Date</th>
      <th style={styles.tableHeader}>Direct</th>
      <th style={styles.tableHeader}>Available Seats</th>
      <th style={styles.tableHeader}>Ticket Fare</th>
    </tr>
  </thead>
  <tbody>
    {results.map((flight) => (
      <tr key={flight.id}>
        <td style={styles.tableData}>{flight.origin}</td>
        <td style={styles.tableData}>{flight.destination}</td>
        <td style={styles.tableData}>{flight.date}</td>
        <td style={styles.tableData}>{flight.direct ? 'Yes' : 'No'}</td>
        <td style={styles.tableData}>{flight.available_seats}</td>
        <td style={styles.tableData}>{flight.ticket_fare}</td>
      
      
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

export default FlightResults;
