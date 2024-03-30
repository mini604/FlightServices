import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import FlightSearchBar from './components/FlightSearchBar';
import Flight from './Pages/FlightBooking/Flight';
import Navigation from './Navgation/Navigation';
import Footer from './components/Footer';
import WeatherApp from './Pages/Weather/WeatherApp';
import Map from './Pages/Direction/Mapcomponent';
import CountryNewsSearch from './Pages/NewsSearch/CountryNewsSearch';


const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigation />} >
        <Route index path='/' element={<Flight />} />
        <Route path='/weatherapp' element={<WeatherApp />} />
        <Route path='/direction' element={<Map />} />
        <Route path='/news' element={<CountryNewsSearch/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
