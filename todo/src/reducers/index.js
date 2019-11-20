const newTask = (itemValue, idValue=Date.now()) => {
  return {
    id: idValue,
    item: itemValue,
    editing: false,
    completed: false
  }
}

export const initialState = [newTask('Learn about reducers')];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, newTask(action.payload)];
    case 'REMOVE_TASK':
      return state.filter(todo => {
        return !(todo.id === action.payload);
      });
    case 'TOGGLE_COMPLETED':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, completed: !todo.completed}
        } else {
          return todo;
        }
      });
    case 'CLEAR_DONE':
      // console.log('state in reducer: ', state);
      // console.log('state.length in reducer: ', state && state.length);
      if (state && state.length && state.length > 0) {
        return state.filter(todo => {
          return !todo.completed;
        });
      } else {
        return [];  //Fail safe when "Clear Done" clicked too many times.
      }
    default:
      return state;
  }
};
