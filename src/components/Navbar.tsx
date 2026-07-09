import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';
interface NavbarProps {
  cartCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
}
export function Navbar({
  cartCount,
  searchQuery,
  onSearchChange,
  onCartClick
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-cream-50/90 backdrop-blur-md border-b border-rose-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <button className="lg:hidden p-2 text-rose-900 hover:bg-rose-100 rounded-full transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <a
              href="#"
              className="font-serif text-2xl md:text-3xl font-bold text-rose-900 tracking-wide">
              
              Saree Store
            </a>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-rose-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-rose-200 rounded-full leading-5 bg-white placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 sm:text-sm transition-all"
                placeholder="Search for sarees..." />
              
            </div>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <button
              onClick={onCartClick}
              className="relative p-2 text-rose-900 hover:bg-rose-100 rounded-full transition-colors group"
              aria-label="Cart">
              
              <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {cartCount > 0 &&
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-rose-600 rounded-full">
                  {cartCount}
                </span>
              }
            </button>
          </div>
        </div>

        {/* Search Bar (Mobile) */}
        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-rose-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-rose-200 rounded-full leading-5 bg-white placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 sm:text-sm transition-all"
              placeholder="Search for sarees..." />
            
          </div>
        </div>
      </div>
    </header>);

}