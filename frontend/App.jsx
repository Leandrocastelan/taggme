import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feed from "./pages/Feed.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";

// (você pode adicionar outras páginas aqui depois, como Perfil, Comunidades etc.)

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-0 md:ml-64 bg-slate-50 min-h-screen">
          <Topbar />
          <main className="p-6">
            <Routes>
              <Route path="/feed" element={<Feed />} />
              <Route path="*" element={<Navigate to="/feed" />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
