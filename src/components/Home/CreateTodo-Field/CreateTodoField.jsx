import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    const addTodo = title => {
        setTodos(prev => [
            {
                _id: new Date(),
                title,
                isCompleted: false,
            },
            ...prev,
        ])
        setTitle('')
    }

   

    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl
        border-gray-800 border-2 px-5 py-3 w-full mt-20'>
            <input
                type='text'
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                className="bg-transparent w-full border-none outline-none"
                placeholder='Add your task'
            />
            <button onClick={() => addTodo(title)}>
                <BsPlus size={25}
                    className='text-white-500 hover:text-green-500' />
            </button>

        </div>
    )
}

export default CreateTodoField
