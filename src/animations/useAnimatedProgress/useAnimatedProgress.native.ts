import { useEffect, useState } from "react";
import Animated, { EasingNode } from "react-native-reanimated";

const { Value, timing } = Animated;

export default function useAnimatedProgress(width: number, percent: number): Animated.Node<number> {
  const [translateX] = useState(new Value(0));

  useEffect(() => {
    timing(translateX, {
      toValue: width * percent,
      duration: 200,
      easing: EasingNode.inOut(EasingNode.ease)
    }).start();
  }, [percent, width]);

  return translateX;
}
