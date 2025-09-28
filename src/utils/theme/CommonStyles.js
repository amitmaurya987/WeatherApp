import { StyleSheet } from 'react-native';
import { Sizes, useTheme } from '@utils/theme';
import FONTS from '@utils/Fonts';

const CommonStyle = () => {
  const theme = useTheme();

  return StyleSheet.create({
    header: {
      fontSize: Sizes.FontSize.Title3,
      textAlign: 'center',
      color: theme.Text,
      fontFamily: FONTS.RUBIK_MEDIUM,
    },
    subheader: {
      fontSize: Sizes.FontSize.Title2,
      color: theme.Text,
      textAlign: 'center',
      fontFamily: FONTS.RUBIK_MEDIUM,
    },
    regularText: {
      fontSize: Sizes.FontSize.Regular,
      color: theme.Text,
      fontFamily: FONTS.RUBIK_SMALL,
    },
    smallText: {
      fontSize: Sizes.FontSize.Small,
      color: theme.Text,
      fontFamily: FONTS.RUBIK_SMALL,
    },
    buttonText: {
      fontSize: Sizes.FontSize.Title,
      color: theme.White,
      fontFamily: FONTS.RUBIK_MEDIUM,
    },
    labelText: {
      fontSize: Sizes.FontSize.Small,
      color: theme.Black,
      fontFamily: FONTS.RUBIK_SMALL,
    },
    bbpsText: {
      fontSize: Sizes.FontSize.Title,
      color: theme.Black,
      fontFamily: FONTS.RUBIK_SMALL,
    },
    mediumText: {
      fontSize: Sizes.FontSize.Small,
      color: theme.Black,
      fontFamily: FONTS.RUBIK_MEDIUM,

    },
    modalText: {
      fontSize: Sizes.FontSize.Regular,
      color: theme.Black,
      fontFamily: FONTS.RUBIK_MEDIUM,
    },
    RupeeText: {
      fontSize: Sizes.FontSize.Title2,
      color: theme.Black,
      fontFamily: FONTS.RUBIK_MEDIUM,
    },
    button: {
      height: Sizes.ButtonSizes.RegularHeight,
      width: Sizes.ButtonSizes.RegularWidth,
      borderRadius: Sizes.ButtonSizes.RegularRadius,
      backgroundColor: theme.Primary,
    },
    profileIcon: {
      width: Sizes.PROFILE_ICON_SIZE,
      height: Sizes.PROFILE_ICON_SIZE,
      borderRadius: Sizes.PROFILE_ICON_SIZE / 2,
    },
    switch: {
      width: Sizes.SWITCH_SIZE,
      height: Sizes.SWITCH_SIZE,
    },
    containerCentered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  });
};
export default CommonStyle;
