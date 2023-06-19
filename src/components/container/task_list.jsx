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
    


    const changeCompleted = (id) =>{
        console.log("TODO: Cambiar estado de una tarea")
    }
    return (
        <div>
            <div>
                <h1>
                    Your Tasks:
                </h1>
            </div>
            <TaskComponent task={defaultTask} />
        </div>
    );
};


export default TaskListComponent;
