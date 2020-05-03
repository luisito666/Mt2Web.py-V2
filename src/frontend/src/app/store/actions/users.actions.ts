import { createAction, props } from '@ngrx/store';

// Interface
import { UserLogin } from 'src/app/interfaces/';

// Users Actions

export const AddToken = createAction(
    '[USERS] Add Token to Store',
    props<{token: string}>()
)

export const DeleteToken = createAction(
    '[USERS] Delete Token from Store'
)

export const AddUser = createAction(
    '[USERS] Add user to Store',
    props<{user: UserLogin}>()
)

export const DeleteUser = createAction(
    '[USERS] Delete user from Store',
)

export const AddUserError = createAction(
    '[USERS] Error to load user',
    props<{error: any}>()
)
