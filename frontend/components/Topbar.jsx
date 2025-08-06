export default function Topbar() {
  return (
    <header className="h-16 bg-white shadow-md flex items-center justify-end px-6 ml-0 md:ml-64">
      <div className="flex items-center gap-3">
        <img
          src="https://ui-avatars.com/api/?name=Usuário"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium">Olá, Usuário</span>
      </div>
    </header>
  );
}
