export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Profil Saya</h2>
      <div className="flex items-center gap-2">
        <img src="/avatar.png" className="w-8 h-8 rounded-full" alt="Avatar" />
        <span className="font-medium">Nama Pengguna</span>
      </div>
    </header>
  );
}
