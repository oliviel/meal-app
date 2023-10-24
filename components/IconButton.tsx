import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
}

const IconButton = ({
  iconName = "star",
  iconSize = 24,
  iconColor = "white",
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.container}
    >
      {/* @ts-ignore */}
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    opacity: 0.75,
  },
});

export default IconButton;
