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



    const changeCompleted = (id) => {
        console.log("TODO: Cambiar estado de una tarea")
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
                                            task={task} />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <TaskForm/>
                </div>
            </div>
        </div>
    );
};


export default TaskListComponent;
