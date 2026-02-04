import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div className="p-4 text-center bg-[var(--color-brand)] text-white flex justify-between items-center">
                <NavLink to={"/"}>
                    <h2 className="text-lg md:text-2xl bg-[var(--color-secondary)] p-2 rounded-xl">Mars A.I.</h2>
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-row items-center justify-around gap-15 md:gap-10 text-left">
                    <NavLink to={"/galery"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.gallery')}</h2></NavLink>
                    <NavLink to={"/agenda"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.agenda')}</h2></NavLink>
                    <NavLink to={"/jury"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.jury')}</h2></NavLink>
                    <NavLink to={"/submit"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.submit')}</h2></NavLink>
                    {user && user.role === "JURY" ? (
                        <>
                            <NavLink to={"/jury/me"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.jurySpace')}</h2></NavLink>
                            <button onClick={logout} className="text-lg md:text-xl p-2 rounded-lg bg-red-500 hover:bg-red-700">{t('header.logout')}</button>
                        </>
                    ) : user && user.role === "ADMIN" ? (
                        <>
                            <NavLink to={"/dashboard"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.adminSpace')}</h2></NavLink>
                            <button onClick={logout} className="text-lg md:text-xl p-2 rounded-lg bg-red-500 hover:bg-red-700">{t('header.logout')}</button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login"><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.login')}</h2></NavLink>
                            <NavLink to="/register"><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.register')}</h2></NavLink>
                        </>
                    )}
                </div>

                <div className="flex items-center">
                    <button onClick={() => changeLanguage('eng')} className="text-4xl p-2">🇬🇧</button>
                    <button onClick={() => changeLanguage('fra')} className="text-4xl p-2">🇫🇷</button>
                    <button className="text-4xl p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <img className="w-8 h-8" src="/assets/menu-burger-horizontal.svg" alt="Menu" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation (toggled by hamburger) */}
            <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden flex-col p-5 bg-[var(--color-brand)] text-[var(--color-white)] items-start justify-around gap-1 md:gap-10 text-left`}>
                <NavLink to={"/galery"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.gallery')}</h2></NavLink>
                <NavLink to={"/agenda"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.agenda')}</h2></NavLink>
                <NavLink to={"/jury"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.jury')}</h2></NavLink>
                <NavLink to={"/submit"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.submit')}</h2></NavLink>
                {user && user.role === "JURY" ? (
                    <>
                        <NavLink to={"/jury/me"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.jurySpace')}</h2></NavLink>
                        <button onClick={logout} className="text-lg md:text-xl p-2 rounded-lg bg-red-500 hover:bg-red-700">{t('header.logout')}</button>
                    </>
                ) : user && user.role === "ADMIN" ? (
                    <>
                        <NavLink to={"/dashboard"}><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.adminSpace')}</h2></NavLink>
                        <button onClick={logout} className="text-lg md:text-xl p-2 rounded-lg bg-red-500 hover:bg-red-700">{t('header.logout')}</button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login"><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.login')}</h2></NavLink>
                        <NavLink to="/register"><h2 className="text-lg md:text-xl p-2 rounded-lg">{t('header.register')}</h2></NavLink>
                    </>

                )}
            </div>
        </>
    );
}

export default Header;