import { BarChart3, Grid, Settings, Wallet } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: Grid },
  { path: '/subscriptions', label: 'Subscriptions', icon: Wallet },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/setup', label: 'Setup', icon: Settings },
];

interface HobbyistSidebarProps {
  userName?: string;
  userRole?: string;
}

export default function HobbyistSidebar({ userName = 'Creator', userRole = 'Hobbyist' }: HobbyistSidebarProps) {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="text-orange-500 text-2xl">✨</div>
          <h1 className="text-xl font-bold text-gray-900">SubSevvy</h1>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full"></div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{userName}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 ml-10">{userRole}</p>
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
                    ? 'bg-orange-50 text-orange-600 font-medium'
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

      <div className="mt-auto pt-6 border-t border-gray-200">
        <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-4 rounded-xl">
          <p className="text-sm font-semibold text-orange-900 mb-1">Gerekoke Florals</p>
          <p className="text-xs text-orange-700">Keep your creative spark alive!</p>
        </div>
      </div>
    </aside>
  );
}
