import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {

    const [bookInput, setBookInput] = useState('');

    const handleBookChange = (e) => {
        setBookInput(e.target.value);
    }

    const handleInputSubmit = (e) => {
        e.preventDefault();
        if( bookInput.length !== 0 ){
            onCreate(bookInput)
            setBookInput('')
        }else{
            alert('Please Add a Book!');
        }

    }

    return (
        <div>
            <form onSubmit={handleInputSubmit} className="flex flex-col md:flex-row justify-center gap-5 mt-10 ">
                <input
                    type="text"
                    placeholder="Add a Book..."
                    autoFocus={true}
                    value={bookInput}
                    onChange={handleBookChange}
                    className="form-input rounded-lg rounded-b-none md:rounded-tr-none md:rounded-tl-lg md:rounded-r-none  px-5 py-2 grow-1 focus:outline-transparent" />
                <button className="bg-orange-600 py-2 px-4 rounded-lg rounded-t-none md:rounded-tl-none md:rounded-tr-lg md:rounded-l-none w-50% text-white hover:bg-orange-500">
                    Save
                </button>
            </form>
        </div>
    );
};

export default BookCreate;
