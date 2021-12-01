import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHTTP from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  

  const {isLoading, error, sendRequest: fetchTasks} = useHTTP()


  useEffect(() => {

    const transformedTasks = (tasksObject) =>
    {
      const loadedTasks = [];
      for (const taskKey in tasksObject) 
      {
        loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
      }
      setTasks(loadedTasks);
    }

    fetchTasks({url: 'https://react-section-14-e9dc8-default-rtdb.firebaseio.com/tasks.json'}, transformedTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
