import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/ui/Layout';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Teams from './pages/Teams';
import Venues from './pages/Venues';
import More from './pages/More';

import Logistics from './pages/Logistics';
import Contacts from './pages/Contacts';
import Gallery from './pages/Gallery';

import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ManageMatches from './pages/admin/ManageMatches';
import ManageTeams from './pages/admin/ManageTeams';
import ManageVenues from './pages/admin/ManageVenues';
import ManageGallery from './pages/admin/ManageGallery';

import { DataProvider } from './context/DataContext';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="matches" element={<Matches />} />
              <Route path="teams" element={<Teams />} />
              <Route path="venues" element={<Venues />} />
              <Route path="accommodation" element={<Logistics />} />
              <Route path="food" element={<Logistics />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="more" element={<More />} />
            </Route>
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/matches" element={<ManageMatches />} />
            <Route path="/admin/teams" element={<ManageTeams />} />
            <Route path="/admin/venues" element={<ManageVenues />} />
            <Route path="/admin/gallery" element={<ManageGallery />} />
          </Routes>
        </Router>
      </DataProvider>
    </HelmetProvider>
  );
}

export default App;
