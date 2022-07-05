import React, { useState, useEffect } from 'react';
import { fetchAllTasks } from './helpers/axios'
import TaskTile from './TaskTile';

function Home() {
  const [allTasks, setAllTasks] = useState([]);
  const [isTaskLoading, setIsTaskLoading] = useState(true);

  useEffect(() => {
    fetchAllTasks()
      .then((data) => setAllTasks(data))
      .then(() => setIsTaskLoading(false));
  }, []);

  return (
    <>
      <div className="task-list">
        <ul>
          {
            isTaskLoading ? <span>Loading...</span> : (
              allTasks.data.map((e) => {
                return (<li key={e.id}>
                  <TaskTile
                    id={e.id} title={e.title} status={e.status} createdAt={e.createdAt}
                  />
                  </li>)
              })
            )
          }
        </ul>
      </div>
      <div className="task"></div>
    </>
  );
}

export default Home;