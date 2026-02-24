import { useTranslation } from 'react-i18next';
import DashboardGlobal from './components/Dashboard/DashboardGlobal';
import HeroSection from './components/HeroSection';

function App() {

  const { t } = useTranslation('Festival');

  return (
    <>
      <HeroSection />

      <div id="presentation" className="font-serif w-[95%] md:w-[85%] lg:w-[75%] m-auto mt-10 ">
        <p className="font-bold font-sans md:p-15 bg-linear-to-t from-yellow-400 to-yellow-600 bg-clip-text text-transparent uppercase mb-20 text-lg md:text-3xl text-center">
          {t("project.description")}
        </p>

        <div className="font-sans ">
          <div className="my-5">

            {/* Titre 1 */}
            <div className="my-20">
              <h2 className="text-center text-white md:text-4xl font-bold text-2xl">
                {t("project.title")}

              </h2>
            </div>
            <div className="my-8 flex flex-col justify-center items-center gap-9 mb-10 m-auto px-6 rounded-2xl">
              <div className="flex flex-col m-auto">
                <span className="text-lg text-center md:text-xl text-white p-1">
                  {t("objectives.cards.human_description")}
                </span>
              </div>
              <div className="mb-8 grid grid-cols-2 xl:flex xl:flex-row xl:justify-around justify-center items-center gap-5 mt-5">
                <p className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-white shadow-lg/50 shadow-white bg-linear-to-b from-brand to-brand2 rounded-4xl justify-center items-center text-center text-4xl text-white">
                  🎬
                  <span className="font-bold text-center text-2xl">
                    {t("project.cards.one_minute_title")}
                  </span>
                  <span className="p-1 text-xs md:text-lg">
                    {t("project.cards.one_minute_description")}
                  </span>
                </p>
                <p className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-white shadow-lg/50 shadow-white bg-linear-to-b from-brand to-brand2 rounded-4xl justify-center items-center text-center text-4xl text-white">
                  🎓
                  <span className="font-bold text-center text-2xl">
                    {t("project.cards.free_title")}
                  </span>
                  <span className="p-1 text-xs md:text-lg">
                    {t("project.cards.free_description")}
                  </span>
                </p>
                <p className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-white shadow-lg/50 shadow-white bg-linear-to-b from-brand to-brand2 rounded-4xl justify-center items-center text-center text-4xl text-white">
                  🖖
                  <span className="font-bold text-center text-2xl">
                    {t("project.cards.for_all_title")}
                  </span>
                  <span className="p-1 text-xs md:text-lg">
                    {t("project.cards.for_all_description")}
                  </span>
                </p>
                <p className=" flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-white shadow-lg/50 shadow-white bg-linear-to-b from-brand to-brand2 rounded-4xl justify-center items-center text-center text-4xl text-white">
                  🔬
                  <span className="font-bold text-center text-2xl">
                    {t("project.cards.expertise_title")}
                  </span>
                  <span className="p-1 text-xs md:text-lg">
                    {t("project.cards.expertise_description")}
                  </span>
                </p>
              </div>
              <p className="flex flex-col m-auto my-5 w-35 h-35 sm:w-50 sm:h-50 border border-white shadow-lg/50 shadow-white bg-linear-to-b from-brand to-brand2 rounded-4xl justify-center items-center text-center text-4xl text-white">
                😄
                <span className="font-bold text-center text-2xl">
                  {t("objectives.cards.human_title")}
                </span>
              </p>
            </div>
          </div>

          <div className="my-20">

            {/* Titre 2 */}
            <h2 className="text-center text-white md:text-4xl font-bold text-2xl">
              {t("objectives.title")}

            </h2>
            <div className="my-8 flex flex-col justify-center items-center m-auto px-6 rounded-2xl">
              <span className="text-lg text-center md:text-xl text-white p-1">
                {t("objectives.cards.creative_challenge_description")}
              </span>
              <div className="my-8">
                <div className="flex flex-col md:flex md:flex-row md:justify-center justify-center items-center gap-5 mx-auto ">
                  <div className="flex flex-col m-auto">
                    <p className="flex flex-col m-auto my-5 w-35 h-35 sm:w-50 sm:h-50 border shadow-lg/50 shadow-white bg-linear-to-b from-brand to-brand2 rounded-4xl justify-center items-center text-center text-4xl text-white">
                      ⚡
                      <span className="font-bold text-center text-2xl">
                        {t("objectives.cards.creative_challenge_title")}
                      </span>
                    </p>

                  </div>
                  <div className="flex flex-col m-auto">
                    <p className="flex flex-col border border-white m-auto my-5 w-35 h-35 sm:w-50 sm:h-50 shadow-lg/50 shadow-white bg-linear-to-b from-brand to-brand2 rounded-4xl justify-center items-center text-center text-4xl text-white">
                      📡
                      <span className="font-bold text-center text-2xl">
                        {t("objectives.cards.desirable_futures_title")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-center text-white md:text-4xl font-bold text-2xl">
            {t("partners.title")}
          </h2>

          <div className="text-center p-5 rounded-2xl">
            <img
              src="/partners.png"
              alt="Partenaires Marsai"
              className="p-10 w-200 m-auto"
            />
          </div>

        </div>
      </div>
    </>
  );
}
export default App
