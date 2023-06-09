import React from 'react';
import { Task } from '../../models/taskclass';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
   
    const defaultTask = new Task('Example','Default description',false,LEVELS.NORMAL);


    return (
        <div>
            <div>
                Your Tasks:
            </div>    
            <TaskComponent task={defaultTask}/>
        </div>
    );
};


export default TaskListComponent;
