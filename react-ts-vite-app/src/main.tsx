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
import NotFound from "./components/NotFound.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import "./i18next";
import { AuthProvider } from "./context/AuthContext.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Galery from "./pages/Galery.tsx";
import MovieDetails from "./components/MovieDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path='/galery' element={<Galery />} />
          <Route path='/galery/:id' element={<MovieDetails />} />
          <Route path="/submit" element={<SubmitMovie />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          {/* 
            <Route path='/jury' element={<JuryMembers />} />
            <Route path='/jury/me' element={<JuryDashboard />} />
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
