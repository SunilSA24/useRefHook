import React, { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim() === '') return;
        setTodos([...todos, { text: input, completed: false }]);
        setInput('');
    };

    const toggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Todo List</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new todo"
                style={{ width: '70%', padding: '8px' }}
            />
            <button onClick={addTodo} style={{ padding: '8px 12px', marginLeft: '10px' }}>
                Add Todo
            </button>

            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                {todos.map((todo, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                marginRight: '10px'
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => toggleTodo(index)}>
                            {todo.completed ? 'Incomplete' : 'Complete'}
                        </button>
                    </li>
                ))}
            </ul>

            <button onClick={clearCompleted} style={{ marginTop: '20px' }}>
                Clear Completed
            </button>
        </div>
    );

}

export default TodoList