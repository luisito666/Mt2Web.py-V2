import { createReducer, on } from '@ngrx/store';
import { 
    AddToken,
    DeleteToken,
    AddUser,
    DeleteUser
} from '../actions';

import { UserLogin } from 'src/app/interfaces/user.simple';


export interface UsersState {
    token: string;
    user: UserLogin;
}

export const UsersInitialState: UsersState = {
    token: null,
    user: null
}

const _UsersReducer = createReducer(UsersInitialState,
    on(AddToken, (state, {token}) => ({
        ...state,
        token: token
    })),
    on(DeleteToken, (state) => ({
        ...state,
        token: null
    })),
    on(AddUser, (state, {user}) => ({
        ...state,
        user: user
    })),
    on(DeleteUser, (state) => ({
        ...state,
        user: null
    })),

)

export function UsersReducer(state, action) {
    return _UsersReducer(state, action);
  }