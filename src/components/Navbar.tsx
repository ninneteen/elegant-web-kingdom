
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full z-20 top-0 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CompanyName
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary transition-colors'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/about') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary transition-colors'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm font-medium ${isActive('/contact') 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary transition-colors'}`}
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" className={`ml-4 ${isActive('/dashboard') ? 'text-primary' : ''}`}>
                    Dashboard
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="ghost" className={`ml-2 ${isActive('/profile') ? 'text-primary' : ''}`}>
                    <User className="h-4 w-4 mr-2" />
                    โปรไฟล์
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  onClick={logout} 
                  className="ml-2"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="ml-4">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" className="ml-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/dashboard') ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/profile') ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                  onClick={closeMenu}
                >
                  โปรไฟล์
                </Link>
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium text-primary"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
