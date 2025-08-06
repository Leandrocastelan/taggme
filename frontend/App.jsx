import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Feed from "./pages/Feed.jsx";
import Perfil from "./pages/Perfil.jsx";
import Comunidades from "./pages/Comunidades.jsx";
import Eventos from "./pages/Eventos.jsx";
import Oportunidades from "./pages/Oportunidades.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-0 md:ml-64 bg-slate-50 min-h-screen">
          <Topbar />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/comunidades" element={<Comunidades />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/oportunidades" element={<Oportunidades />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
