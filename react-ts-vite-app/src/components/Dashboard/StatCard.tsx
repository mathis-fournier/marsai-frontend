interface StatCardProps {
  icon: string;
  title: string;
  objective: string | number;
  objectivemax: string | number;
  percentageText?: string;
  progressValue?: string | number;
  children?: any;
}

export default function StatCard({
  icon,
  title,
  objective,
  objectivemax,
  percentageText,
  progressValue,
  children,
}: StatCardProps) {
  return (
    <div className="CARD DASHBOARD border border-border rounded-md p-6 bg-brand2 hover:border hover:border-secondary flex flex-col justify-between cursor-pointer">
      <div className="flex pb-2">
        <img className="rounded-md p-1" src={icon} alt="icon" />
        <p className="bg-brand font-bold text-xs ml-auto text-white p-2 rounded-full">
          {objective + "/" + objectivemax}
        </p>
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
      </div>
      <div className="mt-6 text-white">
        {/* POUR LES CARDS FULL W */}
        {progressValue !== undefined ? (
          <>
            <p className="font-light">{percentageText}</p>
            <progress
              max="100"
              className="w-full h-4 appearance-none overflow-hidden rounded-full 
              bg-white 
              [&::-webkit-progress-bar]:bg-slate-200 
              [&::-webkit-progress-value]:bg-secondary 
              [&::-moz-progress-bar]:bg-secondary"
              value={progressValue}
            />
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
