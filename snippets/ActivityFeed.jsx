export const ActivityItem = ({ title, time, status }) => {
  const statusColors = {
    success: "bg-green-500",
    pending: "bg-yellow-500",
    failed: "bg-red-500",
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-800 last:border-0">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${statusColors[status]}`}></div>
        <span className="text-sm text-zinc-900 dark:text-white">{title}</span>
      </div>
      <span className="text-xs text-zinc-500 dark:text-zinc-400">{time}</span>
    </div>
  );
};
