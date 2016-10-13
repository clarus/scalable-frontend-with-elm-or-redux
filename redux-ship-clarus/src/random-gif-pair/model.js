// @flow
import * as CounterModel from '../counter/model';
import * as RandomGifModel from '../random-gif/model';

export type LocalState = {
  first: RandomGifModel.LocalState,
  second: RandomGifModel.LocalState,
};

export type State = {
  counter: CounterModel.State,
  local: LocalState,
};

export const initialLocalState: LocalState = {
  first: RandomGifModel.initialLocalState,
  second: RandomGifModel.initialLocalState,
};

export type Action = {
  type: 'First',
  action: RandomGifModel.Action,
} | {
  type: 'Second',
  action: RandomGifModel.Action,
};

export function reduce(state: State, action: Action): State {
  switch (action.type) {
  case 'First': {
    const {counter, local} = RandomGifModel.reduce({
      counter: state.counter,
      local: state.local.first,
    }, action.action);
    return {
      ...state,
      counter,
      local: {
        ...state.local,
        first: local,
      },
    };
  }
  case 'Second': {
    const {counter, local} = RandomGifModel.reduce({
      counter: state.counter,
      local: state.local.second,
    }, action.action);
    return {
      ...state,
      counter,
      local: {
        ...state.local,
        second: local,
      },
    };
  }
  default:
    return state;
  }
}
