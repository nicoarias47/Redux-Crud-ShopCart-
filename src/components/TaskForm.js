import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams, Link } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();

  const tasks = useSelector((state) => state.tasks);

  const handleChange = ({ target: { name, value } }) => {
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((el) => el.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <div>
      <Link to={"/"}>Return</Link>
      <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
        <label htmlFor="title" className="block text-xs font-bold">
          Task
        </label>
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
          value={task.title}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        />
        <label htmlFor="description" className="block text-xs font-bold  mb-2">
          Description
        </label>
        <textarea
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={task.description}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        ></textarea>

        <button className="bg-indigo-600 px-2 py-1 rounded-sm">Save</button>
      </form>
    </div>
  );
};

export default TaskForm;
