import { createAction, props } from '@ngrx/store';

// UI Actions

// Login Modal
export const ShowLoginModal = createAction(
    '[UI] Show Login Modal',
    props<{show: boolean}>()
);

export const HiddenLoginModal = createAction(
    '[UI] Hidden Login Modal',
    props<{hidden: boolean}>()
);

// Rankins Modal
export const ShowRankingGuildModal = createAction(
    '[UI] Show Ranking Guild Modal',
    props<{show: boolean}>()
)

export const HiddenRankingGuildModal = createAction(
    '[UI] Hidden Ranking Guild Modal',
    props<{hidden: boolean}>()
)

// Player Modal
export const ShowRankingPlayerModal = createAction(
    '[UI] Show Ranking Player Modal',
    props<{show: boolean}>()
)

export const HiddenRankingPlayerModal = createAction(
    '[UI] Hidden Ranking Player Modal',
    props<{hidden: boolean}>()
)

// Profile Modal
export const ShowProfileModal = createAction(
    '[UI] Show Profile Modal',
    props<{show: boolean}>()
)

export const HiddenProfileModal = createAction(
    '[UI] Hidden Profile Modal',
    props<{hidden: boolean}>()
)

// Sub Components Modal Profile
export const TogleManagerMain = createAction(
    '[UI] Toggle Manager Main',
    props<{toggle: boolean}>()
)

export const TogleManagerPlayer = createAction(
    '[UI] Toggle Manager Player',
    props<{toggle: boolean}>()
)

export const TogleManagerPass = createAction(
    '[UI] Toggole Manager Password',
    props<{toggle: boolean}>()
)

export const TogleManagerDonation = createAction(
    '[UI] Toggle Manager Donation',
    props<{toggle: boolean}>()
)

