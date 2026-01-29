import { NavLink } from 'react-router-dom'
import MoviesThumbnails from '../components/MoviesThumbnails'

function Festival() {
  return (
<>
    <div className='bg-[var(--color-primary)] max-w-7xl mx-auto px-6 pt-10 rounded-lg'>
    <div className=' bg-[var(--color-primary)] p-15 rounded-2xl'>
        <h2 className="text-xl md:text-3xl text-[var(--color-white)] font-bold mb-4 my-4">▶ LE PROJET MARS AI<hr /></h2>
            <p className="mb-4 my-4 text-[var(--color-white)] md:text-xl">Un événement hybride unique en France, réunissant la fine fleur de l'IA générative et de la création cinématographique.</p>
            <div className='flex flex-col lg:flex-row lg:justify-around justify-center items-center gap-5 mt-5'>
                <p className="flex flex-col w-90 h-60 sm:w-90 sm:h-60 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🎬<span className="font-bold text-center text-3xl/14">1 MINUTE</span><span className="text-xl/8 p-4">Un format ultra-court pour maximiser l'impact créatif.</span></p>
                <p className="flex flex-col w-90 h-60 sm:w-90 sm:h-60 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🎓<span className="font-bold text-center text-3xl/14">GRATUITÉ</span><span className="text-xl/8 p-4">Des conférences et workshops accessibles à tous.</span></p>
                <p className="flex flex-col w-90 h-60 sm:w-90 sm:h-60 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">👨‍🏫<span className="font-bold text-center text-3xl/14">POUR TOUS </span><span className="text-xl/8 p-4">Professionnels, étudiants et curieux sont les bienvenus.</span></p>
                <p className="flex flex-col w-90 h-60 sm:w-90 sm:h-60 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🌍<span className="font-bold text-center text-3xl/14">EXPERTISE</span><span className="text-xl/8 p-4">Rencontrez les leaders mondiaux de l'IA, des experts internationaux.</span></p>
            </div>
        </div>
        <div className='my-10 bg-[var(--color-primary)] p-15 rounded-2xl'>
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-white)]">▶ LES FILMS EN COMPÉTITION<hr /></h2>

            <h2 className="text-2xl text-white font-bold mb-4 my-4">Aperçu sélection</h2>
            <p className="text-white md:text-xl">Découvrez une sélection d'œuvres pionnières qui explorent les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</p>
            <MoviesThumbnails />
            <NavLink to={"/submit"}><h2 className="text-xl text-white bg-[var(--color-brand)] text-center w-40 flex m-auto p-2 rounded-xl">Voir tous les films</h2></NavLink>

        </div>
        <div className='my-10  bg-[var(--color-primary)] p-15 rounded-2xl'>
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-white)]">▶ OBJECTIFS DU FESTIVAL<hr /></h2>
            <div className='flex flex-col lg:flex-row lg:justify-around justify-center items-center gap-5 mt-5'>
                <p className="flex flex-col w-90 h-60 sm:w-90 sm:h-60 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🚶‍♂️<span className="font-bold text-center text-3xl/14">L'HUMAIN AU CENTRE</span><span className="text-xl/8">Promouvoir l'innovation dans le domaine de l'IA générative et de la création cinématographique.</span></p>
                <p className="flex flex-col w-90 h-60 sm:w-90 sm:h-60 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">⚡<span className="font-bold text-center text-3xl/14">CHALLENGE CRÉATIF</span><span className="text-xl/8">Favoriser l'échange entre créateurs, experts et passionnés.</span></p>
                <p className="flex flex-col w-90 h-60 sm:w-90 sm:h-60 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🚀<span className="font-bold text-center text-3xl/14">FUTURS SOUHAITABLES</span><span className="text-xl/8">Découvrir les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</span></p>
            </div>
        </div>

        <div className='my-10  bg-[var(--color-primary)] p-15 rounded-2xl'>
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-white)]">▶ FORMAT DE LA SÉLÉCTION<hr /></h2>
            <h2 className="text-white font-bold mb-4 my-4 txt-center md:text-xl">Le parcours d'une oeuvre</h2>
            <div className='flex flex-col lg:flex-row lg:justify-around justify-center items-center gap-5 mt-5'>
                <p className="flex flex-col w-90 h-80 sm:w-90 sm:h-80 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">📅<span className="font-bold text-center text-3xl/14">2 MOIS</span><div className="text-xl/10 text-[var(--color-black)] font-bold">APPEL A PROJETS</div><span className="text-xl/8">Promouvoir l'innovation dans le domaine de l'IA générative et de la création cinématographique.</span></p>
                <p className="flex flex-col w-90 h-80 sm:w-90 sm:h-80 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🎥<span className="font-bold text-center text-3xl/14">50 FILMS</span><div className="text-xl/10 text-[var(--color-black)] font-bold">SÉLECTION OFFICIELLE</div><span className="text-xl/8">Favoriser l'échange entre créateurs, experts et passionnés.</span></p>
                <p className="flex flex-col w-90 h-80 sm:w-90 sm:h-80 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🌐<span className="font-bold text-center text-3xl/14">WEB ET RESEAUX</span><div className="text-xl/10 text-[var(--color-black)] font-bold">DIFFUSION DIGITALE</div><span className="text-xl/8">Découvrir les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</span></p>
                <p className="flex flex-col w-90 h-80 sm:w-90 sm:h-80 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🎊<span className="font-bold text-center text-3xl/14">FESTIVAL</span><div className="text-xl/10 text-[var(--color-black)] font-bold">SALLES DE CINÉMA</div><span className="text-xl/8">Découvrir les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</span></p>

            </div>
                <NavLink to={"/submit"}><h2 className="text-xl my-8 text-white bg-[var(--color-brand)] text-center w-40 m-auto p-2 rounded-xl">Participer</h2></NavLink>
        </div>
        <div className='my-10  bg-[var(--color-primary)] p-15 rounded-2xl'>
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-white)]">▶ DEUX JOURNÉES DE CONFÉRENCES GRATUITES<hr /></h2>
            <p className="text-white md:text-xl">Plongez au cœur des dernières avancées en IA générative avec des experts de renommée mondiale, des démonstrations en direct et des ateliers interactifs.</p>
            <div className='flex flex-col lg:flex-row lg:justify-around justify-center items-center gap-5 mt-5'>
                <p className="flex flex-col w-90 h-60 sm:w-90 sm:h-80 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🎬<span className="font-bold text-center text-3xl/14">PROJECTIONS</span><div className="text-xl/10 text-[var(--color-black)] font-bold">FILMS EN COMPÉTITION</div><span className="text-xl/8">Films en compétition et hors-compétition sur écran géant.</span></p>
                <p className="flex flex-col w-90 h-60 sm:w-90 sm:h-80 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">👨‍🏫<span className="font-bold text-center text-3xl/14">WORKSHOPS</span><div className="text-xl/10 text-[var(--color-black)] font-bold">SCÉNARIO, CRÉATION ET POST-PROD</div><span className="text-xl/8">Scénario, création et post-prod avec des experts de l'IA.</span></p>
                <p className="flex flex-col w-90 h-60 sm:w-90 sm:h-80 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🏆<span className="font-bold text-center text-3xl/14">REMISE DES PRIX</span><div className="text-xl/10 text-[var(--color-black)] font-bold">CINÉASTES, ACTEURS ET CRÉATEURS RENOMMÉS</div><span className="text-xl/8">Cinéastes, acteurs et créateurs renommés pour récompenser l'excellence.</span></p>
            </div>
            <ol className="text-center list-decimal list-inside text-white md:text-2xl text-xl my-10">
                <li>Débats engagés sur l'éthique et le futur</li>
                <li>Confrontations d'idées entre artistes et tech</li>
                <li>Interrogations stimulantes sur la création</li>
            </ol>
        </div>

        <h2 className="text-3xl font-bold mb-4 text-[var(--color-white)] p-5">▶ MARS A.I. NIGHT<hr /></h2>
        <div className='flex flex-col justify-center p-5 my-10 m-auto w-100 bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-2xl border-black shadow-lg/50 shadow-white'>

                <p className="text-[var(--color-black)] text-center md:text-4xl/16">13 juin</p>
                <p className="text-[var(--color-black)] text-center md:text-2xl/18">À partir de 19h</p>
                <p className="text-[var(--color-black)] text-center md:text-2xl/16">Fête Électro mêlant IA et futurs souhaitables.</p>
                <p className="text-[var(--color-black)] text-center md:text-2xl/18">Une expérience immersive sonore et visuelle.</p>
            <NavLink to={"/submit"}><h2 className="text-xl my-8 text-white bg-[var(--color-brand)] text-center w-40 m-auto p-2 rounded-xl"> Obtenir mon pass</h2></NavLink>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-white p-5">▶ LE LIEU<hr /></h2>
            <img src="/marsai.png" alt="Festival Marsai" className="w-100 m-auto"/>
            <div className='flex flex-col justify-center p-5 my-10 m-auto w-100 rounded-2xl border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600]'>
                <h3 className='text-4xl/10 text-white'>LA PLATEFORME</h3><br />
                <h3 className='text-xl'>(ex Docks des Suds)</h3>
                <p className='text-xl'>4 000 m² d'espaces modulables dans le centre de Marseille, au cœur de l'écosystème numérique.</p>
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-around justify-center items-center gap-5 mt-5'>
                <div className='flex flex-col justify-center p-5 my-10 m-auto w-100 bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-2xl border-black shadow-lg/50 shadow-white'>
                    <h2 className='text-4xl text-white'>Salle des Sucres</h2>
                    <p className='text-xl'>Futur sanctuaire des conférences et de la remise des prix de Mars.A.I. Un espace majestueux alliant patrimoine et technologie.</p>
                </div>
                <div className='flex flex-col justify-center p-5 my-10 m-auto w-100 bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-2xl border-black shadow-lg/50 shadow-white'>
                    <h2 className='text-4xl text-white'>Salle Plaza</h2>
                    <p className='text-xl'>L'épicentre du festival : accueil, animations, workshops et restauration. Le point de rencontre de tous les participants.</p>
                </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white p-5">▶ PARTENAIRES & SPONSORS<hr /></h2>
            <img src="/partners.png" alt="Partenaires Marsai" className="p-10 w-200 m-auto my-10"/>
        </div>
    <img src="/chiffres.png" alt="" />
    </>
  )
}

export default Festival