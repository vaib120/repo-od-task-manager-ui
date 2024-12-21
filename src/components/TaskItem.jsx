import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = ({ task, deleteTask }) => {
return (
<ListItem
secondaryAction={
<IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task.id)}>
<DeleteIcon />
</IconButton>
}
>
<ListItemText primary={task.description} />
</ListItem>
);
};

export default TaskItem;