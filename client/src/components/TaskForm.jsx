import { useState } from "react";
import API from "../services/api";

const TaskForm = ({ fetchTasks }) => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post("/tasks", formData);

      fetchTasks();

      setFormData({
        title: "",
        description: "",
        dueDate: "",
        status: "Pending",
        priority: "Medium",
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Add New Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={formData.title}
          onChange={handleChange}
          className="p-3 rounded-lg bg-slate-800 border border-slate-700"
          required
        />

        <textarea
          name="description"
          placeholder="Task description"
          value={formData.description}
          onChange={handleChange}
          className="p-3 rounded-lg bg-slate-800 border border-slate-700"
          required
        />

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="p-3 rounded-lg bg-slate-800 border border-slate-700"
          required
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="p-3 rounded-lg bg-slate-800 border border-slate-700"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="p-3 rounded-lg bg-slate-800 border border-slate-700"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold transition"
        >
          Add Task
        </button>

      </form>

    </div>
  );
};

export default TaskForm;