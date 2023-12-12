import React from 'react';

export const CreateTaskForm = ({
  title,
  description,
  dueDate,
  setTitle,
  setDescription,
  setDueDate,
  handleCreateTask,
}) => {
  return (
    <form onSubmit={handleCreateTask}>
      <div className="form-group">
        <label>Nmae</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="text"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
