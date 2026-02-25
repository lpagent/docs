import { useState } from 'react';

export const MetricCard = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-zinc-600 dark:text-zinc-400">{title}</span>
        {icon && <span className="text-xl">{icon}</span>}
      </div>
      <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
        {value}
      </div>
      <div className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? '↑' : '↓'} {Math.abs(change)}%
      </div>
    </div>
  );
};

export const ActivityItem = ({ title, time, status }) => {
  const statusColors = {
    success: 'bg-green-500',
    pending: 'bg-yellow-500',
    failed: 'bg-red-500'
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

export const ActivityFeed = () => {
  const activities = [
    { title: 'New user registered', time: '2 min ago', status: 'success' },
    { title: 'Payment processing', time: '5 min ago', status: 'pending' },
    { title: 'Server health check', time: '10 min ago', status: 'success' },
    { title: 'API rate limit reached', time: '15 min ago', status: 'failed' },
    { title: 'Database backup completed', time: '1 hour ago', status: 'success' }
  ];
  
  return (
    <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
        Recent Activity
      </h3>
      <div>
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export const StatsChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  const data = [
    { label: 'Mon', value: 65 },
    { label: 'Tue', value: 78 },
    { label: 'Wed', value: 90 },
    { label: 'Thu', value: 81 },
    { label: 'Fri', value: 95 },
    { label: 'Sat', value: 70 },
    { label: 'Sun', value: 85 }
  ];
  
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Usage Statistics
        </h3>
        <div className="flex gap-2">
          {['day', 'week', 'month'].map(period => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${
                selectedPeriod === period
                  ? 'bg-primary text-white'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
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

export const QuickActions = () => {
  const actions = [
    { label: 'Create New', icon: '➕', color: 'bg-blue-500' },
    { label: 'Import Data', icon: '📥', color: 'bg-purple-500' },
    { label: 'Export Report', icon: '📊', color: 'bg-green-500' },
    { label: 'Settings', icon: '⚙️', color: 'bg-orange-500' }
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-primary transition-colors group"
        >
          <div className="flex flex-col items-center gap-2">
            <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
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
