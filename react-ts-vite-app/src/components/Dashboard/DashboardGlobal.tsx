import { useTranslation } from "react-i18next";

export default function DashboardGlobal() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-auto p-6 bg-[var(--color-bg2)]">
        <h2 className="text-blue-400 text-2xl font-mono">{t('dashboard_global.title')}</h2>
        <h1 className="text-4xl font-bold">{t('dashboard_global.subtitle')}</h1>
        <p className="italic">
          {t('dashboard_global.description')}
        </p>
      </div>

      {/* DIV CONTAINER CARDS */}
      <div className="grid grid-cols-2 p-6 gap-6 maw-w-full bg-[var(--color-bg2)]">
        {/* CARD 1 ( ENLEVER LES COMMENTAIRES QUAND ELLES MARCHENT )*/}
        <div className="CARD DASHBOARD border rounded-md p-6 bg-white">
          <div className="flex">
            <img
              className="bg-slate-200 rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=2B7FFF"
              alt="placeholderlogo"
            />
            <p className="bg-slate-200 font-bold text-xs ml-auto text-blue-500 p-2 rounded-full">
              {t('dashboard_global.card.objective', { count: 600 })}
            </p>
          </div>
          <div>
            <p className="font-mono">{t('dashboard_global.card.films_evaluated', { count: 432 })}</p>
          </div>
          <div className="mt-6">
            <p>{t('dashboard_global.card.completed', { percentage: 'x' })}</p>
            <p className="overflow-hidden text-clip text-xs text-blue-400 bg-blue-400 rounded-full">
              ---------------|----------------------------
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="CARD DASHBOARD rounded-md border p-6 bg-white">
          <div className="flex">
            <img
              className="bg-slate-200 rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=2B7FFF"
              alt="placeholderlogo"
            />
            <p className="bg-slate-200 font-bold text-xs ml-auto text-blue-500 p-2 rounded-full">
              {t('dashboard_global.card.objective', { count: 600 })}
            </p>
          </div>
          <div>
            <p className="font-mono">{t('dashboard_global.card.films_evaluated', { count: 432 })}</p>
          </div>
          <div className="mt-6">
            <p>{t('dashboard_global.card.completed', { percentage: 'x' })}</p>
            <p className="overflow-hidden text-clip text-xs text-blue-400 bg-blue-400 rounded-full">
              ---------------|----------------------------
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="CARD DASHBOARD rounded-md border p-6 bg-white">
          <div className="flex ">
            <img
              className="bg-slate-200 rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=2B7FFF"
              alt="placeholderlogo"
            />
            <p className="bg-slate-200 font-bold text-xs ml-auto text-blue-500 p-2 rounded-full">
              {t('dashboard_global.card.objective', { count: 600 })}
            </p>
          </div>
          <div>
            <p className="font-mono">{t('dashboard_global.card.films_evaluated', { count: 432 })}</p>
          </div>
          <div className="mt-6">
            <p>{t('dashboard_global.card.completed', { percentage: 'x' })}</p>
            <p className="overflow-hidden text-clip text-xs text-blue-400 bg-blue-400 rounded-full">
              ---------------|----------------------------
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="CARD DASHBOARD rounded-md bg-white border p-6">
          <div className="flex">
            <img
              className="bg-slate-200 rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=2B7FFF"
              alt="placeholderlogo"
            />
            <p className="bg-slate-200 font-bold text-xs ml-auto text-blue-500 p-2 rounded-full">
              {t('dashboard_global.card.objective', { count: 600 })}
            </p>
          </div>
          <div>
            <p className="font-mono">{t('dashboard_global.card.films_evaluated', { count: 432 })}</p>
          </div>
          <div className="mt-6">
            <p>{t('dashboard_global.card.completed', { percentage: 'x' })}</p>
            <p className="overflow-hidden text-clip text-xs text-blue-400 bg-blue-400 rounded-full">
              ---------------|----------------------------
            </p>
          </div>
        </div>
      </div>

      {/* CARD FULL WIDTH (5) */}
      <div className="w-full p-6 pt-0 bg-[var(--color-bg2)]">
        <div className="CARD DASHBOARD rounded-md border p-6 bg-white">
          <div className="flex">
            <img
              className="bg-slate-200 rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=2B7FFF"
              alt="placeholderlogo"
            />
            <p className="bg-slate-200 font-bold text-xs ml-auto text-blue-500 p-2 rounded-full">
              {t('dashboard_global.card.objective', { count: 600 })}
            </p>
          </div>
          <div>
            <p className="font-mono">{t('dashboard_global.card.active_accounts', { count: 123 })}</p>
          </div>
          <div className="mt-6">
            <p>{t('dashboard_global.card.today', { count: 'x' })}</p>
          </div>
        </div>
      </div>
    </>
  );
}
