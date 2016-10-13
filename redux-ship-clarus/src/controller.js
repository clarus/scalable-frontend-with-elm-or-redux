// @flow
import * as Ship from 'redux-ship';
import * as RandomGifController from './random-gif/controller';
import * as RandomGifPairController from './random-gif-pair/controller';
import * as Model from './model';

export type Action = {
  type: 'RandomGif',
  action: RandomGifController.Action,
} | {
  type: 'RandomGifPair',
  action: RandomGifPairController.Action,
};

export function* control(action: Action): Ship.Ship<*, Model.Action, Model.State, void> {
  switch (action.type) {
  case 'RandomGif': {
    return yield* Ship.map(
      action => ({type: 'RandomGif', action}),
      state => ({
        counter: state.counter,
        local: state.randomGif,
      }),
      RandomGifController.control(action.action)
    );
  }
  case 'RandomGifPair': {
    return yield* Ship.map(
      action => ({type: 'RandomGifPair', action}),
      state => ({
        counter: state.counter,
        local: state.randomGifPair,
      }),
      RandomGifPairController.control(action.action)
    );
  }
  default:
    return;
  }
}
