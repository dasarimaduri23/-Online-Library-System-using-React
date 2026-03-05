import React from 'react';
import { Link } from 'react-router-dom';
import books from '../data/books'; // Make sure this path is correct

const categories = [
  'Sci-Fi',
  'Biography',
  'Education',
  'Fiction',
  'Non-Fiction',
  'Fantasy',
  'Comedy-Drama',
  'Thriller',
  
];

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Welcome to the Online Library
      </h1>

      {/* CATEGORIES SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                to={`/books/${cat}`}
                className="block bg-blue-200 text-black-700 px-4 py-2 rounded hover:bg-blue-500 text-center shadow-md transition duration-200"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* POPULAR BOOKS SECTION */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="min-w-[200px] bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 hover:shadow-xl transition"
            >
         <img
            src={book.image || '/default-book-cover.jpg'}
            alt={book.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/default-book-cover.jpg'; // fallback image in public folder
            }}
            className="w-full h-60 object-cover bg-gray-200"
          />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">by {book.author}</p>
                <p className="text-sm text-yellow-600">⭐ {book.rating}</p>
                <Link
                  to={`/book/${book.id}`}
                  className="text-blue-600 text-sm hover:underline mt-2 inline-block"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;