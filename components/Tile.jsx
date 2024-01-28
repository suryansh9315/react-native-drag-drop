import { Image, StyleSheet, View } from "react-native";
import { MARGIN, SIZE } from "./Config";

const Tile = ({ uri }) => {
  return (
    <View style={styles.container} pointerEvents="none">
      <Image
        source={{ uri: uri }}
        style={{ flex: 1, margin: MARGIN * 2, borderRadius: MARGIN }}
      />
    </View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
  },
});
