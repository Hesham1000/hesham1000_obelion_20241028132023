import React from 'react';
import CreateAccount from './CreateAccount';
import Login from './Login';
import TaskCreation from './TaskCreation';
import TaskEditDelete from './TaskEditDelete';
import Notifications from './Notifications';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Task Management App</h1>
      </header>
      <main>
        <CreateAccount />
        <Login />
        <TaskCreation />
        <TaskEditDelete />
        <Notifications />
      </main>
    </div>
  );
}

export default App;
