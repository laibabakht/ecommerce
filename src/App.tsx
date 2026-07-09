import React, { useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryFilter } from './components/CategoryFilter';
import { SareeList } from './components/SareeList';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { sarees } from './data/sarees';
import { CartItem, Saree } from './types';
const CATEGORIES = ['All', 'Silk', 'Cotton', 'Bridal', 'Party Wear'];
export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Derived state for cart count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  // Filter sarees based on search query and active category
  const filteredSarees = useMemo(() => {
    return sarees.filter((saree) => {
      const matchesSearch =
      saree.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      saree.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
      activeCategory === 'All' || saree.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);
  // Cart actions
  const handleAddToCart = (saree: Saree) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === saree.id);
      if (existingItem) {
        return prev.map((item) =>
        item.id === saree.id ?
        {
          ...item,
          quantity: item.quantity + 1
        } :
        item
        );
      }
      return [
      ...prev,
      {
        ...saree,
        quantity: 1
      }];

    });
    setIsCartOpen(true); // Optionally open cart when item is added
  };
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
    prev.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return {
          ...item,
          quantity: newQuantity
        };
      }
      return item;
    })
    );
  };
  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 font-sans">
      <Navbar
        cartCount={cartCount}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)} />
      

      <main className="flex-grow">
        <HeroSection />

        <div id="products" className="pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-900 mb-4">
              Our Collection
            </h2>
            <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
          </div>

          <CategoryFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory} />
          

          <SareeList sarees={filteredSarees} onAddToCart={handleAddToCart} />
        </div>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem} />
      
    </div>);

}