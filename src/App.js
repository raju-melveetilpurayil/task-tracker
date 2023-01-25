import Header from "./componets/Header";
import Tasks from "./componets/Tasks";
import { useState } from 'react'

function App() 
{
  const [tasks,setTasks]=useState( [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    }, {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 9th at 6:30pm',
        reminder: true
    }, {
        id: 4,
        text: 'Ryan Birthday',
        day: 'Feb 21st at 4:30pm',
        reminder: true
    }
])
//delete task
const deleteTask=(id)=>{
 setTasks(tasks.filter(x=>x.id!==id));
}
const toggleReminder=(id)=>{
setTasks(tasks.map((task)=>task.id==id?{...task,reminder:!task.reminder}:task))
}
  return (
    <div className="container">
      <Header></Header>
      {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):('No Task to show')}
    </div>
  );
}

export default App;
