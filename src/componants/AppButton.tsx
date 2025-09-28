import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType; // require(...) or {uri: "..."}
  iconStyle?: StyleProp<ImageStyle>;
  activeOpacity?: number;
  disabled?: boolean;
  accessibilityLabel?: string;
};

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  icon,
  iconStyle,
  activeOpacity = 0.8,
  disabled = false,
  accessibilityLabel,
}) => {
  return (
    <TouchableOpacity
      accessible
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabled, style]}
    >
      {icon ? (
        <View style={styles.iconWrapper}>
          <Image
            source={icon}
            style={[styles.icon, iconStyle]}
            resizeMode="contain"
          />
        </View>
      ) : null}

      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDB130', // default yellow
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 28,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    minWidth:220,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1B1B1B',
  },
  iconWrapper: {
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default AppButton;
