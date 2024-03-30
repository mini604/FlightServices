import React, { useState, useEffect } from 'react';
import flightData from '../data/flights.json';
import Image from "../Image/2.jpeg"
import { Box, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FlightSearchBar = ({ onSearch }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    date: '',
    direct: false
  });

  useEffect(() => {
    // Extract unique origins and destinations from flightData
    const origins = Array.from(new Set(flightData.map((flight) => flight.origin)));
    const destinations = Array.from(new Set(flightData.map((flight) => flight.destination)));

    // Set default origin and destination values
    setFormData(prevState => ({
      ...prevState,
      origin: origins[0],
      destination: destinations[0]
    }));
  }, []);

  const handleSearch = () => {
    onSearch(formData);
    setShowForm(false); // Close the form after search
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  return (
    <div>
      <Box sx={{ background: '#F8F8F8', mt: 5,pb:8, pt: 5, textAlign: 'center' }}>
        <Typography variant='h4' fontWeight={520} fontFamily="Lato, sans-serif">
          Search Your Flights Now!
        </Typography>
        <Grid container justifyContent="center">
          <Grid item md={6}>
            <br/>
            <Dialog open={showForm} onClose={() => setShowForm(false)} sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          width: "70%",
          maxWidth: "400px",  // Set your width here
        },
      },
    }}>
              <DialogTitle sx={{textAlign:'center', fontFamily:"Lato, sans-serif"}}>
                Flight Search
                <CloseIcon onClick={() => setShowForm(false)} style={{ position: 'absolute', top: '12px', right: '10px', cursor: 'pointer' }} />
              </DialogTitle>
              <DialogContent>
                <Box sx={{ border: '1px solid lightgray', py: 2, px: 2, mt: 3, mb: 2, background: 'white', }}>
                  <Typography fontSize="15px" my={1} ml={0.5} fontWeight="bold" fontFamily="Lato, sans-serif">Origin</Typography>
                  <select name="origin" value={formData.origin} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff', cursor: 'pointer', marginBottom: '20px',fontFamily:"Lato, sans-serif" }}>
                    {flightData.map((flight) => (
                      <option key={flight.origin} value={flight.origin}>{flight.origin}</option>
                    ))}
                  </select>
                  <Typography fontSize="15px" my={1} ml={0.5} fontWeight="bold" fontFamily="Lato, sans-serif">Destination</Typography>
                  <select name="destination" value={formData.destination} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff', cursor: 'pointer', marginBottom: '20px' }}>
                    {flightData.map((flight) => (
                      <option key={flight.destination} value={flight.destination}>{flight.destination}</option>
                    ))}
                  </select>
                  <Typography fontSize="15px" my={1} ml={0.5} fontWeight="bold" fontFamily="Lato, sans-serif">Date</Typography>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} style={{ width: '90%', padding: '10px', marginBottom: '20px' }} />
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <input type="checkbox" name="direct" checked={formData.direct} onChange={handleChange} />
                    <Typography fontSize="15px" my={1} ml={0.5} fontWeight="bold" fontFamily="Lato, sans-serif">Direct Flights Only</Typography>
                  </div>
                </Box>
              </DialogContent>
              
              <DialogActions>
                <Button onClick={handleSearch} variant="contained"  sx={{ background: 'black', color: 'white', borderRadius: '10px', cursor: 'pointer', mx:20, px:5 ,fontFamily:"Lato, sans-serif" }}>Search</Button>
              </DialogActions>
              
            </Dialog>
            <button onClick={() => setShowForm(true)} style={{ background:'#0C0404',
          color:'#fff', border: 'none', padding: '15px', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer',fontFamily:"Lato, sans-serif" }}>Open Form</button>
          </Grid>
          <Grid item md={12}>
            <img src={Image} alt="flight-image" style={{ width:'95%', marginTop: '30px' }} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FlightSearchBar;
