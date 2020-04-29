import { createReducer, on } from '@ngrx/store';
import { 
  ShowLoginModal, 
  HiddenLoginModal,
  ShowRankingGuildModal,
  HiddenRankingGuildModal,
  ShowRankingPlayerModal,
  HiddenRankingPlayerModal,
  ShowProfileModal,
  HiddenProfileModal,
  TogleManagerMain,
  TogleManagerPlayer,
  TogleManagerPass,
  TogleManagerDonation
} from '../actions';


export interface UIState {
    modal_login: boolean;
    modal_profile: boolean;
    modal_ranking_guild: boolean;
    modal_ranking_player: boolean;
    window_manager_main : boolean;
    window_manager_player : boolean;
    window_manager_passwd : boolean;
    window_manager_donations : boolean;
}

export const UIInitialState: UIState = {
    modal_login: false,
    modal_profile: false,
    modal_ranking_guild: false,
    modal_ranking_player: false,
    window_manager_main : true,
    window_manager_player : false,
    window_manager_passwd : false,
    window_manager_donations : false,
}
 
const _UIReducer = createReducer(UIInitialState,
  on(ShowLoginModal, (state, {show}) => ({
      ...state, 
      modal_login: show
    })),
  on(HiddenLoginModal, (state, {hidden}) => ({
      ...state,
      modal_login: !hidden
  })),
  on(ShowRankingGuildModal, (state, {show}) => ({
    ...state,
    modal_ranking_guild: show
  })),
  on(HiddenRankingGuildModal, (state, {hidden}) => ({
    ...state,
    modal_ranking_guild: !hidden
  })),
  on(ShowRankingPlayerModal, (state, {show}) => ({
    ...state,
    modal_ranking_player: show
  })),
  on(HiddenRankingPlayerModal, (state, {hidden}) => ({
    ...state,
    modal_ranking_player: !hidden
  })),
  on(ShowProfileModal, (state, {show}) => ({
    ...state,
    modal_profile: show
  })),
  on(HiddenProfileModal, (state, {hidden}) => ({
    ...state,
    modal_profile: !hidden
  })),
  on(TogleManagerMain, (state, {toggle}) => ({
    ...state,
    window_manager_main: toggle,
    window_manager_player : false,
    window_manager_passwd : false,
    window_manager_donations : false,
  })),
  on(TogleManagerPlayer, (state, {toggle}) => ({
    ...state,
    window_manager_main: false,
    window_manager_player : toggle,
    window_manager_passwd : false,
    window_manager_donations : false,
  })),
  on(TogleManagerPass, (state, {toggle}) => ({
    ...state,
    window_manager_main: false,
    window_manager_player : false,
    window_manager_passwd : toggle,
    window_manager_donations : false,
  })),
  on(TogleManagerDonation, (state, {toggle}) => ({
    ...state,
    window_manager_main: false,
    window_manager_player : false,
    window_manager_passwd : false,
    window_manager_donations : toggle,
  })),

);
 
export function UIReducer(state, action) {
  return _UIReducer(state, action);
}
