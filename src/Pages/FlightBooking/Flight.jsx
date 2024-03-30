import React,{useState} from 'react';
import flightData from "../../data/flights.json";
import FlightSearchBar from '../../components/FlightSearchBar';
import FlightResults from '../../components/FlightResults';
import FlightBooking from '../../components/FlightBooking';
import Navbar from '../../components/Navbar';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const Flight = () =>{
    const [searchResults, setSearchResults] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSearch = ({ origin, destination, date, direct }) => {
    const filteredFlights = flightData.filter((flight) => {
      return (
        flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
        flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
        flight.date === date &&
        (direct ? flight.direct : true)
      );
    });

    if (filteredFlights.length === 0) {
      setAlertMessage('* No flights available for the selected criteria.');
    } else {
      setSearchResults(filteredFlights);
      setAlertMessage('');
    }
  };

  const handleBooking = (bookedFlight) => {
    // Save bookedFlight data to a database or perform any necessary actions
    console.log('Booking made:', bookedFlight);
  };
  return (
    <div>
    
        <Typography variant='h3'
        color='black'
        fontWeight={650}
        textAlign='center'
        mt={5}
        fontFamily="Lato, sans-serif"
        >
          Flight Booking System
        </Typography>
        <Divider 
        sx={{
          mt:2,
          mx:55,
          borderBottomWidth: '3px',
          borderColor:'darkgray'
        }}/>
        <Typography variant='h6'
        color='black'
        fontWeight={500}
        textAlign='center'
        fontFamily="Lato, sans-serif"
       mt={1}
        >
          Let Your Dreams Take Flight!
        </Typography>
        {alertMessage && <div style={{color:'red', textAlign:'center',marginTop:'20px'}}>{alertMessage}</div>}
      <FlightSearchBar onSearch={handleSearch} />
      <FlightResults results={searchResults} />
      <FlightBooking onBook={handleBooking} />

    </div>
  )
}

export default Flight;