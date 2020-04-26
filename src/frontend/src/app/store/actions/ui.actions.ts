import { createAction, props } from '@ngrx/store';

// UI Actions
export const ShowLoginModal = createAction(
    '[UI] Show Login Modal',
    props<{show: boolean}>()
);

export const HiddenLoginModal = createAction(
    '[UI] Hidden Login Modal',
    props<{hidden: boolean}>()
);

export const ShowRankingGuildModal = createAction(
    '[UI] Show Ranking Guild Modal',
    props<{show: boolean}>()
)

export const HiddenRankingGuildModal = createAction(
    '[UI] Hidden Ranking Guild Modal',
    props<{hidden: boolean}>()
)

