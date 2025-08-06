import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/perfil", label: "Perfil" },
  { to: "/feed", label: "Feed" },
  { to: "/comunidades", label: "Comunidades" },
  { to: "/eventos", label: "Eventos" },
  { to: "/oportunidades", label: "Oportunidades" }
];

export default function Sidebar() {
  return (
    <aside className="hidden md:block fixed left-0 top-0 w-64 h-screen bg-white border-r">
      <div className="p-6 font-bold text-blue-600 text-xl">Taggme</div>
      <nav className="space-y-1 px-4">
        {links.map(link => (
          <NavLink
            to={link.to}
            key={link.to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded text-sm font-medium ${
                isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
