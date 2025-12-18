import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Zap, LayoutDashboard, Inbox, CreditCard, Settings, LogOut, Users, BarChart2, Send, Filter, Globe } from 'lucide-react';
import { clsx } from 'clsx';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const navItems = isAdmin ? [
     { name: 'Overview', path: '/admin', icon: LayoutDashboard },
     { name: 'Users', path: '/admin/users', icon: Users },
  ] : [
     { name: 'Overview', path: '/app', icon: LayoutDashboard },
     { name: 'Leads Inbox', path: '/app/leads', icon: Inbox },
     { name: 'Sites', path: '/app/sites', icon: Globe },
     { name: 'Funnel', path: '/app/funnel', icon: Filter },
     { name: 'Outreach', path: '/app/outreach', icon: Send },
     { name: 'Billing', path: '/app/billing', icon: CreditCard },
     { name: 'Settings', path: '/app/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 bg-white border-r border-gray-200">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center px-6 mb-8 gap-2">
            <div className="bg-black text-white p-1 rounded-sm">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="font-bold text-lg tracking-tight">LeadPing</span>
            {isAdmin && <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-medium">Admin</span>}
          </div>
          
          <nav className="flex-1 px-4 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={clsx(
                    isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors'
                  )}
                >
                  <item.icon
                    className={clsx(
                      isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-5 w-5'
                    )}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <Link to="/login" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gray-100">
                <span className="font-medium text-gray-500">JD</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">John Doe</p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
              </div>
              <LogOut size={16} className="ml-auto text-gray-400 group-hover:text-gray-600" />
            </div>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 md:pl-64 flex flex-col">
        <main className="flex-1 py-8">
           <div className="px-4 sm:px-6 md:px-8">
             <Outlet />
           </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;