import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddTask = ({ addTask }) => {
const [description, setDescription] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
if (description.trim()) {
addTask({ id: Date.now(), description });
setDescription('');
}
};

return (
<Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 2 }}>
<TextField
label="Task Description"
variant="outlined"
value={description}
onChange={(e) => setDescription(e.target.value)}
required
/>
<Button type="submit" variant="contained">Add Task</Button>
</Box>
);
};

export default AddTask;