import React from 'react'
import MovieThumbnail from './MovieThumbnail'

function Festival() {
  return (
    <div className="p-20 bg-gray-700 text-white text-left">
        <h2 className="text-3xl text-yellow-500 font-bold mb-4 my-4">▶ LE PROJET MARS AI<hr /></h2>
        <div className=' bg-black/50 p-20 rounded-2xl'>

            <p className="font-bold mb-4 my-4 text-white">Un événement hybride unique en France, réunissant la fine fleur de l'IA générative et de la création cinématographique.</p>
            <div className='flex flex-col md:flex-row md:justify-around justify-center items-center gap-5 mt-5'>
                <p className="w-70 h-70 border-2 border-white bg-sky-500/25 p-5 rounded-2xl text-4xl">🎬<span className="font-bold text-3xl">1 MINUTE</span><br /><span className="text-xl"><br /> ultra-court pour maximiser l'impact créatif.</span></p>
                <p className="w-70 h-70 border-2 border-white bg-sky-500/25 p-5 rounded-2xl text-4xl">🎓<span className="font-bold text-3xl">GRATUITÉ</span><br /><span className="text-xl"><br />Conférences et workshops accessibles à tous.</span></p>
                <p className="w-70 h-70 border-2 border-white bg-sky-500/25 p-5 rounded-2xl text-4xl">👨‍🏫<span className="font-bold text-3xl">POUR TOUS </span><br /><span className="text-xl"><br />Professionnels, étudiants et curieux sont les bienvenus.</span></p>
                <p className="w-70 h-70 border-2 border-white bg-sky-500/25 p-5 rounded-2xl text-4xl">🌍<span className="font-bold text-3xl">EXPERTISE</span><br /><span className="text-xl"><br />Rencontrez les leaders mondiaux de l'IA, des experts internationaux.</span></p>
            </div>
        </div>
        <h2 className="my-10 text-3xl font-bold mb-4 text-yellow-500">▶ LES FILMS EN COMPÉTITION<hr /></h2>
        <div className=' bg-black/50 p-20 rounded-2xl'>

            <h2 className="text-2xl text-white font-bold mb-4 my-4">Aperçu sélection</h2>
            <p className="text-white">Découvrez une sélection d'œuvres pionnières qui explorent les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</p>
            <MovieThumbnail />
            <MovieThumbnail />
            <MovieThumbnail />
        </div>
        <h2 className="my-10 text-3xl font-bold mb-4 text-yellow-500">▶ OBJECTIFS DU FESTIVAL<hr /></h2>
        <div className=' bg-black/50 p-20 rounded-2xl'>
            <div className='flex flex-col md:flex-row md:justify-around justify-center items-center gap-5 mt-5'>
                <p className="w-90 h-70 text-white border bg-sky-700/50 p-5 rounded-2xl text-4xl">🚶‍♂️<span className="font-bold text-3xl"> L'HUMAIN AU CENTRE</span><br /><span className='text-xl'><br />Promouvoir l'innovation dans le domaine de l'IA générative et de la création cinématographique.</span></p>
                <p className="w-90 h-70 text-white text-2xl border bg-sky-700/50 p-5 rounded-2xl">⚡<span className="text-3xl font-bold">CHALLENGE CRÉATIF<br /></span><span className='text-xl text-white'><br />Favoriser l'échange entre créateurs, experts et passionnés.</span></p>
                <p className="w-90 h-70 text-white text-2xl border bg-sky-700/50 p-5 rounded-2xl">🚀 <span className="text-3xl font-bold">FUTURS SOUHAITABLES<br /></span><span className="text-xl text-white"><br />Découvrir les nouvelles frontières de l'imaginaire assisté par l'Intelligence Artificielle.</span></p>
            </div>
        </div>

    </div>
  )
}

export default Festival