import { AnyAction, Dispatch } from 'redux';
import { RouterTypes } from 'umi';
import { IAppModelState } from './app';


export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    app?: boolean;
  };
}

export interface ConnectState {
  app: IAppModelState;
  loading: Loading;
}


/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<T = {}> extends Partial<RouterTypes<{}, T>> {
  dispatch?: Dispatch<AnyAction>;
}
