import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();

    return (
        <>
            <div className="p-4 text-center bg-[var(--color-brand)] text-white flex justify-between items-center">
                <NavLink to={"/"}>
                    <h2 className="text-lg md:text-2xl bg-[var(--color-primary)] p-4 rounded-xl">Mars A.I.</h2>
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-row items-center justify-around gap-15 md:gap-10 text-left">
                    <NavLink to={"/galery"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Galerie</h2></NavLink>
                    <NavLink to={"/agenda"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Agenda</h2></NavLink>
                    <NavLink to={"/jury"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Jury</h2></NavLink>
                    <NavLink to={"/submit"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Soumettre un film</h2></NavLink>
                    {user ? (
                        user.role === "JURY" ? (
                            <>
                                <NavLink to={"/jury/me"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Espace Jury</h2></NavLink>
                                <button onClick={logout} className="text-lg md:text-xl p-2 rounded-lg bg-red-500 hover:bg-red-700">Déconnexion</button>
                            </>
                        ) : user.role === "ADMIN" ? (
                            <>
                                <NavLink to={"/dashboard"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Espace Admin</h2></NavLink>
                                <button onClick={logout} className="text-lg md:text-xl p-2 rounded-lg bg-red-500 hover:bg-red-700">Déconnexion</button>
                            </>
                        )
                            : ( // User is not logged in
                                <>
                                    <NavLink to="/login"><h2 className="text-lg md:text-xl p-2 rounded-lg">Connexion</h2></NavLink>
                                    <NavLink to="/register"><h2 className="text-lg md:text-xl p-2 rounded-lg">Inscription</h2></NavLink>
                                </>
                            ))
                        : null}
                </div>

                <div className="flex items-center">
                    <NavLink to="/english">
                        <h2 className="text-4xl p-2">🇬🇧</h2>
                    </NavLink>
                    <button className="text-4xl p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        🍔
                    </button>
                </div>
            </div>

            {/* Mobile Navigation (toggled by hamburger) */}
            <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden flex-col p-5 bg-[var(--color-brand)] text-[var(--color-white)] items-start justify-around gap-1 md:gap-10 text-left`}>
                <NavLink to={"/galery"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Galerie</h2></NavLink>
                <NavLink to={"/agenda"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Agenda</h2></NavLink>
                <NavLink to={"/jury"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Jury</h2></NavLink>
                <NavLink to={"/submit"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Soumettre un film</h2></NavLink>
                {user ? (
                    user.role === "JURY" ? (
                        <>
                            <NavLink to={"/jury/me"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Espace Jury</h2></NavLink>
                            <button onClick={logout} className="text-lg md:text-xl p-2 rounded-lg bg-red-500 hover:bg-red-700">Déconnexion</button>
                        </>
                    ) : user.role === "ADMIN" ? (
                        <>
                            <NavLink to={"/dashboard"}><h2 className="text-lg md:text-xl p-2 rounded-lg">Espace Admin</h2></NavLink>
                            <button onClick={logout} className="text-lg md:text-xl p-2 rounded-lg bg-red-500 hover:bg-red-700">Déconnexion</button>
                        </>
                    ) : (
                    <>
                        <NavLink to="/login"><h2 className="text-lg md:text-xl p-2 rounded-lg">Connexion</h2></NavLink>
                        <NavLink to="/register"><h2 className="text-lg md:text-xl p-2 rounded-lg">Inscription</h2></NavLink>
                    </>
                )) : null}
            </div>
        </>
    );
}

export default Header;