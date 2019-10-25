import { getUser, getCommit, } from '../services/github'

const inintState: IAppModelState = {
  githubData: {}
}

export interface IAppModelState {
  githubData?: any;
}

export default {
  namespace: "app",
  state: inintState,
  effects: {
    *setGithubDataAction({ user }, { call, put }) {
      const res = yield call(getUser, { user } );
      if(res){
        yield put({ type: "setGithubData", payload: res||{} });
      }
    },
    *setCommitDataAction({ user }, { call, put }) {
      const res = yield call(getCommit, { user } );
      // if(res){
      //   yield put({ type: "setGithubData", payload: res||{} });
      // }
    },
  },
  reducers: {
    setGithubData(state: IAppModelState, { payload }) {
      state.githubData = payload
      return state
    },
  }
};
