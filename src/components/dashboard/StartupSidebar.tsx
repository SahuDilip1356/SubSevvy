import { BarChart3, Grid, Lightbulb, Settings, Users, Wallet, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: Grid },
  { path: '/subscriptions', label: 'Subscriptions', icon: Wallet },
  { path: '/user-management', label: 'User Management', icon: Users },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/savings', label: 'Savings', icon: Lightbulb },
  { path: '/integrations', label: 'Integrations', icon: Zap },
];

interface StartupSidebarProps {
  userName?: string;
  companyName?: string;
}

export default function StartupSidebar({ userName = 'Jane Doe', companyName = 'Acme Inc.' }: StartupSidebarProps) {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white rounded-full"></div>
          </div>
          <h1 className="text-xl font-bold text-gray-900">SubSevvy</h1>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto border-t border-gray-200 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {userName.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">{userName}</p>
            <p className="text-xs text-gray-500 truncate">{companyName}</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
