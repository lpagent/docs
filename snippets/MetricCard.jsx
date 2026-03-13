export const MetricCard = ({ title, value }) => {
  return (
    <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {title}
        </span>
      </div>
      <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
        {value}
      </div>
    </div>
  );
};
