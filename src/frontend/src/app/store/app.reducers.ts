import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    ui: reducers.UIState,
    user: reducers.UsersState
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: reducers.UIReducer,
    user: reducers.UsersReducer
}
