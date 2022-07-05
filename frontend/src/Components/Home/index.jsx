import React, { useState, useEffect } from 'react';
import { fetchAllTasks } from './helpers/axios'
import TaskTile from './helpers/TaskTile';
import './helpers/style/home.css';

function Home() {
  const [allTasks, setAllTasks] = useState([]);
  const [isTaskLoading, setIsTaskLoading] = useState(true);

  useEffect(() => {
    fetchAllTasks()
      .then((data) => setAllTasks(data))
      .then(() => setIsTaskLoading(false));
  }, []);

  return (
      <div className='task-view'>
        <ul className="task-list">
          {
            isTaskLoading ? <span>Loading...</span> : (
              allTasks.data.map((e) => {
                return (<li key={e.id}>
                    <TaskTile
                      id={e.id}
                      title={e.title}
                      content={e.content}
                      status={e.status}
                      createdAt={e.createdAt}
                    />
                  </li>)
              })
            )
          }
        </ul>
      </div>
  );
}

export default Home;