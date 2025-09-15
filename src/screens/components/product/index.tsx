import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { styles } from "./styles";
import trash from "../../../../assets/images/trash.png";
import circleGreen from "../../../../assets/images/cicrclegreen.png";
import ciclepurple from "../../../../assets/images/circlepurple.png";

interface Props {
  name: string;
  done: boolean;
  onRemove: () => void;
  onToggleDone: () => void;
}

export function Product({ name, done, onRemove, onToggleDone }: Props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onToggleDone}>
        <Image
          source={done ? ciclepurple : circleGreen}
          style={{ width: 24, height: 24 }}
        />
      </Pressable>

      <Text style={[styles.name, done && styles.checkedText]}>
        {name}
      </Text>

      <TouchableOpacity style={styles.buttonTrash} onPress={onRemove}>
        <Image source={trash} />
      </TouchableOpacity>
    </View>
  );
}
