import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// RXJS
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// Actions
import * as usersActions from '../actions';

// Service
import { AuthenticateService } from 'src/app/services/services.module';

// Interface
import { UserLogin } from 'src/app/interfaces/user.simple';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private authenticate: AuthenticateService
    ){}


    AddUser$ = createEffect(
        () => this.actions$.pipe(
            ofType( usersActions.AddToken ),
            mergeMap(
                () => this.authenticate.get_current_user()
                    .pipe(
                        map((user: UserLogin) => usersActions.AddUser({user: user}) ),
                        catchError( err => of(usersActions.AddUserError({error: err})) )
                    )
            )
        )
    )

}