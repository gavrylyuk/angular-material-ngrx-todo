import { createAction, props } from '@ngrx/store';
import { ITask } from '../../models/task.interface';

export const getTodoAction = createAction('[TODO] Get Task');

export const createTodoAction = createAction(
  '[TODO] Create Task',
  props<ITask>()
);

export const deleteTodoAction = createAction(
    '[TODO] Delete Task',
    props<ITask>()
  );

export const editTodoAction = createAction(
    '[TODO] Edit Task',
    props<ITask>()
  );
