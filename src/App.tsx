import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FlashSale from './components/FlashSale';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import CompareProducts from './pages/CompareProducts';
import BecomePartner from './pages/BecomePartner';
import Elearning from './pages/Elearning';
import CourseDetail from './pages/CourseDetail';
import AuthCallback from './pages/AuthCallback';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import VerifyEmail from './pages/VerifyEmail';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import QuoteRequests from './pages/dashboards/QuoteRequests';
import { useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();
  const showFilterBar = !location.pathname.includes('/admin') && 
                       !location.pathname.includes('/dashboard') &&
                       !location.pathname.includes('/login') &&
                       !location.pathname.includes('/signup') &&
                       !location.pathname.includes('/verify-email');

  return (
    <div className="min-h-screen bg-[#0B3251]">
      <FlashSale />
      <Navbar />
      {showFilterBar && <FilterBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/compare" element={<CompareProducts />} />
        <Route path="/become-partner" element={<BecomePartner />} />
        <Route path="/elearning" element={<Elearning />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/quote-requests" element={<QuoteRequests />} />
      </Routes>
    </div>
  );
}