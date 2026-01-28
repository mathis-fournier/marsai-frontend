import MoviesThumbnail from '../components/MoviesThumbnail'

function Festival() {
  return (
    <div className="p-2 bg-[var(--color-brand)] text-white text-left">
        <div className=' bg-[var(--color-brand)] p-5 rounded-2xl'>
        <h2 className="text-3xl text-[var(--color-primary)] font-bold mb-4 my-4">▶ LE PROJET MARS AI<hr /></h2>
            <p className="mb-4 my-4 text-[var(--color-white)]">Un événement hybride unique en France, réunissant la fine fleur de l'IA générative et de la création cinématographique.</p>
            <div className='flex flex-col lg:flex-row lg:justify-around justify-center items-center gap-5 mt-5'>
                <p className="flex flex-col w-80 h-90 min-h-70 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🎬<span className="font-bold text-center text-3xl/14">1 MINUTE</span><span className="text-xl/8">Un format ultra-court pour maximiser l'impact créatif.</span></p>
                <p className="flex flex-col w-80 h-90 min-h-70 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🎓<span className="font-bold text-center text-3xl/14">GRATUITÉ</span><span className="text-xl/8">Des conférences et workshops accessibles à tous.</span></p>
                <p className="flex flex-col w-80 h-90 min-h-70 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">👨‍🏫<span className="font-bold text-center text-3xl/14">POUR TOUS </span><span className="text-xl/8">Professionnels, étudiants et curieux sont les bienvenus.</span></p>
                <p className="flex flex-col w-80 h-90 min-h-70 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🌍<span className="font-bold text-center text-3xl/14">EXPERTISE</span><span className="text-xl/8">Rencontrez les leaders mondiaux de l'IA, des experts internationaux.</span></p>
            </div>
        </div>
        <div className='my-10  bg-[var(--color-brand)] p-5 rounded-2xl'>
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">▶ LES FILMS EN COMPÉTITION<hr /></h2>

            <h2 className="text-2xl text-white font-bold mb-4 my-4">Aperçu sélection</h2>
            <p className="text-white">Découvrez une sélection d'œuvres pionnières qui explorent les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</p>
            <MoviesThumbnail />
        </div>
        <div className='my-10  bg-[var(--color-brand)] p-5 rounded-2xl'>
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">▶ OBJECTIFS DU FESTIVAL<hr /></h2>
            <div className='flex flex-col lg:flex-row lg:justify-around justify-center items-center gap-5 mt-5'>
                <p className="flex flex-col w-80 h-90 min-h-70 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🚶‍♂️<span className="font-bold text-center text-3xl/14">L'HUMAIN AU CENTRE</span><span className="text-xl/8">Promouvoir l'innovation dans le domaine de l'IA générative et de la création cinématographique.</span></p>
                <p className="flex flex-col w-80 h-90 min-h-70 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">⚡<span className="font-bold text-center text-3xl/14">CHALLENGE CRÉATIF</span><span className="text-xl/8">Favoriser l'échange entre créateurs, experts et passionnés.</span></p>
                <p className="flex flex-col w-80 h-90 min-h-70 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🚀<span className="font-bold text-center text-3xl/14">FUTURS SOUHAITABLES</span><span className="text-xl/8">Découvrir les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</span></p>
            </div>
        </div>

        <div className='my-10  bg-[var(--color-brand)] p-2 rounded-2xl'>
            <h2 className="text-2xl text-white font-bold mb-4 my-4">Le parcours d'une oeuvre</h2>
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">▶ FORMAT DE LA SÉLÉCTION<hr /></h2>
            <div className='flex flex-col lg:flex-row lg:justify-around justify-center items-center gap-5 mt-5'>
                <p className="flex flex-col w-80 h-90 min-h-70 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">📅<span className="font-bold text-center text-3xl/14">2 MOIS</span><div className="text-xl/10 text-[var(--color-secondary)] font-bold">APPEL A PROJETS</div><span className="text-xl/8">Promouvoir l'innovation dans le domaine de l'IA générative et de la création cinématographique.</span></p>
                <p className="flex flex-col w-80 h-90 min-h-70 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🎥<span className="font-bold text-center text-3xl/14">50 FILMS</span><div className="text-xl/10 text-[var(--color-secondary)] font-bold">SÉLECTION OFFICIELLE</div><span className="text-xl/8">Favoriser l'échange entre créateurs, experts et passionnés.</span></p>
                <p className="flex flex-col w-80 h-90 min-h-70 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🌐<span className="font-bold text-center text-3xl/14">WEB ET RESEAUX</span><div className="text-xl/10 text-[var(--color-secondary)] font-bold">DIFFUSION DIGITALE</div><span className="text-xl/8">Découvrir les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</span></p>
                <p className="flex flex-col w-80 h-90 min-h-70 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-4xl/8">🎊<span className="font-bold text-center text-3xl/14">FESTIVAL</span><div className="text-xl/10 text-[var(--color-secondary)] font-bold">SALLES DE CINÉMA</div><span className="text-xl/8">Découvrir les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</span></p>
            </div>
        </div>

    </div>
  )
}

export default Festival