import React, { useState, useEffect } from "react";
import { fetchAllTasks } from './helpers/axios'

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
      <h2>Teste</h2>
      <div className="task-list">
        <ul>
          {
            isTaskLoading ? <span>Loading...</span> : (
              // allTasks.map((e) => {})
              console.log(isTaskLoading)
            )
          }
        </ul>
      </div>
      <div className="task"></div>
    </>
  );
}

export default Home;