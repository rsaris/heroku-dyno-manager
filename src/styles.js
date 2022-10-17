import { StyleSheet } from 'react-native';

const colors = {
  buttonBackground: '#534292',
  buttonText: '#FFFFFF',
  inputBackground: '#FFFFFF',
  linkText: '#0000FF',
  text: '#111111',
  viewBackground: '#DDDDDD',
};

const spacing = {
  small: 10,
  medium: 20,
};

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.buttonBackground,
    borderRadius: 4,
    padding: spacing.small,
    textAlign: 'center',
    width: '100%',
  },
  buttonContainer: {
    marginTop: spacing.medium,
    marginBottom: spacing.medium,
    width: '100%',
  },
  buttonText: {
    color: colors.buttonText,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.viewBackground,
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: spacing.medium,
    width: '100%',
  },
  link: {
    color: colors.linkText,
    textDecorationLine: 'underline',
  },
  scrollContainer: {
    alignItems: 'center',
    backgroundColor: colors.viewBackground,
    justifyContent: 'center',
    minHeight: '100%',
    padding: spacing.medium,
  },
  text: {
    color: colors.text,
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    color: colors.text,
    height: 40,
    marginTop: spacing.medium,
    textAlign: 'center',
    width: 300,
  },
});
