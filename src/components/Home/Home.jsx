import React, { useState } from 'react';
import CreateTodoField from './CreateTodo-Field/CreateTodoField';
import TodoItem from './item/TodoItem';

const data = [
    {
        _id: '123456',
        title: 'Drink Coffee',
        isCompleted: false,
    },
    {
        _id: 'xca23',
        title: 'Make todo app',
        isCompleted: false,
    },
    {
        _id: 'sa456',
        title: 'Going to rest',
        isCompleted: false,
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id =>
        setTodos([...todos].filter(t => t._id !== id))

   


    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2x1 font-bold text-center mb-10' > Todo App </h1>
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}

export default Home