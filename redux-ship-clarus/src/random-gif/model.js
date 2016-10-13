// @flow
import * as CounterModel from '../counter/model';

export type LocalState = {
  gifUrl: ?string,
  isLoading: bool,
};

export type State = {
  counter: CounterModel.State,
  local: LocalState,
};

export const initialLocalState: LocalState = {
  gifUrl: null,
  isLoading: false,
};

export type Action = {
  type: 'LoadStart',
} | {
  type: 'LoadSuccess',
  gifUrl: string,
};

export function reduce(state: State, action: Action): State {
  switch (action.type) {
  case 'LoadStart':
    return {
      ...state,
      local: {
        ...state.local,
        isLoading: true,
      },
    };
  case 'LoadSuccess':
    return {
      ...state,
      counter: {
        count: state.counter.count + (state.counter.count >= 10 ? 2 : 1),
      },
      local: {
        ...state.local,
        gifUrl: action.gifUrl,
        isLoading: false,
      },
    };
  default:
    return state;
  }
}
