import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { fetchTasks, addTask, deleteTask } from './api';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks()
      .then(data => setTasks(data))
      .catch(error => setError(error.message));
  }, []);

  const handleAddTask = (task) => {
    addTask(task.description)
      .then(newTask => setTasks([...tasks, newTask]))
      .catch(error => setError(error.message));
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId)
      .then(() => fetchTasks().then(data => setTasks(data)))
      .catch(error => setError(error.message));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Task Manager</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <AddTask addTask={handleAddTask} />
      <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
    </Container>
  );
};

export default App;