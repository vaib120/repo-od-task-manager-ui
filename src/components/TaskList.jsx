import React from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask }) => {
return (
<List>
{tasks.map(task => (
<TaskItem key={task.id} task={task} deleteTask={deleteTask} />
))}
</List>
);
};

export default TaskList;