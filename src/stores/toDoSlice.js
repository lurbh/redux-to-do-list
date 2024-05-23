import { createSlice, nanoid } from "@reduxjs/toolkit";

function findTodoByID(todos, id)
{
    const index = todos.findIndex((todo) => todo.id === id);
    if(index < 0)
    {
        throw new Error("Cannot Find ToDo for ID " + id);
    }
    return index;
}

const todosSlice = createSlice({
    name: "todos",
    initialState: [
        {
            id: nanoid(),
            task : "Do Laundry"
        },
        {
            id: nanoid(),
            task : "Hang Clothes"
        }
    ],
    reducers: {
        createToDo : {
            prepare : function(input)
            {
                return {
                    payload : {
                        id : nanoid(),
                        task : input.task
                    }
                }
            },
            reducer : function (state, action) {
                state.push({
                    id : action.payload.id,
                    task : action.payload.task
                });
            }
        },
        deleteToDo : function (state, action) {
            const index = findTodoByID(state, action.payload.id);
            state.splice(index,1);
        },
        editToDo : function (state, action) {
            const index = findTodoByID(state, action.payload.id);
            state[index].task = action.payload.task;
            //state.splice(index,1, action.payload.task);
        }
    }
})

export const { createToDo,  deleteToDo, editToDo } = todosSlice.actions;
export default todosSlice.reducer;