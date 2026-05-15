import { useEffect, useState } from "react";
import API from "../services/api";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Home = () => {

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {

      const res = await API.get("/tasks");

      setTasks(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-10">
          Student Task Tracker
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
            <TaskForm fetchTasks={fetchTasks} />
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
            <TaskList
              tasks={tasks}
              fetchTasks={fetchTasks}
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;