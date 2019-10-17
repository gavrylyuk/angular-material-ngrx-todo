// import {
//   ActionReducer,
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer
// } from '@ngrx/store';

// // import { environment } from '../../../environments/environment';

// import * as fromTasks from './tasks';

// export interface State {
//   tasks: fromTasks.State;
// }

// export const reducers: ActionReducerMap<State> = {
//   tasks: fromTasks.reducer
// };


// // export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// export function logger(reducer: ActionReducer<State>):
//   ActionReducer<State> {
//     return (state: State, action: any): State => {
//       console.log('state', state);
//       console.log('action', action);
//       return reducer(state, action);
//     };
//   }

// export const metaReducers: MetaReducer<State>[] = [logger];
