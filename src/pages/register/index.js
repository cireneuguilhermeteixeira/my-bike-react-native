import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
  TextInput,
} from 'react-native';
import api from '~/services/api';
import styles from './styles';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      password: null,
      confirm_password: null,
    };
  }

  handleChange = (name, text) => {
    console.log(name, text);
    this.setState({
      [name]: text,
    });
  };

  confirmPassword = async () => {
    if (
      this.state.password != this.state.confirm_password ||
      !this.state.password ||
      !this.state.user ||
      !this.state.confirm_password
    ) {
      Alert.alert(
        'Error',
        'Preencha os campos corretamente.',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    } else {
      console.log('veio ate aqui');

      const response = await api.post('/create/user', {
        login: 'testizinhoza',
        password: '123333',
        name: 'teste',
      });

      console.log(response);
      Alert.alert(
        'Tudo certo !',
        'Usuário Cadastrado com sucesso !',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Cadastre-se</Text>
        </View>
        <View style={styles.myForm}>
          <View style={{alignItems: 'center'}}></View>
          <TextInput
            placeholder="Usuário"
            onChangeText={text => this.handleChange('user', text)}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry
            onChangeText={text => this.handleChange('password', text)}
            style={styles.textInput}
          />
          <TextInput
            secureTextEntry
            onChangeText={text => this.handleChange('confirm_password', text)}
            placeholder="Confirme a sua senha"
            style={styles.textInput}
          />

          <TouchableOpacity
            onPress={this.confirmPassword}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
