import { useTranslation } from "react-i18next";

export default function DashboardGlobal() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-auto p-6 bg-[var(--color-bg2)]">
        <h2 className="text-[var(--color-secondary)] text-2xl font-mono">
          {t("dashboard_global.title")}
        </h2>
        <h1 className="text-4xl text-[var(--color-white)] font-bold">
          {t("dashboard_global.subtitle")}
        </h1>
        <p className="italic text-[var(--color-white)]">
          {t("dashboard_global.description")}
        </p>
      </div>

      {/* DIV CONTAINER CARDS */}
      <div className="grid grid-cols-2 p-6 gap-6 max-w-full bg-[var(--color-brand)]">
        {/* CARD 1 */}
        <div className="CARD DASHBOARD border rounded-md p-6 bg-[var(--color-brand2)]">
          <div className="flex">
            <img
              className="rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=6366f1"
              alt="placeholderlogo"
            />
            <p className="bg-[var(--color-brand)] font-bold text-xs ml-auto text-[var(--color-white)] p-2 rounded-full">
              {t("dashboard_global.card.objective", { count: 600 })}
            </p>
          </div>
          <div>
            <p className="font-mono text-[var(--color-white)]">
              {t("dashboard_global.card.films_evaluated", { count: 432 })}
            </p>
          </div>
          <div className="mt-6 text-[var(--color-white)]">
            <p>{t("dashboard_global.card.completed", { percentage: "x" })}</p>
            <p className="overflow-hidden text-clip text-xs text-[var(--color-secondary)] bg-[var(--color-secondary)] rounded-full">
              -
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="CARD DASHBOARD border rounded-md p-6 bg-[var(--color-brand2)]">
          <div className="flex">
            <img
              className="rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=6366f1"
              alt="placeholderlogo"
            />
            <p className="bg-[var(--color-brand)] font-bold text-xs ml-auto text-[var(--color-white)] p-2 rounded-full">
              {t("dashboard_global.card.objective", { count: 600 })}
            </p>
          </div>
          <div>
            <p className="font-mono text-[var(--color-white)]">
              {t("dashboard_global.card.films_evaluated", { count: 432 })}
            </p>
          </div>
          <div className="mt-6 text-[var(--color-white)]">
            <p>{t("dashboard_global.card.completed", { percentage: "x" })}</p>
            <p className="overflow-hidden text-clip text-xs text-[var(--color-secondary)] bg-[var(--color-secondary)] rounded-full">
              -
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="CARD DASHBOARD border rounded-md p-6 bg-[var(--color-brand2)]">
          <div className="flex">
            <img
              className="rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=6366f1"
              alt="placeholderlogo"
            />
            <p className="bg-[var(--color-brand)] font-bold text-xs ml-auto text-[var(--color-white)] p-2 rounded-full">
              {t("dashboard_global.card.objective", { count: 600 })}
            </p>
          </div>
          <div>
            <p className="font-mono text-[var(--color-white)]">
              {t("dashboard_global.card.films_evaluated", { count: 432 })}
            </p>
          </div>
          <div className="mt-6 text-[var(--color-white)]">
            <p>{t("dashboard_global.card.completed", { percentage: "x" })}</p>
            <p className="overflow-hidden text-clip text-xs text-[var(--color-secondary)] bg-[var(--color-secondary)] rounded-full">
              -
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="CARD DASHBOARD border rounded-md p-6 bg-[var(--color-brand2)]">
          <div className="flex">
            <img
              className="rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=6366f1"
              alt="placeholderlogo"
            />
            <p className="bg-[var(--color-brand)] font-bold text-xs ml-auto text-[var(--color-white)] p-2 rounded-full">
              {t("dashboard_global.card.objective", { count: 600 })}
            </p>
          </div>
          <div>
            <p className="font-mono text-[var(--color-white)]">
              {t("dashboard_global.card.films_evaluated", { count: 432 })}
            </p>
          </div>
          <div className="mt-6 text-[var(--color-white)]">
            <p>{t("dashboard_global.card.completed", { percentage: "x" })}</p>
            <p className="overflow-hidden text-clip text-xs text-[var(--color-secondary)] bg-[var(--color-secondary)] rounded-full">
              -
            </p>
          </div>
        </div>
      </div>

      {/* CARD FULL WIDTH (5) */}
      <div className="w-full p-6 pt-0 bg-[var(--color-brand)]">
        <div className="CARD DASHBOARD border rounded-md p-6 bg-[var(--color-brand2)]">
          <div className="flex">
            <img
              className="rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=6366f1"
              alt="placeholderlogo"
            />
            <p className="bg-[var(--color-brand)] font-bold text-xs ml-auto text-[var(--color-white)] p-2 rounded-full">
              {t("dashboard_global.card.objective", { count: 600 })}
            </p>
          </div>
          <div>
            <p className="font-mono text-[var(--color-white)]">
              {t("dashboard_global.card.active_accounts", { count: 123 })}
            </p>
          </div>
          <div className="mt-6 text-[var(--color-white)]">
            <p>{t("dashboard_global.card.today", { count: "x" })}</p>
          </div>
        </div>
      </div>
    </>
  );
}
