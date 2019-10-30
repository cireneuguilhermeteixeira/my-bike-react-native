import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#35495e',
  },

  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },

  nutriImage: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
  },

  myForm: {
    marginTop: 50,
    width: Dimensions.get('window').width - 50,
    backgroundColor: '#e9e9e9',
    borderColor: '#0000',
    borderRadius: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
  },

  title: {
    marginTop: 20,
    color: '#ffff',
    fontSize: 35,
  },

  buttonContainer: {
    backgroundColor: '#347474',
    paddingVertical: 15,
    margin: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFF',
    fontWeight: '700',
  },

  createCount: {
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 10,
  },
});

export default styles;
