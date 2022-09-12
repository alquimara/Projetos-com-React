import { useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare,FiEdit3 } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    if(!newTaskTitle) return;
   const newTask = {
    id: Math.random(),
    title: newTaskTitle,
    isComplete: false
   }

   setTasks(oldTask =>[...oldTask, newTask])
   setNewTaskTitle('')

  }

  function handleToggleTaskCompletion(id: number) {
    const newTaskChecked = tasks.map(task => task.id === id?{
      ...task,
      isComplete: !task.isComplete
    }: task)
    setTasks(newTaskChecked)
  }

  function handleRemoveTask(id: number) {
    const filterTasks = tasks.filter(task => task.id != id);
    setTasks(filterTasks)
  }
  function handleEditTask(id:number,title:string){
   setNewTaskTitle(title)
   handleRemoveTask(id); 
  }
   
  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tarefas</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <div>
                <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                  <FiTrash size={16}/>
                </button>
                <button type="button" data-testid="edit-task-button" onClick={() => handleEditTask(task.id,task.title)}>
                  <FiEdit3 size={16}/>
                </button>
              </div>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}