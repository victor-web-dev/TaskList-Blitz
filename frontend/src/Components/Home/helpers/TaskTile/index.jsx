import React, { useState } from "react";
import TaskEdit from "../TaskEdit";
import '../style/tasktile.css';

export default function TaskTile(props) {
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const { id, title, status, createdAt } = props;
  const date = createdAt.split('T')[0];
  const editDate = date.replaceAll('-', '/');

  const editTaskEvent = () => {
    setIsEditEnabled(!isEditEnabled);
  }

  return (
    <div id={id} className="task-tile">
      <section className="task-tile-basic-info"  onClick={ editTaskEvent }>
        <div>
          <h2>{title}</h2>
        </div>
          <div>
            <p>{status}</p>
          </div>
        <div>
          <p>{editDate}</p>
        </div>
      </section>
      <section>
        {
          isEditEnabled ? <TaskEdit /> : null
        }
      </section>
    </div>
  );
}