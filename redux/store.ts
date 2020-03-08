import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import MainReducer from './reducers';

export interface RelativeRankedShow {
  name: string;
  rank: number;
  percentileRank: number;
}

export interface User {
  username: string;
  token: string;
  showList: RelativeRankedShow[];
}

export interface RelativeRankStore {
  user: User;
  shows: RelativeRankedShow[];
}

export const defaultState: RelativeRankStore = {
  user: null,
  shows: [],
};

const store: Store<RelativeRankStore> = createStore(
  MainReducer,
  defaultState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
