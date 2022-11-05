import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //console.log(state, action.payload);
      // .push no se recomienda poara react
      //state.push(action.payload);
      // Esta forma esta bien pero redux nos simplifica esto y nos permite utilizar un .push
      return [...state, action.payload];
    },
    removeTask: (state, action) => {
      // OTRA FORMA
      // const newList = state.filter((el) => el.id !== action.payload);
      // return newList;

      // SPLICE (argumentos): 1:INDICE DONDE COMIENZA EL DELETE - 2: CUANTOS INDICES SE ELIMINAN
      // EN ESTE CASO SOLO NECESITAMOS ELIMINAR 1 OBJETO
      const taskFound = state.find((el) => el.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;

      const foundTask = state.find((task) => task.id === id);

      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }

      //OTRA FORMA
      // const update = state.map((task) =>
      //   task.id === id
      //     ? { ...task, title: title, description: description }
      //     : task
      // );
      // return update;
    },
  },
});

export const { addTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
