import { StyleSheet } from 'react-native';
import { THEME } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BACKGROUND,
    padding: THEME.SIZES.SPACING.MD,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: THEME.COLORS.TITLE,
    fontSize: THEME.SIZES.FONT.LG,
    fontFamily: THEME.FONTS.BOLD
  }
});
