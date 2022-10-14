import { StyleSheet } from 'react-native';

const colors = {
  buttonBackground: '#534292',
  buttonText: '#FFFFFF',
  inputBackground: '#FFFFFF',
  linkText: '#0000FF',
  text: '#111111',
  viewBackground: '#DDDDDD',
};

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.buttonBackground,
    borderRadius: 4,
    padding: 10,
    textAlign: 'center',
    width: '100%',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
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
    padding: 20,
    width: '100%',
  },
  link: {
    color: colors.linkText,
    textDecorationLine: 'underline',
  },
  text: {
    color: colors.text,
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    color: colors.text,
    height: 40,
    marginTop: 20,
    textAlign: 'center',
    width: 300,
  },
});
