import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profil from "./pages/Profil";

export default function App(){ return (<Router><Navbar /><main className="pt-20"><Routes><Route path="/" element={<Home />} /><Route path="/profil" element={<Profil />} /></Routes></main><Footer /></Router>);}