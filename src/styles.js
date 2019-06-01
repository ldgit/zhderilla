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
  vendorRow: {
    flexDirection: 'row',
    backgroundColor,
    height: 80,
    borderBottomColor: buttonColor,
    borderBottomWidth: 1,
  },
  condimentRow: {
    flexDirection: 'row',
    height: 50,
    borderBottomColor: buttonColor,
    borderBottomWidth: 1,
  },
  condimentDescription: {
    flex: 3,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 16,
    color: textColor,
  },
  condimentCheckbox: {
    flex: 1,
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
  subtitle: {
    color: 'black',
    fontWeight: '500',
    textAlignVertical: 'center',
    padding: 8,
    fontSize: 18,
  },
  rowArrow: {
    flex: 1,
    alignContent: 'flex-end',
    color: buttonColor,
    fontWeight: '800',
    textAlign: 'right',
    textAlignVertical: 'center',
    padding: 8,
    fontSize: 26,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  vendorDescription: {
    color: 'grey',
    fontWeight: 'normal',
    fontSize: 15,
  },
});

export default styles;
export { headerColor };
