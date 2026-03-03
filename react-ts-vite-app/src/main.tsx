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
import Register from "./components/Dashboard/Register.tsx";
import Login from "./pages/Login.tsx";
import "./i18next";
import { AuthProvider } from "./context/AuthContext.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import MovieDetails from "./pages/MovieDetails.tsx";
import AddEvent from "./components/AddEvent.tsx";
import Galery from "./pages/Movies.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/movies" element={<Galery />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/submit" element={<SubmitMovie />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/add_event" element={<AddEvent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
