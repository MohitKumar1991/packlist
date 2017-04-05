/* @flow */
import * as t from './actionTypes';

export function selectTrip(tripId: string) {
  return {
    type: t.SELECT_TRIP,
    tripId,
  };
}

export function dismissWelcome() {
  return {
    type: t.DISMISS_WELCOME,
  };
}
