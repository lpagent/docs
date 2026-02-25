import { useState } from "react";

export const StatsChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const data = [
    { label: "Mon", value: 65 },
    { label: "Tue", value: 78 },
    { label: "Wed", value: 90 },
    { label: "Thu", value: 81 },
    { label: "Fri", value: 95 },
    { label: "Sat", value: 70 },
    { label: "Sun", value: 85 },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Usage Statistics
        </h3>
        <div className="flex gap-2">
          {["day", "week", "month"].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${
                selectedPeriod === period
                  ? "bg-primary text-white"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-end justify-between h-48 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 gap-2">
            <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-t-lg relative overflow-hidden">
              <div
                className="bg-gradient-to-t from-primary to-primary/60 rounded-t-lg transition-all duration-500"
                style={{ height: `${(item.value / maxValue) * 192}px` }}
              ></div>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
