import React from 'react'
import { useReducer } from 'react';
import './style.css'



const initialstate = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK': return [
            ...state,
            {
                id: state.length + 1,
                name: action.payload,
            }
        ]

        case 'DELETE_TASK': return state.filter( d => d.id !== action.payload)

        case 'RESET_TODO' : return init(action.payload)


        default: return state;

    }
}

const init = (initialstate) => {
    return initialstate;
}

const Todo = () => {
    const [todos, dispatch] = useReducer(reducer, initialstate, init);
    return (
        <div>
            <h1 className='hd1'> Todo-list {todos.length}</h1>
             Add New Task :
            <input className='i1' type="text" 
            onBlur={(e)=> dispatch(
                {type : 'ADD_TASK', payload: e.target.value}
            )} /> 
            <button className='btn1' onClick={()=> dispatch({
                type : 'RESET_TODO' ,payload: initialstate
            })}>Clear all</button>

            <hr />
            {todos.map(todo => <li key={todo.id}>{todo.name}
            <span><button className='btn2' onClick={()=> dispatch(
                {
                    type : 'DELETE_TASK',payload : todo.id
                }
            )}> x </button></span></li>)}

        </div>
    )
}

export default Todo