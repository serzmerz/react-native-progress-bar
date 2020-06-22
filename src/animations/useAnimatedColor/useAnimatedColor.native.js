import { useMemo, useRef } from "react";
import Animated, { Clock } from "react-native-reanimated";
import interpolateColors from "../interpolateColors";
import { runTiming } from "../utils";

const { set, useCode } = Animated;

const inputRange = [0, 50];

export default function useAnimatedColor(color) {
  const colorValue = useRef(new Animated.Value(0));
  const prevColor = useRef(color);

  const backgroundColor = useMemo(
    () =>
      interpolateColors(colorValue.current, {
        inputRange,
        outputColorRange: [prevColor.current, color]
      }),
    [color]
  );

  prevColor.current = color;

  const clock = useRef(new Clock());

  useCode(() => {
    const [from, to] = inputRange;
    return [set(colorValue.current, runTiming(clock.current, from, to))];
  }, [color]);

  return backgroundColor;
}
