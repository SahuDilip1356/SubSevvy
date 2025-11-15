import { BarChart3, DollarSign, Home, Percent, Settings, Wallet } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: Home },
  { path: '/subscriptions', label: 'Subscriptions', icon: Wallet },
  { path: '/savings', label: 'Savings', icon: Percent },
  { path: '/budget', label: 'Budget', icon: DollarSign },
  { path: '/settings', label: 'Settings', icon: Settings },
];

interface StudentSidebarProps {
  savingsPercentage?: number;
  userName?: string;
}

export default function StudentSidebar({ savingsPercentage = 73, userName = 'Alex Doe' }: StudentSidebarProps) {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gradient-to-b from-cyan-50 to-white border-r border-gray-200 min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="text-cyan-600 text-2xl">∞</div>
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
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white text-cyan-600 font-medium shadow-sm'
                    : 'text-gray-600 hover:bg-white/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto space-y-4">
        <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-5 rounded-2xl">
          <p className="text-cyan-900 text-sm font-medium mb-2 text-center">
            You're saving more than
          </p>
          <p className="text-4xl font-bold text-cyan-600 text-center mb-2">{savingsPercentage}%</p>
          <p className="text-cyan-900 text-xs text-center">of students!</p>
        </div>

        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {userName.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">{userName}</p>
            <p className="text-xs text-gray-500">Student Persona</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
