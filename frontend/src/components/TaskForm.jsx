import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initial }) => {
  const [title, setTitle] = useState(initial?.title || '');
  const [description, setDescription] = useState(initial?.description || '');
  const [status, setStatus] = useState(initial?.status || 'pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert('Title is required');
    onSubmit({ title, description, status });

    if (!initial) {
      setTitle('');
      setDescription('');
      setStatus('pending');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        className="input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="input"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <button className="btn">Save</button>
    </form>
  );
};

export default TaskForm;
