import { getUser, getCommit, } from '../services/github'

const inintState: IAppModelState = {
  githubData: {},
  commitData: {},
}

export interface IAppModelState {
  githubData?: any;
  commitData: any;
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
      if(res){
        yield put({ type: "setCommitData", payload: res||{} });
      }
    },
  },
  reducers: {
    setGithubData(state: IAppModelState, { payload }) {
      state.githubData = payload
      return state
    },
    setCommitData(state: IAppModelState, { payload }) {
      state.commitData = payload
      return state
    },
  }
};
