import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import {ITask} from '../../models/task.interface';
import TodoState, { initializeState } from '../todo.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(TodoActions.getTodoAction, state => state),
  on(TodoActions.createTodoAction, (state: TodoState, task: ITask) => {
    return { ...state, Tasks: [...state.Tasks, task] };
  }),
  on(TodoActions.deleteTodoAction, (state: TodoState, task: ITask) => {
    return { ...state, Tasks: [...state.Tasks, task] };
  }),
  on(TodoActions.editTodoAction, (state: TodoState, task: ITask) => {
    return { ...state, Tasks: [...state.Tasks, task] };
  }),
);

export function ToDoReducer(state: TodoState | undefined, action: Action) {
  return reducer(state, action);
}
