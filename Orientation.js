'use strict';
const {
  NativeEventEmitter,
  NativeModules: {Orientation},
} = require('react-native');

const LocalEventEmitter = new NativeEventEmitter(Orientation);

export default {
  ...Orientation,
  addOrientationListener: cb =>
    LocalEventEmitter.addListener('orientationDidChange', event => {
      cb(event.orientation);
    }).remove,
  addDeviceOrientationListener: cb =>
    LocalEventEmitter.addListener('deviceOrientationDidChange', body => {
      cb(body.deviceOrientation);
    }).remove,
  addLockListener: cb =>
    LocalEventEmitter.addListener('lockDidChange', body => {
      cb(body.orientation);
    }).remove,
  getInitialOrientation: () => Orientation.initialOrientation,
};
