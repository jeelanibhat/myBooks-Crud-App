import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const BookShow = ({ book, onDelete, onUpdate }) => {

  const [showEdit, setShowEdit] = useState(false);
  const [editInput, setEditInput] = useState('');

  // let bookCount = document.getElementById('style-1');
  // let updBookCount = bookCount.children.length;

  const deleteHandler = (id) => {
    onDelete(id)
  }

  const handleEdit = (id) =>{
    setShowEdit(!showEdit);
    setEditInput(book.title)
  }

  const handleUpdateChange = (e) =>{
    setEditInput(e.target.value)
  }

  const handleUpdateBook = (e) =>{
    e.preventDefault();
    const updateBookValues = {
      id: book.id,
      title: editInput
    }
    onUpdate(updateBookValues);
      setShowEdit(false)
  }

  return (
    <div className='mt-2 bg-blue-400 text-white p-3 mb-2 shadow-lg rounded-lg rounded-r-none cursor-pointer hover:shadow-sm '>
      <div className="main__title-wrap flex justify-between align-middle ">
        <h2>{book.title}</h2>
        <div className="icon-wrap flex gap-2 align-middle">
          <FaTrashAlt className='hover:text-red-400' onClick={() => deleteHandler(book.id)} />
          <FaEdit className='hover:text-red-400' onClick={ () => handleEdit(book.id)} />
        </div>
      </div>

      { showEdit == true ? 
      <div className="edit-wrap mt-5">
        <h2>Update Book</h2>
        <form onSubmit={handleUpdateBook} className="flex flex-col md:flex-row justify-around mt-2">
          <input
            type="text"
            placeholder="Update a Book..."
            value={editInput}
            onChange={handleUpdateChange}
            className="form-input text-gray-800 rounded-lg rounded-b-none md:rounded-tr-none md:rounded-tl-lg md:rounded-r-none  px-5 py-2 grow-1 focus:outline-transparent" />
          <button className="bg-orange-600 py-2 px-4 rounded-lg rounded-t-none md:rounded-tl-none md:rounded-tr-lg md:rounded-l-none w-50% text-white hover:bg-orange-500">
            Update
          </button>
        </form>
      </div> : '' }
    </div>
  )
}

export default BookShow