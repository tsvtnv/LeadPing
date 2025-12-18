
import React from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Deliverability from './pages/Deliverability';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import CustomerStories from './pages/CustomerStories';
import Careers from './pages/Careers';
import HelpCenter from './pages/HelpCenter';
import ApiDocs from './pages/ApiDocs';
import Status from './pages/Status';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Auth Pages
import LoginPage from './app/login/page';
import SignupPage from './app/signup/page';

// App Pages
import DashboardLayout from './app/app/layout';
import DashboardOverview from './app/app/page';
import BillingPage from './app/app/billing/page';
import LeadsInbox from './app/app/leads/page';
import FunnelPage from './app/app/funnel/page';
import OutreachPage from './app/app/outreach/page';
import SettingsPage from './app/app/settings/page';
import SitesPage from './app/app/sites/page';
import AdminOverview from './app/admin/page';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout for public marketing pages that require Header/Footer
const MarketingLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white text-black font-sans">
    <Header />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Marketing Routes */}
        <Route path="/" element={<MarketingLayout><Home /></MarketingLayout>} />
        <Route path="/how-it-works" element={<MarketingLayout><HowItWorks /></MarketingLayout>} />
        <Route path="/features" element={<MarketingLayout><Features /></MarketingLayout>} />
        <Route path="/pricing" element={<MarketingLayout><Pricing /></MarketingLayout>} />
        <Route path="/deliverability" element={<MarketingLayout><Deliverability /></MarketingLayout>} />
        <Route path="/blog" element={<MarketingLayout><Blog /></MarketingLayout>} />
        <Route path="/blog/:id" element={<MarketingLayout><BlogPost /></MarketingLayout>} />
        <Route path="/about" element={<MarketingLayout><About /></MarketingLayout>} />
        <Route path="/customer-stories" element={<MarketingLayout><CustomerStories /></MarketingLayout>} />
        <Route path="/careers" element={<MarketingLayout><Careers /></MarketingLayout>} />
        <Route path="/help" element={<MarketingLayout><HelpCenter /></MarketingLayout>} />
        <Route path="/api-docs" element={<MarketingLayout><ApiDocs /></MarketingLayout>} />
        <Route path="/status" element={<MarketingLayout><Status /></MarketingLayout>} />
        <Route path="/contact" element={<MarketingLayout><Contact /></MarketingLayout>} />
        <Route path="/privacy" element={<MarketingLayout><Privacy /></MarketingLayout>} />
        <Route path="/terms" element={<MarketingLayout><Terms /></MarketingLayout>} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected App Routes */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="leads" element={<LeadsInbox />} />
          <Route path="sites" element={<SitesPage />} />
          <Route path="funnel" element={<FunnelPage />} />
          <Route path="outreach" element={<OutreachPage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<AdminOverview />} />
          <Route path="users" element={<div className="p-8">User List Placeholder</div>} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
