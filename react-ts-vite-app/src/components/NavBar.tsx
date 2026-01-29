import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className="p-5 flex justify-between items-center text-[var(--color-white)]">
        <NavLink to={"/"}><h2 className="text-2xl text-[var(--color-white)] bg-[var(--color-secondary)] p-4 rounded-xl">Mars A.I.</h2></NavLink>
        <NavLink to={"/galery"}><h2 className="text-2xl p-2">Galerie</h2></NavLink>
        <NavLink to={"/agenda"}><h2 className="text-2xl p-2">Agenda</h2></NavLink>
        <NavLink to={"/jury"}><h2 className="text-2xl p-2">jury</h2></NavLink>
        <NavLink to={"/submit"}><h2 className="text-2xl p-2 rounded-xl">Soumettre un film</h2></NavLink>
        <NavLink to="/english"><h2 className="text-4xl p-2">🇬🇧</h2></NavLink>
        <NavLink to="/profile"><h2 className="text-4xl p-2">🧑‍🏫</h2></NavLink>
    </div>
  )
}

export default NavBar