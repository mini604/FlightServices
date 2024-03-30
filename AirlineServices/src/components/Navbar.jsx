import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FlightIcon from '@mui/icons-material/Flight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NewspaperIcon from '@mui/icons-material/Newspaper';
//import "./Navbar.css"

const Navbar = () => {
  return (
    <div >
         <nav style={{
          background:'#0C0404',
          color:'#fff',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'
         }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100%',
        margin: '10px ',
        marginTop:0,
        padding: '0 20px'
      }}>
        <h1 style={{
          fontSize:'22px',
          fontWeight:'bold',
          fontFamily:"Lato, sans-serif"
        }}> Flight Booking</h1>
        <ul
        style={{
          listStyle:'none',
          display:'flex',

        }}>
          <li 
          style={{
            marginRight:'20px'
          }}>
            <a href="/"
            style={{
              color:'#fff',
              textDecoration:'none'

            }}><FlightIcon fontSize='large' sx={{"&:hover":{
              background:'#D3D3D3',
              borderRadius:'30%',
              color:'black',
            }}}/></a>
          </li>
          <li
          style={{
            marginRight:'20px'
          }}
          >
            <a href="weatherapp"
            style={{
              color:'#fff',
              textDecoration:'none'

            }}><WbSunnyIcon fontSize='large' sx={{"&:hover":{
              background:'#D3D3D3',
              borderRadius:'30%',
              color:'black',
            }}}/></a>
          </li>
          <li
          style={{
            marginRight:'20px'
          }}
          >
            <a href="/direction"
            style={{
              color:'#fff',
              textDecoration:'none'

            }}><LocationOnIcon fontSize='large' sx={{"&:hover":{
              background:'#D3D3D3',
              borderRadius:'30%',
              color:'black',
            }}}/></a>
          </li>
          <li
          style={{
            marginRight:'20px'
          }}
          >
            <a href="/news"
            style={{
              color:'#fff',
              textDecoration:'none'

            }}><NewspaperIcon fontSize='large'
            sx={{"&:hover":{
              background:'#D3D3D3',
              borderRadius:'30%',
              color:'black',
            }}}/></a>
            </li>
          
        </ul>
      </div>
    </nav>
         

    </div>
  )
}

export default Navbar