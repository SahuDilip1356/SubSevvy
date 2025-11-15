import { BarChart3, Grid, Lightbulb, Settings, Wallet } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: Grid },
  { path: '/subscriptions', label: 'Subscriptions', icon: Wallet },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/savings', label: 'Savings', icon: Lightbulb },
  { path: '/settings', label: 'Settings', icon: Settings },
];

interface FamilySidebarProps {
  familyName?: string;
}

export default function FamilySidebar({ familyName = 'Miller Family' }: FamilySidebarProps) {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gradient-to-b from-purple-50 to-white border-r border-purple-100 min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            SubSevvy
          </h1>
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
                    ? 'bg-purple-100 text-purple-700 font-medium'
                    : 'text-gray-600 hover:bg-purple-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
