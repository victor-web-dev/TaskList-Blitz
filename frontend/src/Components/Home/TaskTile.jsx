import React from "react";

export default function TaskTile(props) {
  const { id, title, status, createdAt } = props;
  const date = createdAt.split('T')[0];
  return (
    <div id={id} className="task-tile">
      <div>
        <h2>{title}</h2>
      </div>
        <div>
          <p>{status}</p>
        </div>
      <div>
        <p>{date}</p>
      </div>
    </div>
  );
}