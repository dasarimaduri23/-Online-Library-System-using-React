import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';

const App = () => {
  const location = useLocation();
  const isBookDetails = location.pathname.startsWith('/book/');

  return (
    <div className="min-h-screen bg-sky-300 text-gray-800">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto py-8 px-4 mt-6">
        {isBookDetails ? (
          // No outer card for BookDetails page
          <Routes>
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<BrowseBooks />} />
              <Route path="/books/:category" element={<BrowseBooks />} />
              <Route path="/add" element={<AddBook />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;