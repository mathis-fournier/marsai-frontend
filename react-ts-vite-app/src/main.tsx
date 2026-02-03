import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agenda from "./pages/Agenda.tsx";
import SubmitMovie from "./pages/SubmitMovie.tsx";
import EventDetails from "./components/EventDetails.tsx";
import NotFound from "./pages/NotFound.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import HeroBanner from "./components/HeroBanner.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/submit" element={<SubmitMovie />} />

        <Route path="/event/:id" element={<EventDetails />} />

        <Route path='/register' element={<Register />} />
        <Route path="*" element={<NotFound />} />
        {/* 
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
          <Route path='/agenda' element={<Agenda />} />
      <AuthProvider>
        <Header />
        <HeroBanner />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/submit" element={<SubmitMovie />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<NotFound />} />
          {/* 
            <Route path='/movies' element={<Movies />} />
            <Route path='/movies/:id' element={<MovieDetails />} />
            <Route path='/jury' element={<JuryMembers />} />
            <Route path='/jury/me' element={<JuryDashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='dashboard/movies' element={<DashboardMovies />} />
            <Route path='dashboard/jury' element={<DashboardJury />} />
            <Route path='dashboard/results' element={<DashboardResults />} />
            <Route path='dashboard/events' element={<DashboardEvents />} />
            <Route path='dashboard/config' element={<DashboardConfig />} />
            */}
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
