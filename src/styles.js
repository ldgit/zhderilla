import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  items: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex: 1,
    display: 'flex',
    alignContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
  },
  rowItem: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    flex: 1,
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 4,
  },
  buttonText: {
    flex: 1,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 8,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default styles;
