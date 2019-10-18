import {ITask} from '../models/task.interface';

export const TASKS: ITask[] = [
    {id: 1, title: 'First task', description: 'This task has some description', complete: false},
    {id: 2, title: 'Second task', complete: false},
    {id: 3, title: 'Third task', description: '', complete: true},
];
