import { Link } from 'react-router-dom'

function HeroBanner() {
  return (
    <div className='bg-[var(--color-white)]/90 p-10 font-bold'>
      {/* <div className='w-50 m-auto text-center bg-white rounded-xl text-black'>Festival international du film IA</div> */}
      <h1 className='text-center text-black text-4xl'>IMAGINEZ DES <span className='text-[var(--color-secondary)]' >FUTURS</span> SOUHAITABLES</h1>
      <p className='text-center text-black text-xl'>Le festival international de courts-métrages de 60 secondes réalisés par IA. 2 jours d'immersion au cœur de Marseille.</p>
      <div className='flex justify-center mt-5'>
        <Link className='bg-[var(--color-secondary)] text-white text-xl p-5 rounded-xl m-auto block' to={'/submit'}>Participer</Link>
        <Link className='bg-[var(--color-secondary)] text-white text-xl p-5 rounded-xl m-auto block' to={'/'}>En savoir plus</Link>
      </div>
    </div>
  )
}

export default HeroBanner