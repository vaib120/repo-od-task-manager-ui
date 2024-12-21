import config from './config';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  if (response.status === 204) { // No Content
    return;
  }
  return response.json();
};

export const fetchTasks = async () => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/tasks`);
    return await handleResponse(response);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const addTask = async (taskDescription) => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: taskDescription }),
    });
    if (response.status === 201 || response.status === 200) { // Created or OK
      return await response.json();
    }
    return await handleResponse(response);
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${config.apiBaseUrl}/api/tasks/${taskId}`, {
      method: 'DELETE',
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};