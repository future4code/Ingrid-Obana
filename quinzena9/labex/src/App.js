import React from 'react';
import HomePage   from "./Pages/HomePage";
import ListTripsPage   from "./Pages/ListTripsPage";
import ApplicationFormPage   from "./Pages/ApplicationFormPage";
import LoginPage   from "./Pages/LoginPage";
import AdminHomePage   from "./Pages/AdminHomePage";
import TripDetailsPage   from "./Pages/TripDetailsPage";
import CreateTripsPage   from "./Pages/CreateTripsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/trips/list" element={<ListTripsPage />}/>          
        <Route path="/trips/application" element={<ApplicationFormPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/admin/trips/list" element={<AdminHomePage />}/>
        <Route path="/admin/trips/create" element={<CreateTripsPage />}/>
        <Route path="/admin/trips/:id" element={<TripDetailsPage />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
