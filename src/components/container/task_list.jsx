import React, { useEffect, useState } from 'react';
import { Task } from '../../models/taskclass';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

import "../../styles/task.scss"

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    const [tasks, setTasks] = useState([defaultTask]);
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
                            <TaskComponent task={defaultTask}/>
                        </tbody>
                        </table>
                    </div>
                </div>
                <h1>
                    Your Tasks:
                </h1>
            </div>
            <TaskComponent task={defaultTask} />
        </div>
    );
};


export default TaskListComponent;
