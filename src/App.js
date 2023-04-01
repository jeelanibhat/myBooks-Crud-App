import React, { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import Logo from '../src/jb-logo.png';

const App = () => {

    const [books, setBooks] = useState([]);

    // create function
    const createBook = (title) => {
        let updID = Math.floor((1 + Math.random()) * 999);

        const updatedBooks = [
            ...books,
            { id: updID, title }
        ]
        setBooks(updatedBooks)
    }

    // delete function
    const deleteBook = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }

    // update function
    const updateBook = (updateBookValues) => {
        const newId = updateBookValues.id;
        const newTitle = updateBookValues.title;
        const afterUpdateBook = books.map((book) => {
            if (updateBookValues.id === book.id) {
                return { ...book, id: newId, title: newTitle }
            }
            return book;
        })
        setBooks(afterUpdateBook)
    }


    return (
        <div className='flex align-middle justify-center'>
            <div className="container mx-auto p-4 rounded-lg shadow-2xl bg-slate-200 mt-12 w-80 md:w-2/6">
                <div className='text-2xl text-cyan-900 font-medium py-4 flex justify-center items-center shadow-lg rounded-lg gap-2'>
                    <img src={Logo} alt="logo" className='w-10' />
                    <h1> Book List App! </h1>
                </div>
                <BookList books={books} onDelete={deleteBook} onUpdate={updateBook} />
                <BookCreate onCreate={createBook} />

            </div>
        </div>
    )
}

export default App