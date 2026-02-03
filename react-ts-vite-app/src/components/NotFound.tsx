import React from 'react'
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="p-20">
        <h2 className="text-6xl font-bold text-center">🧌 404</h2>
        <h2 className="text-2xl font-bold text-center">{t('not_found.title')}</h2>
        <p className="text-center">{t('not_found.description')}</p>
    </div>
  )
}

export default NotFound