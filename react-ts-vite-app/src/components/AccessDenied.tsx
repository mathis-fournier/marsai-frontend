import React from 'react'
import { useTranslation } from 'react-i18next';

function AccessDenied() {
  const { t } = useTranslation();

  return (
    <div> 
        <div className="p-20">
            <h2 className="text-6xl font-bold text-center">⛔</h2>
            <h2 className="text-6xl font-bold text-center">403</h2>
            <h2 className="text-2xl font-bold text-center">{t('access_denied.title')}</h2>
            <p className="text-center">{t('access_denied.description')}</p>
        </div>      
    </div>
  )
}

export default AccessDenied