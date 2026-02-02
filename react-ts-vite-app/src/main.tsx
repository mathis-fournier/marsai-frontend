import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agenda from "./pages/Agenda.tsx";
import SubmitMovie from "./pages/SubmitMovie.tsx";
import NotFound from "./pages/NotFound.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/submit" element={<SubmitMovie />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/jury' element={<JuryMembers />} />
        <Route path='/jury/me' element={<JuryDashboard />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* 
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
          <Route path='/agenda' element={<Agenda />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='dashboard/movies' element={<DashboardMovies />} />
          <Route path='dashboard/jury' element={<DashboardJury />} />
          <Route path='dashboard/results' element={<DashboardResults />} />
          <Route path='dashboard/events' element={<DashboardEvents />} />
          <Route path='dashboard/config' element={<DashboardConfig />} />
          */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
