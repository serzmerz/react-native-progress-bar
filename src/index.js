import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";
import styles from "./styles";
import useOnLayout from './useOnLayout';
import useAnimatedColor from './animations/useAnimatedColor/useAnimatedColor';
import useAnimatedProgress from './animations/useAnimatedProgress/useAnimatedProgress';


const AnimatedProgress = ({ fill, current, total, style }) => {
  const percent = current / total;
  const [{ width }, onLayout] = useOnLayout();

  const backgroundColor = useAnimatedColor(fill);
  const translateX = useAnimatedProgress(width, percent);

  return (
    <View style={[styles.container, style]} onLayout={onLayout}>
    <Animated.View style={[styles.progress, { backgroundColor, transform: [{ translateX }] }]} />
  </View>
);
};

export default AnimatedProgress;
