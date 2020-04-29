import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    ui: reducers.UIState,
    user: reducers.UsersState,
    ranking: reducers.RankingsState
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: reducers.UIReducer,
    user: reducers.UsersReducer,
    ranking: reducers.RankingReducer
}
