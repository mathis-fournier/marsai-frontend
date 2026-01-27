import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className="bg-gray-900 p-5 flex justify-between items-center">
        <NavLink to={"/"}><h2 className="text-3xl bg-blue-500 p-2 rounded-xl">MarsAI</h2></NavLink>
        <NavLink to={"/galery"}><h2 className="text-2xl p-2">Gallerie</h2></NavLink>
        <NavLink to={"/agenda"}><h2 className="text-2xl p-2">Agenda</h2></NavLink>
        <NavLink to={"/jury"}><h2 className="text-2xl p-2">jury</h2></NavLink>
        <NavLink to={"/submit"}><h2 className="text-2xl bg-blue-500 p-2 rounded-xl">Login</h2></NavLink>
    </div>
  )
}

export default NavBar