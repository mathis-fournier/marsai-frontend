import React from 'react'

function HeroBanner() {
  return (
    <div className='bg-black/90 p-10 font-bold'>
      {/* <div className='w-50 m-auto text-center bg-white rounded-xl text-black'>Festival international du film IA</div> */}
      <h1 className='text-center text-white text-4xl'>IMAGINEZ DES <span className='text-sky-700' >FUTURS</span> SOUHAITABLES</h1>
      <p className='text-center text-white text-xl'>Le festival international de courts-métrages de 60 secondes réalisés par IA. 2 jours d'immersion au cœur de Marseille.</p>
      <div className='flex justify-center gap-5 mt-5'>
        <button className='bg-yellow-500 text-black p-5 rounded-xl m-auto block'>Participer</button>
        <button className='bg-yellow-500 text-black p-5 rounded-xl m-auto block'>En savoir plus</button>
      </div>
    </div>
  )
}

export default HeroBanner