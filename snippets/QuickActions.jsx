export const QuickActions = () => {
  const actions = [
    { label: "Create New", icon: "➕", color: "bg-blue-500" },
    { label: "Import Data", icon: "📥", color: "bg-purple-500" },
    { label: "Export Report", icon: "📊", color: "bg-green-500" },
    { label: "Settings", icon: "⚙️", color: "bg-orange-500" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-primary transition-colors group"
        >
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
            >
              {action.icon}
            </div>
            <span className="text-sm font-medium text-zinc-900 dark:text-white">
              {action.label}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};
