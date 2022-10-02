import { TouchableOpacity } from "react-native";
import { colors, spacing } from "../../../pages/styles";
import Arrow from "../../icons/Arrow";

const BackButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", paddingLeft: spacing.xs, paddingRight: spacing.m }}
    >
      <Arrow
        width={20}
        height={20}
        style={{ transform: [{ rotateY: "180deg" }] }}
        color={colors.white}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
