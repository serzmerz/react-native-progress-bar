import Animated, { EasingNode } from "react-native-reanimated";

const { Value, block, cond, clockRunning, startClock, stopClock, set, timing } = Animated;

export function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 200,
    toValue: new Value(0),
    easing: EasingNode.inOut(EasingNode.ease)
  };

  return block([
    cond(
      clockRunning(clock),
      [set(config.toValue, dest)],
      [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock)
      ]
    ),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position
  ]);
}
