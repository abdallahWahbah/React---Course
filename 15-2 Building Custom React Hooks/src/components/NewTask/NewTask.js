import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHTTP from '../../hooks/use-http';

const NewTask = (props) => {
  
  const {isLoading, error, sendRequest: sendTaskRequest} = useHTTP();

  const createTask = (taskText, taskData) =>
  {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {

    sendTaskRequest({
      url: 'https://react-section-14-e9dc8-default-rtdb.firebaseio.com/tasks.json',
      body: {task: taskText},
      headers: {'Content-Type': 'application/json',},
      method: "POST"
    }, createTask.bind(null, taskText))
    
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
