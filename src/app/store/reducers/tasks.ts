// import { Action } from '@ngrx/store';
// // import * as taskAction from '../actions/tasks';

// import { ITask } from '../../models/task.interface';


// export interface State {
//     ids: number[];
//     tasks: {
//         [id: number]: ITask
//     };
//     editTaskId: number;
// }

// export const initialState: State = {
//     ids: [1, 2, 3],
//     tasks: {
//         1: {id: 1, title: 'First task', description: 'description 333', complete: false},
//         2: {id: 2, title: 'Second task', complete: false},
//         3: {id: 3, title: 'Third task', description: '', complete: true},
//     },
//     editTaskId: null,
// };

// export function reducer(
//     state = initialState,
//     action: taskAction.Action
// ) {
//     switch (action.type) {
//         case taskAction.ADD_TASK: {
//             const newTask: ITask = action.payload;
//             return {
//                 ...state,
//                 ids: [...state.ids, newTask.id],
//                 films: { ...state.tasks, newTask}
//             };
//         }
//         case taskAction.EDIT_TASK: {
//             const id: number = action.payload;
//             return {
//                 ...state,
//                 editTaskId: id
//             };
//         }
//         case taskAction.DELETE_TASK: {
//             const id: number = action.payload;
//             return {
//                 ...state,
//                 deleteTaskId: id
//             };
//         }
//         default: return state;
//     }
// }
