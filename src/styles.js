import { StyleSheet } from 'react-native';

const buttonColor = '#418F02';
const backgroundColor = 'white';
const headerColor = '#418F02';
const textColor = 'black';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
  },
  items: {
    flex: 1,
    backgroundColor,
  },
  row: {
    flex: 1,
    display: 'flex',
    alignContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor,
    justifyContent: 'center',
  },
  rowItem: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: textColor,
  },
  button: {
    flex: 1,
    backgroundColor: buttonColor,
    borderRadius: 5,
    elevation: 4,
    margin: 10,
    color: 'black',
  },
  buttonText: {
    flex: 1,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 8,
    fontSize: 18,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default styles;
export { headerColor };
