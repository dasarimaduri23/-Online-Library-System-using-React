import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) => state.books.find((b) => b.id === id));

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-700">
        Book not found.
      </div>
    );
  }

const imageSrc =
  book.image && book.image.trim() !== ''
    ? book.image
    : book.isbn
    ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`
    : '/covers/default.jpg';

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 bg-white shadow-2xl rounded-2xl p-8 mx-auto max-w-4xl mt-10 text-gray-900">
      <img
        src={imageSrc}
        alt={book.title}
        className="w-64 max-h-[400px] object-cover rounded-xl shadow-lg"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/covers/default.jpg';
        }}
      />

      <div className="text-left">
        <h1 className="text-3xl font-bold mb-4 text-blue-800">{book.title}</h1>

        <p className="mb-2">
          <span className="font-semibold">Author:</span> {book.author}
        </p>

        <p className="mb-2">
          <span className="font-semibold">Description:</span>{' '}
          {book.description ? (
            book.description
          ) : (
            <span className="italic text-gray-500">No description available.</span>
          )}
        </p>

        <p className="mb-6">
          <span className="font-semibold">Rating:</span> ⭐ {book.rating}
        </p>

        <Link
          to="/books"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Back to Browse
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;