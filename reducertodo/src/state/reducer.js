import { ADD__TODO, TOGGLE__COMPLETED, REMOVE__COMPLETED } from './action'


const initialState = {
    name: 'Erik',
    todos: [],
};
export const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD__TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TOGGLE__COMPLETED: 
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }
                    } else {
                        return todo
                    }
                })
            }
        case REMOVE__COMPLETED: 
            return {
                ...state,
                todos: state.todos.filter(item => !item.completed)
            }
        
        default:
            return state;
    }
};

