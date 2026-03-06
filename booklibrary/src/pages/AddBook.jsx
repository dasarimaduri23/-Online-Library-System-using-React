import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';

const AddBook = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    isbn: ''
  });

  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const rating = parseFloat(form.rating);
    if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
      setError('All fields except ISBN are required.');
      return;
    }

    if (isNaN(rating) || rating < 1 || rating > 5) {
      setError('Rating must be between 1.0 and 5.0');
      return;
    }

    dispatch(addBook({ ...form, rating, id: Date.now().toString() }));
    navigate(`/books/${form.category}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-3 text-center text-blue-700">Add a New Book</h1>
      <p className="text-blue-300 text-sm mb-6 text-center">
        Every book tells a story — add yours to the library.
      </p>

      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows={3}
          className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          step="0.1"
          value={form.rating}
          placeholder="Rating (1.0 - 5.0)"
          onChange={handleChange}
          className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* ISBN Field (optional) */}
        <input
          name="isbn"
          placeholder="ISBN (optional)"
          value={form.isbn}
          onChange={handleChange}
          className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p className="text-sm text-gray-500">
           Optional: Add ISBN to auto-fetch cover image. You can find it on <a href="https://openlibrary.org" className="text-blue-600 underline" target="_blank" rel="noreferrer">OpenLibrary.org</a> or Google.
        </p>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;