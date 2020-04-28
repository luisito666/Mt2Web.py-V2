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

const initialUser: UserLogin = {
    login: '',
    email: '',
    real_name: '',
    social_id: '',
    status: '',
    coins: 0,
    create_time: ''
}

export const UsersInitialState: UsersState = {
    token: null,
    user: initialUser
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
        user: initialUser
    })),

)

export function UsersReducer(state, action) {
    return _UsersReducer(state, action);
  }