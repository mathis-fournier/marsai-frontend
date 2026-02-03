import React from 'react'

function AccessDenied() {
  return (
    <div> 
        <div className="p-20">
            <h2 className="text-6xl font-bold text-center">⛔</h2>
            <h2 className="text-6xl font-bold text-center">403</h2>
            <h2 className="text-2xl font-bold text-center">Accès refusé</h2>
            <p className="text-center">Vous n'avez pas les permissions nécessaires pour accéder à cette page.</p>
        </div>      
    </div>
  )
}

export default AccessDenied