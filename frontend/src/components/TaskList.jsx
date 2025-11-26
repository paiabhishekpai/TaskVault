import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  if (!tasks || tasks.length === 0) return <div>No tasks yet</div>;

  return (
    <div className="space-y-2">
      {tasks.map((t) => (
        <div
          key={t._id}
          className="p-3 border rounded flex justify-between items-center"
        >
          <div>
            <div className="font-semibold">{t.title}</div>
            <div className="text-sm text-gray-600">{t.description}</div>
            <div className="text-xs text-gray-500">
              {new Date(t.createdAt).toLocaleString()}
            </div>
          </div>

          <div className="flex gap-2">
            <button className="btn" onClick={() => onToggle(t)}>
              {t.status === 'pending' ? 'Done' : 'Undo'}
            </button>

            <button className="btn" onClick={() => onEdit(t)}>
              Edit
            </button>

            <button className="btn btn-danger" onClick={() => onDelete(t._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
