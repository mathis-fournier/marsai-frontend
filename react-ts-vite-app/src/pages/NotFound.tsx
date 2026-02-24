import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="p-25 md:p-90">
      <h2 className=" text-6xl font-bold text-white text-center">🐱 404</h2>
      <h2 className="text-white text-2xl  font-bold text-center">{t('not_found.title')}</h2>
      <p className="text-white p-10 text-center">{t('not_found.description')}</p>
    </div>
  )
}

export default NotFound