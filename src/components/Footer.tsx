import React from 'react';
export function Footer() {
  return (
    <footer className="bg-rose-900 text-rose-50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Saree Store</h3>
            <p className="text-rose-200 max-w-xs">
              Bringing you the finest collection of handcrafted sarees from
              weavers across Pakistan.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-rose-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-rose-200">
              <li>Email: hello@sareestore.com</li>
              <li>Phone: +92 98765 43210</li>
              <li>Address: 123 Silk Board Layout, Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-rose-800 mt-12 pt-8 text-center text-rose-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Saree Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}