import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BrowseBooks = () => {
  const { category } = useParams();               // e.g. "Fiction"
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState('');
  const [failedImages, setFailedImages] = useState({}); // { bookId: errorCount }

  /* ---------- helpers ---------- */
  const matchesSearch = (book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase());

  const matchesCategory = (book) =>
    category ? book.category === category : true;

  const filteredBooks = books.filter(
    (b) => matchesSearch(b) && matchesCategory(b)
  );

  const handleImageError = (id) =>
    setFailedImages((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

  /* ---------- render ---------- */
  return (
    
    <div className="max-w-4xl mx-auto p-6 mt-8 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        {category ? `Books in ${category}` : 'All Books'}
      </h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title or author"
        className="w-full p-3 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredBooks.length ? (
        <ul className="space-y-4">
          {filteredBooks.map((book) => {
            const errorCount = failedImages[book.id] || 0;

            /* decide which image to show */
            let imageSrc = '';
            if (book.isbn && errorCount === 0) {
              imageSrc = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;
            } else if (book.image && errorCount <= 1) {
              imageSrc = book.image;
            }

            /* truncated description (150chars) */
            const preview =
              book.description && book.description.length > 150
                ? `${book.description.slice(0, 150)}…`
                : book.description;

            return (
              <li
                key={book.id}
                className="bg-white p-4 rounded-lg shadow hover:bg-cyan-100 transition-colors flex items-start gap-4"
              >
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={book.title}
                    className="w-24 h-36 object-cover rounded-md shadow"
                    onError={() => handleImageError(book.id)}
                  />
                ) : (
                  <div className="w-24 h-36 flex items-center justify-center text-xs text-gray-500 border border-gray-300 rounded-md shadow bg-gray-100 text-center px-1">
                    No Image Available
                  </div>
                )}

                <div className="flex-1">
                  <Link
                    to={`/book/${book.id}`}
                    className="text-lg font-medium text-blue-700 hover:underline"
                  >
                    {book.title}
                  </Link>

                  <p className="text-sm text-gray-600 mb-1">
                    by {book.author}
                  </p>

                  {preview ? (
                    <p className="text-sm text-gray-700 mb-1">
                      {preview}
                      {book.description &&
                        book.description.length > 150 && (
                          <>
                            {' '}
                            <Link
                              to={`/book/${book.id}`}
                              className="text-blue-600 hover:underline"
                            >
                              Read more
                            </Link>
                          </>
                        )}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500 mb-1 italic">
                      No description available.
                    </p>
                  )}

                  <p className="text-sm text-yellow-600">⭐ {book.rating}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No books found {category && `in ${category}`} with that search.
        </p>
      )}
    </div>
    
  );
};

export default BrowseBooks;