export default function Dashboard() {
  return (
    <>
      <div className="w-auto p-6">
        <h2 className="text-blue-400 text-2xl font-mono">ADMIN MANAGEMENT</h2>
        <h1 className="text-4xl">VUE D'ENSEMBLE</h1>
        <p className="italic">
          Analyse détaillée de la progression et des indicateurs de performance
        </p>
      </div>
      {/* CARD 1 ( ENLEVER LES COMMENTAIRES QUAND ELLES MARCHENT )*/}
      <div className="grid grid-cols-2 p-6 gap-6 maw-w-full">
        <div className="CARD DASHBOARD border rounded-md p-6">
          <div className="flex">
            <img
              className="bg-slate-200 rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=2B7FFF"
              alt="placeholderlogo"
            />
            <p className="bg-slate-200 font-bold text-xs ml-auto text-blue-500 p-2 rounded-full">
              OBJECTIF : 600
            </p>
          </div>
          <div>
            <p className="font-mono">432 FILMS EVALUES PAR LE JURY</p>
          </div>
          <div className="mt-6">
            <p>x% complété</p>
            <p>---------------|-----</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="CARD DASHBOARD rounded-md border p-6">
          <div className="flex">
            <img
              className="bg-slate-200 rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=2B7FFF"
              alt="placeholderlogo"
            />
            <p className="bg-slate-200 font-bold text-xs ml-auto text-blue-500 p-2 rounded-full">
              Objectif : 600
            </p>
          </div>
          <div>
            <p className="font-mono">432 FILMS EVALUES PAR LE JURY</p>
          </div>
          <div className="mt-6">
            <p>x% complété</p>
            <p className="overflow-hidden text-clip">
              ---------------|----------------------------
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="CARD DASHBOARD rounded-md  border p-6">
          <div className="flex">
            <img
              className="bg-slate-200 rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=2B7FFF"
              alt="placeholderlogo"
            />
            <p className="bg-slate-200 font-bold text-xs ml-auto text-blue-500 p-2 rounded-full">
              Objectif : 600
            </p>
          </div>
          <div>
            <p className="font-mono">432 FILMS EVALUES PAR LE JURY</p>
          </div>
          <div className="mt-6">
            <p>x% complété</p>
            <p>----------------------------|-----</p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="CARD DASHBOARD rounded-md  border p-6">
          <div className="flex">
            <img
              className="bg-slate-200 rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=2B7FFF"
              alt="placeholderlogo"
            />
            <p className="bg-slate-200 font-bold text-xs ml-auto text-blue-500 p-2 rounded-full">
              Objectif : 600
            </p>
          </div>
          <div>
            <p className="font-mono">432 FILMS EVALUES PAR LE JURY</p>
          </div>
          <div className="mt-6">
            <p>x% complété</p>
            <p>---------------|-----</p>
          </div>
        </div>
      </div>

      {/* CARD FULL WIDTH (4) */}
      <div className="w-full p-6 pt-0">
        <div className="CARD DASHBOARD rounded-md border p-6">
          <div className="flex">
            <img
              className="bg-slate-200 rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=2B7FFF"
              alt="placeholderlogo"
            />
            <p className="bg-slate-200 font-bold text-xs ml-auto text-blue-500 p-2 rounded-full">
              Objectif : 600
            </p>
          </div>
          <div>
            <p className="font-mono">123 COMPTES REALISATEUR ACTIF</p>
          </div>
          <div className="mt-6">
            <p>+x aujourd'hui</p>
          </div>
        </div>
      </div>
    </>
  );
}
