import { NavLink } from 'react-router-dom'
import MoviesThumbnails from '../components/MoviesThumbnails'

function Festival() {
    return (
        <>
            <div className='bg-[var(--color-brand)] md:max-w-[75%] mx-auto px-6 pt-10 md:rounded-4xl shadow-lg/50 shadow-black mb-10'>
                <div className=' bg-[var(--color-brand)] p-1'>
                    <h2 className="text-2xl text-[var(--color-white)] font-bold mb-4 my-4">▶ LE PROJET MARS AI<hr /></h2>
                    <p className="mb-4 my-4 text-[var(--color-white)] md:text-xl">Un événement hybride unique en France, réunissant la fine fleur de l'IA générative et de la création cinématographique.</p>
                    <div className='grid grid-cols-2 md:flex lg:flex-row lg:justify-around justify-center items-center gap-5 mt-5'>
                        <p className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">🎬<span className="font-bold text-center text-xl">1 MINUTE</span><span className="text-sm p-1">Un format ultra-court pour maximiser l'impact créatif.</span></p>
                        <p className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">🎓<span className="font-bold text-center text-xl">GRATUITÉ</span><span className="text-sm p-1">Des conférences et workshops accessibles à tous.</span></p>
                        <p className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">👨‍🏫<span className="font-bold text-center text-xl">POUR TOUS </span><span className="text-sm p-1">Professionnels, étudiants et curieux sont les bienvenus.</span></p>
                        <p className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">🌍<span className="font-bold text-center text-xl">EXPERTISE</span><span className="text-sm p-1">Rencontrez les leaders mondiaux de l'IA, des experts internationaux.</span></p>
                    </div>
                </div>
                <div className='my-10 bg-[var(--color-brand)] p-1 rounded-2xl'>
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-white)]">▶ LES FILMS EN COMPÉTITION<hr /></h2>
                    <p className="text-white  md:text-2xl">Découvrez une sélection d'œuvres pionnières qui explorent les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</p>
                    <h2 className="p-5 text-center text-white text-xl md:text-2xl font-bold mb-4 my-4">Aperçu sélection</h2>
                    <MoviesThumbnails />
                    <NavLink to={"/submit"}><h2 className="text-xl text-white bg-[var(--color-primary)] text-center w-40 flex m-auto p-2 rounded-xl">Voir tous les films</h2></NavLink>

                </div>
                <div className='my-10  bg-[var(--color-brand)] p-1 rounded-2xl'>
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-white)]">▶ OBJECTIFS DU FESTIVAL<hr /></h2>
                    <div className='flex flex-col md:flex md:flex-row md:justify-around justify-center items-center gap-5 mt-5'>
                        <p className="flex flex-col  w-50 h-50 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">🚶‍♂️<span className="font-bold text-center text-xl">L'HUMAIN AU CENTRE</span><span className="text-sm p-1">Promouvoir l'innovation dans le domaine de l'IA générative et de la création cinématographique.</span></p>
                        <p className="flex flex-col  w-50 h-50 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">⚡<span className="font-bold text-center text-xl">CHALLENGE CRÉATIF</span><span className="text-sm p-1">Favoriser l'échange entre créateurs, experts et passionnés.</span></p>
                        <p className="flex flex-col w-50 h-50 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">🚀<span className="font-bold text-center text-xl">FUTURS SOUHAITABLES</span><span className="text-sm p-1">Découvrir les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</span></p>
                    </div>
                </div>

                <div className='my-10  bg-[var(--color-brand)] p-1 rounded-2xl'>
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-white)]">▶ FORMAT DE LA SÉLÉCTION<hr /></h2>
                    <h2 className="p-5 text-center text-white text-xl md:text-2xl font-bold mb-4 my-4">Le parcours d'une oeuvre</h2>
                    <div className='grid grid-cols-2 md:flex md:flex-row md:justify-around justify-center items-center gap-5 mt-5'>
                        <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">📅<span className="font-bold text-center text-xl">2 MOIS</span><div className="text-sm text-[var(--color-black)]">APPEL A PROJETS</div>
                            {/* <span className="text-sm/8">Promouvoir l'innovation dans le domaine de l'IA générative et de la création cinématographique.</span> */}
                        </div>
                        <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">🎥<span className="font-bold text-center text-xl">50 FILMS</span><div className="text-sm text-[var(--color-black)]">SÉLECTION OFFICIELLE</div>
                            {/* <span className="text-sm/8">Favoriser l'échange entre créateurs, experts et passionnés.</span> */}
                        </div>
                        <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">🌐<span className="font-bold text-center text-xl">WEB ET RESEAUX</span><div className="text-sm text-[var(--color-black)]">DIFFUSION DIGITALE</div>
                            {/* <span className="text-sm/8">Découvrir les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</span> */}
                        </div>
                        <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">🎊<span className="font-bold text-center text-xl">FESTIVAL</span><div className="text-sm text-[var(--color-black)]">SALLES DE CINÉMA</div>
                            {/* <span className="text-sm/8">Découvrir les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</span> */}
                        </div>

                    </div>
                    <NavLink to={"/submit"}><h2 className="text-xl my-8 text-white bg-[var(--color-primary)] text-center w-40 m-auto p-2 rounded-xl">Participer</h2></NavLink>
                </div>
                <div className='my-10  bg-[var(--color-brand)] p-1 rounded-2xl'>
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-white)]">▶ DEUX JOURNÉES DE CONFÉRENCES GRATUITES<hr /></h2>
                    <p className="text-white md:text-xl">Plongez au cœur des dernières avancées en IA générative avec des experts de renommée mondiale, des démonstrations en direct et des ateliers interactifs.</p>
                    <ul className=" list-none list-inside text-white text-lg md:text-xl my-10 flex flex-col items-center m-auto">
                        <li className="text-left">Débats engagés sur l'éthique et le futur</li>
                        <li className="text-left">Confrontations d'idées entre artistes et techniens</li>
                        <li className="text-left">Interrogations stimulantes sur la création</li>
                    </ul>
                    <div className='grid grid-cols-2 md:flex md:flex-rows md:justify-around justify-center items-center gap-5 mt-5'>
                        <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">🎬<span className="font-bold text-center text-xl">PROJECTIONS</span><div className="text-sm text-[var(--color-black)]"></div><span className="text-sm">Films en compétition et hors-compétition sur écran géant.</span></div>
                        <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">👨‍🏫<span className="font-bold text-center text-xl">WORKSHOPS</span><div className="text-sm text-[var(--color-black)]"></div><span className="text-sm">Scénario, création et post-prod avec des experts de l'IA.</span></div>
                        <div className="flex flex-col w-70 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">🏆<span className="font-bold text-center text-xl">REMISE DES PRIX</span><div className="text-sm text-[var(--color-black)]"></div><span className="text-sm">Cinéastes, acteurs et créateurs renommés pour récompenser l'excellence.</span></div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[var(--color-white)]">▶ MARS A.I. NIGHT<hr /></h2>
                        <p className="text-[var(--color-white)] w-full font-bold text-center text-2xl md:text-4xl">Le 13 juin</p>
                        <p className="text-[var(--color-white)] w-full font-bold text-center text-xl md:text-2xl/24">À partir de 19h</p>
                <div className='h-100 md:h-120 bg-img'>
                    <div className='flex-col m-auto rounded-2xl border-black box-border shadow-white w-68 md:w-80 p-5 flex justify-start-safe items-center  bg-black/50 h-100 md:h-120'>
                <h2 className='text-white text-3xl font-bold text-center'>Soirée Électro</h2>
                <p className="text-[var(--color-white)] my-4 w-full text-center text-xl md:text-2xl">Une expérience immersive sonore et visuelle.</p>
                    </div>
                </div>
                <NavLink to={"/submit"}><h2 className="text-lg my-8 text-white bg-[var(--color-primary)] text-center w-40 m-auto p-2 rounded-xl"> Obtenir mon pass</h2></NavLink>

                <h2 className="text-2xl font-bold mb-4 text-white p-1">▶ LE LIEU<hr /></h2>
                <div className='flex flex-col md:flex-row md:justify-around '>
                    <div className='flex flex-col md:flex-rows md:justify-around justify-center p-5 my-10 m-auto w-60 h-60 rounded-2xl border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600]'>
                        <h3 className='text-2xl text-white'>LA PLATEFORME</h3><br />
                        <h3 className='text-xl text-white'>(ex-Docks-des-Suds)</h3>
                        <p className='text-sm p-2'>4 000 m² d'espaces modulables dans le centre de Marseille, au cœur de l'écosystème numérique.</p>
                    </div>
                        <div className='flex flex-col justify-center p-5 my-10 m-auto w-60 h-60 bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-2xl border-black shadow-lg/50 shadow-white'>
                            <h2 className='text-2xl text-white'>SALLE DES SUCRES</h2>
                            <p className='text-sm p-2'>Futur sanctuaire des conférences et de la remise des prix de Mars.A.I. Un espace majestueux alliant patrimoine et technologie.</p>
                        </div>
                        <div className='flex flex-col justify-center p-5 my-10 m-auto w-60 h-60 bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-2xl border-black shadow-lg/50 shadow-white'>
                            <h2 className='text-2xl text-white'>SALLE PLAZA</h2>
                            <p className='text-sm p-2'>L'épicentre du festival : accueil, animations, workshops et restauration. Le point de rencontre de tous les participants.</p>
                        </div>
                
                </div>

                    <h2 className="text-2xl font-bold mb-4 text-white p-1">▶ PARTENAIRES & SPONSORS<hr /></h2>
                    <img src="/partners.png" alt="Partenaires Marsai" className="p-10 w-200 m-auto my-10" />
            </div>
            <img src="/chiffres.png" alt="les chiffres" className='m-auto w-300'/>
        </>
    )
}

export default Festival