import { Dimensions } from "react-native";
import { Easing } from "react-native-reanimated";

const { width } = Dimensions.get("window");
export const MARGIN = 8;
export const SIZE = width / 2 - MARGIN;
export const COL = 2;

export const animationConfig = {
  easing: Easing.inOut(Easing.ease),
  duration: 350,
};

export const getPosition = (order) => {
  "worklet";
  return {
    x: order % COL === 0 ? 0 : SIZE * (order % COL),
    y: Math.floor(order / COL) * SIZE,
  };
};

export const getOrder = (tx, ty, max) => {
  "worklet";
  const x = Math.round(tx / SIZE) * SIZE;
  const y = Math.round(ty / SIZE) * SIZE;
  const row = Math.max(y, 0) / SIZE;
  const col = Math.max(x, 0) / SIZE;
  return Math.min(row * COL + col, max);
};
