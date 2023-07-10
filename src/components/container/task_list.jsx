import React, { useEffect, useState } from 'react';
import { Task } from '../../models/taskclass';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

import "../../styles/task.scss"
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);



    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("modificacion de tareas")
        setLoading(false)
        return () => {
            console.log("TaskList componente is going unmount")
        };
    }, [tasks]);

    function completeTask(task) {
        console.log("Complete this task:", task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed
        setTasks(tempTasks)
    }

    function deleteTask(task) {
        console.log("Delete this task:", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log("Add this task:", task);
        const tempTasks = [...tasks];
        tempTasks.push(task)
        setTasks(tempTasks)
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    <div className='card-body' style={{ position: "relative", height: "400px" }} data-mdb-perfect-scrollbar="true">
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description                            </th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return (
                                        <TaskComponent
                                            key={index}
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <TaskForm add={addTask}/>
                </div>
            </div>
        </div>
    );
};


export default TaskListComponent;
