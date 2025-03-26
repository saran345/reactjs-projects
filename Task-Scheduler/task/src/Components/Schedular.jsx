/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";

export default function Schedular() {
  const [taskList, setTaskList] = useState([]); // Store all tasks
  const [completed, setCompleted] = useState([]);
  const [tasks, setTasks] = useState(""); // Store input task
  const [priority, setPriority] = useState("top");
  const [deadline, setDeadline] = useState("");

  // Handle input changes
  const handleDeadline = (e) => {
    setDeadline(e.target.value);
  };

  const handleTask = (e) => {
    setTasks(e.target.value);
  };

  const handlePriority = (e) => {
    setPriority(e.target.value);
  };

  // Add new task
  const addTask = () => {
    if (tasks.trim() === "" || deadline === "") {
      alert("Enter a task and Deadline!");
      return;
    }

    const selectDate = new Date(deadline);
    const currentDate = new Date();
    
    // Convert to "YYYY-MM-DD" format to compare only dates
    const formattedSelected = selectDate.toISOString().split("T")[0];
    const formattedCurrent = currentDate.toISOString().split("T")[0];

    if (formattedSelected <= formattedCurrent) {
      alert("Enter a future Date for the Task!!!");
      return;
    }

    const newTask = {
      id: taskList.length + 1,
      task: tasks,
      priority: priority,
      deadline: deadline,
      done: false,
    };

    setTaskList([...taskList, newTask]);
    setTasks("");
    setPriority("top");
    setDeadline("");
  };

  // Mark task as done
  const markDone = (id) => {
    const updatedTasks = taskList.map((t) =>
      t.id === id ? { ...t, done: true } : t
    );

    setTaskList(updatedTasks);

    const completeTask = taskList.find((t) => t.id === id);
    if (completeTask) {
      setCompleted([...completed, completeTask]);
    }
  };

  // Filter upcoming tasks
  const upcoming = taskList.filter((t) => !t.done);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md w-full">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Task Scheduler</h1>
        </header>
        <div className="mb-6 p-4 bg-gray-50 shadow rounded-md">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              id="task"
              placeholder="Enter the task!!!"
              onChange={handleTask}
              className="flex-1 p-2 border border-gray-300 text-black rounded-md"
              value={tasks}
            />
            <select
              id="priority"
              value={priority}
              onChange={handlePriority}
              className="p-2 border border-gray-300 rounded-md text-black"
            >
              <option value="top">Top Priority</option>
              <option value="middle">Middle Priority</option>
              <option value="less">Less Priority</option>
            </select>
            <input
              type="date"
              id="deadline"
              value={deadline}
              className="p-2 border border-gray-300 rounded-md text-black"
              onChange={handleDeadline}
            />
            <button
              id="add-task"
              onClick={addTask}
              className="text-white px-4 py-2 bg-red-800 rounded-md hover:bg-blue-600 transition"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Upcoming Tasks
          </h2>
          <div className="bg-white shadow rounded-md p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="p-2">Task Name</th>
                  <th className="p-2">Priority</th>
                  <th className="p-2">Deadline</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {upcoming.map((t) => (
                  <tr key={t.id} className="border-t text-center text-blue-600">
                    <td className="p-2 text-blue-900 font-semibold">{t.task}</td>
                    <td className="p-2 text-blue-900 font-semibold">{t.priority}</td>
                    <td className="p-2 text-blue-900 font-semibold">{t.deadline}</td>
                    <td className="p-2 text-blue-900 font-semibold">
                      {!t.done && (
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                          onClick={() => markDone(t.id)}
                        >
                          Mark Done
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Completed Task
          </h2>
          <div className="bg-white shadow rounded-md p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="p-2">Task Name</th>
                  <th className="p-2">Priority</th>
                  <th className="p-2">Deadline</th>
                </tr>
              </thead>
              <tbody>
                {completed.map((t) => (
                  <tr key={t.id} className="border-t text-center ">
                    <td className="p-2 text-blue-900 font-semibold">{t.task}</td>
                    <td className="p-2 text-blue-900 font-semibold">{t.priority}</td>
                    <td className="p-2 text-blue-900 font-semibold">{t.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
