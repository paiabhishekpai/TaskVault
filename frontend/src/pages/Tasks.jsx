import React, { useEffect, useState } from "react";
import api from "../api/axios";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      alert("Error fetching tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (data) => {
    await api.post("/tasks", data);
    fetchTasks();
  };

  const updateTask = async (data) => {
    await api.put(`/tasks/${editing._id}`, data);
    setEditing(null);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const toggleStatus = async (task) => {
    await api.put(`/tasks/${task._id}`, {
      ...task,
      status: task.status === "pending" ? "completed" : "pending",
    });
    fetchTasks();
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h2 className="text-2xl font-semibold mb-6">Your Tasks</h2>

      <TaskForm
        onSubmit={editing ? updateTask : addTask}
        initial={editing}
      />

      <div className="mt-6">
        <TaskList
          tasks={tasks}
          onEdit={(task) => setEditing(task)}
          onDelete={deleteTask}
          onToggle={toggleStatus}
        />
      </div>
    </div>
  );
};

export default Tasks;
