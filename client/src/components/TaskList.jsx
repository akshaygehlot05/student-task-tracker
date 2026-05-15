import API from "../services/api";

const TaskList = ({ tasks, fetchTasks }) => {

  // DELETE TASK
  const deleteTask = async (id) => {
    try {

      await API.delete(`/tasks/${id}`);

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };


  // MARK COMPLETED
  const markCompleted = async (id) => {
    try {

      await API.put(`/tasks/${id}`, {
        status: "Completed",
      });

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        All Tasks
      </h2>

      <div className="flex flex-col gap-4">

        {tasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          tasks.map((task) => (

            <div
              key={task._id}
              className="bg-slate-800 p-5 rounded-xl border border-slate-700"
            >

              <h3 className="text-xl font-semibold mb-2">
                {task.title}
              </h3>

              <p className="text-slate-300 mb-3">
                {task.description}
              </p>

              <div className="flex justify-between mb-4 text-sm">

                <span>
                  Status:
                  {" "}
                  <strong
                    className={
                      task.status === "Completed"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }
                  >
                    {task.status}
                  </strong>
                </span>

                <span>
                  Priority:
                  {" "}
                  <strong
                    className={
                      task.priority === "High"
                        ? "text-red-400"
                        : task.priority === "Medium"
                        ? "text-yellow-400"
                        : "text-green-400"
                    }
                  >
                    {task.priority}
                  </strong>
                </span>

              </div>


              <div className="flex gap-3">

                <button
                  onClick={() => markCompleted(task._id)}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
                >
                  Complete
                </button>

                <button
                  onClick={() => deleteTask(task._id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>

          ))
        )}

      </div>

    </div>
  );
};

export default TaskList;