import { useTranslation } from 'react-i18next';

function AccessDenied() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="p-25 md:p-90">
        <h2 className="text-6xl font-bold text-center text-white">403</h2>
        <h2 className="text-2xl font-bold p-10 text-center text-white">⛔ {t('access_denied.title')}</h2>
        <p className="text-center  text-white">{t('access_denied.description')}</p>
      </div>
    </div>
  )
}

export default AccessDenied