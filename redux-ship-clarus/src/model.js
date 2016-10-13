// @flow
import * as CounterModel from './counter/model';
import * as RandomGifModel from './random-gif/model';
import * as RandomGifPairModel from './random-gif-pair/model';

export type State = {
  counter: CounterModel.State,
  randomGif: RandomGifModel.LocalState,
  randomGifPair: RandomGifPairModel.LocalState,
};

export const initialState: State = {
  counter: CounterModel.initialState,
  randomGif: RandomGifModel.initialLocalState,
  randomGifPair: RandomGifPairModel.initialLocalState,
};

export type Action = {
  type: 'RandomGif',
  action: RandomGifModel.Action,
} | {
  type: 'RandomGifPair',
  action: RandomGifPairModel.Action,
};

export function reduce(state: State, action: Action): State {
  switch (action.type) {
  case 'RandomGif': {
    const {counter, local} = RandomGifModel.reduce({
      counter: state.counter,
      local: state.randomGif,
    }, action.action);
    return {
      ...state,
      counter,
      randomGif: local,
    };
  }
  case 'RandomGifPair': {
    const {counter, local} = RandomGifPairModel.reduce({
      counter: state.counter,
      local: state.randomGifPair,
    }, action.action);
    return {
      ...state,
      counter,
      randomGifPair: local,
    };
  }
  default:
    return state;
  }
}
