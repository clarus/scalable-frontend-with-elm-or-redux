// @flow
import React, { PureComponent } from 'react';
import * as RandomGifController from '../random-gif/controller';
import RandomGif from '../random-gif/view';
import * as Controller from './controller';
import * as Model from './model';

type Props = {
  dispatch: (action: Controller.Action) => void,
  state: Model.LocalState,
  tags: {
    first: string,
    second: string,
  },
};

export default class RandomGifPair extends PureComponent<void, Props, void> {
  handleDispatchFirst = (action: RandomGifController.Action): void => {
    this.props.dispatch({type: 'First', action});
  };

  handleDispatchSecond = (action: RandomGifController.Action): void => {
    this.props.dispatch({type: 'Second', action});
  };

  render() {
    return (
      <div>
        <RandomGif
          dispatch={this.handleDispatchFirst}
          state={this.props.state.first}
          tag={this.props.tags.first}
        />
        <RandomGif
          dispatch={this.handleDispatchSecond}
          state={this.props.state.second}
          tag={this.props.tags.second}
        />
      </div>
    );
  }
}
