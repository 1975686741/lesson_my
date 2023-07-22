import React, { useReducer, useState } from 'react';
// 初始化数据
const initialState = {
    todos: []
}
interface Todo {
    id: number;
    text: string;
    complete: boolean
}
interface TodosState {
    todos: Todo[]
}
type TodosAction =
 | {type: 'ADD_TODO', payload: Todo} 
 | {type: 'REMOVE_TODO', payload: number}
 | {type: 'TOGGLE_TODO', payload: number}

// 开始的时候执行一次， 返回initialState
// dispatch todosReducer重新执行
// actions + mutations = reducer
const todosReducer = (state:TodosState, action:TodosAction) => {
    // 新的状态
    switch (action.type) {
        case 'ADD_TODO':
            return { todos: [...state.todos, action.payload] }
            break;
        case 'REMOVE_TODO':
            return { todos: 
                state.todos.filter(todo => todo.id !== action.payload)
            }
            break;
        case 'TOGGLE_TODO':
            return { todos:
                state.todos.map(todo => {
                    return todo.id === action.payload ? 
                    {...todo, complete: !todo.complete} : todo
                })
            }
            break;
        default:
            return state
    }
}

const TodoList :React.FC = () => {
    // state 响应式的状态  dispatch 用来派发动作的   
    const [state, dispatch] = useReducer(todosReducer, initialState)
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const handleAddTodo = () => {
        setInputValue('')
        dispatch({type: 'ADD_TODO', 
        payload: {id: Math.random(), 
            text: inputValue,
             complete: false}})
    }

    const handleToggleTodo = (id:number) => {
        dispatch({type: 'TOGGLE_TODO', payload: id})
    }

    const handleRemoveTodo = (id:number) => {
        dispatch({type: 'REMOVE_TODO', payload: id})
    }
    return (
        <>
            <div>
                <h1>TodoList</h1>
                <input type="text" 
                    value={inputValue}
                 onChange={handleInputChange}
                />
                <button onClick={handleAddTodo}>
                    Add Todo
                </button>
            </div>
            <ul>
            {
                state.todos.map((todo) => (
                    <li 
                        key={todo.id}
                        style={{ textDecoration: todo.complete ? 'line-through' : '' }}
                    >
                        <span onClick={() => handleToggleTodo(todo.id)}>
                        {todo.text}
                        </span>
                        <button onClick={() => handleRemoveTodo(todo.id)}>
                        Delete
                        </button>
                        
                    </li>    
                ))
            }
            </ul>
        </>
    )
}

export default TodoList