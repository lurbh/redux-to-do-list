import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"
import todoReducer from "./stores/toDoSlice" 
import TodoList from "./components/ToDoList";

const store = configureStore({
    reducer:  {
        todos: todoReducer
    }
})

function App() {
  return (
    <Provider store={store}>
        <TodoList/>
    </Provider>
  );
}

export default App;
