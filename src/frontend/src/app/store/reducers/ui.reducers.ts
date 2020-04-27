import { createReducer, on } from '@ngrx/store';
import { 
  ShowLoginModal, 
  HiddenLoginModal,
  ShowRankingGuildModal,
  HiddenRankingGuildModal,
  ShowRankingPlayerModal,
  HiddenRankingPlayerModal
} from '../actions';


export interface UIState {
    modal_login: boolean;
    modal_ranking_guild: boolean;
    modal_ranking_player: boolean;
}

export const UIInitialState: UIState = {
    modal_login: false,
    modal_ranking_guild: false,
    modal_ranking_player: false
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
  }))
);
 
export function UIReducer(state, action) {
  return _UIReducer(state, action);
}
